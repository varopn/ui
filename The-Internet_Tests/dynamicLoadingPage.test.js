const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const DynamicLoading = require("../lib/PageObject/dynamicLoading");

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
    it("dynamic loading page", async () => {
        const dynamicLoading = new DynamicLoading();

        await dynamicLoading.gotoFirstLink(page);
        await dynamicLoading.clickStartButton(page);
        await page.waitForTimeout(4000);
        const titleOfDiv = await dynamicLoading.getTitleAfterClicking(page);
        expect(titleOfDiv).toContain(locators.dynamicLoadingDivTitle);

        await dynamicLoading.gotoSecondLink(page);
        await dynamicLoading.clickStartButton(page);
        await page.waitForTimeout(4000);
        const titleOfDivSecond = await dynamicLoading.getTitleAfterClicking(page);
        expect(titleOfDivSecond).toContain(locators.dynamicLoadingDivTitle);
    }, 20000); 
});