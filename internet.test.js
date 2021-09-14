const puppeteer = require("puppeteer");
const jestOr = require("./expecrOr");
const locators = require("./lib/Locators/locators");
const AddRemove = require("./lib/PageObject/addRemove");
const BasicAuth = require("./lib/PageObject/basicAuth");
const BrokenImage = require('./lib/PageObject/brokenImage');
const ChallengingDom = require("./lib/PageObject/challengingDom");
const Checkboxes = require("./lib/PageObject/checkboxes");
const ContextMenu = require("./lib/PageObject/contextMenu");
const DigestAuth = require("./lib/PageObject/digestAuth");
const Dropdown = require("./lib/PageObject/dropdown");
const DynamicContent = require("./lib/PageObject/dynamicContent");
const Typos = require("./lib/PageObject/typos");
const StatusCode = require("./lib/PageObject/statusCode");

let page;
let browser;
const width = 1920;
const height = 1080;
jest.setTimeout(10000);

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true,
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
    it("digest auth page", async () => {
        const digestAuth = new DigestAuth();

        await digestAuth.authenticate(page);
        const title = await digestAuth.getTitle(page);
        expect(title).toContain(locators.digestAuthTitleData);
    }, 20000);

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
        expect(title).toContain(locators.basicAuthTitleData);
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

    }, 9000);

    it("checkboxes page", async () => {
        const checkboxes = new Checkboxes();

        await checkboxes.goto(page);
        let expectedResult = await checkboxes.clickCheckbox1(page);
        expect(expectedResult).toBeDefined();
        let expectedResult1 = await checkboxes.clickCheckbox2(page);
        expect(expectedResult1).toBeNull();
    }, 9000);

    it("context Menu page", async () => {
        const contextMenu = new ContextMenu();
        let alertMessage;
        await page.on('dialog', async (dialog) => {
            alertMessage = dialog.message();
            await dialog.accept();
        } );
        await contextMenu.goto(page);
        await contextMenu.clickContexMenu(page);
        expect(alertMessage).toContain(locators.alertMessage);
    }, 9000); 

     it("dropdown page", async () => {
        const dropdown = new Dropdown();

        await dropdown.goto(page);
        const titleOfDisabledOption = await dropdown.getTitleOfDisabledOption(page);
        expect(titleOfDisabledOption).toContain(locators.dropdownDisabledOptionTitle);

        await dropdown.clickFirstOption(page);
        const titleOfFirstOption= await dropdown.getTitleOfFirstOption(page);
        expect(titleOfFirstOption).toContain(locators.dropdownFirstOptionTitle);

        await dropdown.clickSecondOption(page);
        const titleOfSecondOption= await dropdown.getTitleOfSecondOption(page);
        expect(titleOfSecondOption).toContain(locators.dropdownSecondOptionTitle);
    }, 9000); 

    it("dynamic content page", async () => {
        const dynamicContent = new DynamicContent();

        await dynamicContent.goto(page);
        const titleOfFirstDiv = await dynamicContent.getTitleOfFirstDiv(page);
        const titleOfSecondDiv= await dynamicContent.getTitleOfSecondDiv(page);
        const titleOfThirdDiv= await dynamicContent.getTitleOfThirdDiv(page);

        await dynamicContent.refresh(page);
        const titleOfFirstDivAdd = await dynamicContent.getTitleOfFirstDiv(page);
        const titleOfSecondDivAdd = await dynamicContent.getTitleOfSecondDiv(page);
        const titleOfThirdDivAdd = await dynamicContent.getTitleOfThirdDiv(page);

        expect(titleOfFirstDiv).toContain(titleOfFirstDivAdd);
        expect(titleOfSecondDiv).toContain(titleOfSecondDivAdd);
        expect(titleOfThirdDiv).not.toContain(titleOfThirdDivAdd);
    }, 9000);
    
    it("status code page", async () => {
        const statusCode = new StatusCode();

        await statusCode.goto(page);

        const actualStatusCode1 = await statusCode.getStatusCode200(page);
        await statusCode.clickBackLink(page);
        await page.waitForTimeout(1000);

        const actualStatusCode2 = await statusCode.getStatusCode301(page);
        await statusCode.clickBackLink(page);
        await page.waitForTimeout(500);

        const actualStatusCode3 = await statusCode.getStatusCode404(page);
        await statusCode.clickBackLink(page);
        await page.waitForTimeout(500);

        const actualStatusCode4 = await statusCode.getStatusCode500(page);
        await statusCode.clickBackLink(page);

        expect(actualStatusCode1).toBe(200);
        expect(actualStatusCode2).toBe(301);
        expect(actualStatusCode3).toBe(404);
        expect(actualStatusCode4).toBe(500);
    }, 9000); 

    it("typos page", async () => {
        const typos = new Typos();

        await typos.goto(page);
        const titleOfDiv = await typos.getTitleOfDiv(page);

        jestOr.expect_or(
            () => expect(titleOfDiv).toContain(locators.typosDivTitleRandom),
            () => expect(titleOfDiv).toContain(locators.typosDivTitle),
        );
    }, 9000); 
});
