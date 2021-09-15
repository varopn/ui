const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const BasicAuth = require("../lib/PageObject/basicAuth");

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
    it("basic auth page", async () => {
        const basicAuth = new BasicAuth();

        await basicAuth.authenticate(page);
        const title = await basicAuth.getTitle(page);
        expect(title).toContain(locators.basicAuthTitleData);
    }, 9000);
});