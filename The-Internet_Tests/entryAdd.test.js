const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const EntryAdd = require("../lib/PageObject/entryAdd")

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
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
    it("entry add page", async () => {
        const entryAdd = new EntryAdd();

        await entryAdd.goto(page);
        await entryAdd.waitForModalWindow(page);
        const title = await entryAdd.getModalWindowTitle(page);
        await entryAdd.clickCloseButton(page);
        expect(title).toContain(locators.entryAddTitle);
    }, 20000);
});