const puppeteer = require("puppeteer");
const locators = require("./lib/Locators/locators");
const AddRemove = require("./lib/PageObject/addRemove");
const BasicAuth = require("./lib/PageObject/basicAuth");
const BrokenImage = require('./lib/PageObject/brokenImage');
const ChallengingDom = require("./lib/PageObject/challengingDom");
const Checkboxes = require("./lib/PageObject/checkboxes");

let page;
let browser;
const width = 1920;
const height = 1080;
jest.setTimeout(10000);

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
});
afterAll(() => {
    browser.close();
});

describe("UI Tests", () => {
    it("AddRemove buttons page", async () => {
        const addRemove = new AddRemove();
        await addRemove.navigate(page);
        await addRemove.clickAddButton(page);

        let addedButton = await addRemove.getDeleteButton(page);
        expect(addedButton).toBeTruthy();

        await addRemove.clickDeleteButton(page);
    }, 9000);

    it("basic auth page", async () => {
        const basicAuth = new BasicAuth();

        await basicAuth.authenticate(page);
        const title = await basicAuth.getTitle(page);
        expect(title).toContain(locators.basiAuthTitleData);
    }, 9000);

    it("broken image page", async () => {
        const brokenImage = new BrokenImage();

        await brokenImage.goto(page);
        let brokenImage1 = await brokenImage.getImage1(page);
        expect(brokenImage1).toBe('Not Found');

        let brokenImage2 = await brokenImage.getImage2(page);
        expect(brokenImage2).toBe('Not Found');

        let brokenImage3 = await brokenImage.getImage3(page);
        expect(brokenImage3).toBe('img');

    }, 9000);

    it("challenging DOM page", async () => {
        const challengingDom = new ChallengingDom();

        await challengingDom.goto(page);
        await challengingDom.getButton1(page);
        await challengingDom.getButton2(page);

        let button3 = await challengingDom.getButton3(page);
        expect(button3).toContain('button');

    }, 30000);

    it("checkboxes page", async () => {
        const checkboxes = new Checkboxes();

        await checkboxes.goto(page);
        let expectedResult = await checkboxes.clickCheckbox1(page);
        expect(expectedResult).toBeDefined();
        let expectedResult1 = await checkboxes.clickCheckbox2(page);
        expect(expectedResult1).toBeNull();
    }, 30000);
});

