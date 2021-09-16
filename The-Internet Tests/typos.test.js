const puppeteer = require("puppeteer");
const jestOr = require("../expecrOr");
const locators = require("../lib/Locators/locators");
const Typos = require("../lib/PageObject/typos");

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
}); 

afterAll(() => {
    browser.close();
}); 


describe("UI Tests", () => {
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
