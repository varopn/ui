const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const FloatingMenu = require("../lib/PageObject/floatingMenu")

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
}); 

afterAll(() => {
    browser.close();
});

describe("UI Tests", () => {
    it("floating menu page", async () => {
        const floatingMenu = new FloatingMenu();

        await floatingMenu.goto(page);
        await floatingMenu.clickHome(page);
        await floatingMenu.clickNews(page);
        await floatingMenu.clickContact(page);
        await floatingMenu.clickAbout(page);
        await floatingMenu.scroll(page);
        await floatingMenu.clickHome(page);
        await floatingMenu.clickNews(page);
        await floatingMenu.clickContact(page);
        await floatingMenu.clickAbout(page);
    }, 20000);
});