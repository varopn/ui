const puppeteer = require("puppeteer");
const { jsAlertResult } = require("../lib/Locators/locators");
const locators = require("../lib/Locators/locators");
const JSAlert = require("../lib/PageObject/jsAlert");

let page;
let browser;
const width = 1920;
const height = 1080;
const jsAlert = new JSAlert();
let alertMessage;
let title;

beforeEach(async () => {
    browser = await puppeteer.launch({
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
}); 

afterEach(() => {
    browser.close();
}); 


describe("UI Tests", () => {
    describe("js Alerts page",  () => {
        it("js Alert Prompt", async () => {
            await page.on('dialog', async (dialog) => {
                alertMessage = dialog.message();
                await dialog.accept("Hello");
            });
            await jsAlert.goto(page);
            await jsAlert.clickjsPrompt(page);
            title = await jsAlert.getTitleOfDiv(page);
            expect(alertMessage).toContain(locators.jsAlertPromptTitle);
            expect(title).toContain(locators.jsAlertPromptMessageType);
        }, 20000);
    });
});

describe("UI Tests", () => {
    describe("js Alerts page",  () => {
        it("js Alert", async () => {
            await page.on('dialog', async (dialog) => {
                alertMessage = dialog.message();
                await dialog.accept();
            } );
            await jsAlert.goto(page);
            await jsAlert.clickJSAlert(page);
            title = await jsAlert.getTitleOfDiv(page);
            expect(alertMessage).toContain(locators.jsAlertTitle);
            expect(title).toContain(locators.jsAlertResult);
        }, 9000);
    });
});

describe("UI Tests", () => {
    describe("js Alerts page",  () => {
        it("js Alert Confim OK", async () => {
            await page.on('dialog', async (dialog) => {
                alertMessage = dialog.message();
                await dialog.accept();
            } );
            await jsAlert.goto(page);
            await jsAlert.clickJSConfim(page);
            title = await jsAlert.getTitleOfDiv(page);
            expect(alertMessage).toContain(locators.jsAlertConfirmTitle);
            expect(title).toContain(locators.jsAlertConfimResultOk);
        }, 9000);
    });
});