const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const ExitIntent = require("../lib/PageObject/exitIntent")

let page;
let browser;
const width = 1920;
const height = 1080;

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
    it("exit intent page", async () => {
        const exitIntent = new ExitIntent();

        await exitIntent.goto(page);
        await exitIntent.mouseMove(page);
        await exitIntent.waitForModalWindow(page);
        const title = await exitIntent.getModalWindowTitle(page);
        await exitIntent.clickCloseButton(page);
        expect(title).toContain(locators.exitAddTitle);
    }, 20000);
});