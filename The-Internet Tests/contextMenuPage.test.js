const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const ContextMenu = require("../lib/PageObject/contextMenu");

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
});