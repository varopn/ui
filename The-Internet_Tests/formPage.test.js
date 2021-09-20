const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const Form = require("../lib/PageObject/form")

let page;
let browser;
const width = 1920;
const height = 1080;

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: true,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
}); 

afterEach(() => {
    browser.close();
});

describe("UI Tests", () => {
    it("form auth page", async () => {
        const form = new Form();

        await form.goto(page);
        await form.typeLogin(page);
        await form.typePassword(page);
        await form.clickLogin(page);
        const title = await form.getTitle(page);
        await form.clickLogout(page);

        expect(title).toContain(locators.formDivData);
    }, 20000);
});