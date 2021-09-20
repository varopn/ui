const puppeteer = require("puppeteer");
const jestOr = require("../expecrOr");
const locators = require("../lib/Locators/locators");
const HorizontalSlider = require("../lib/PageObject/horizontalSlider");

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
    it("notification page", async () => {
        const horizontalSlider = new HorizontalSlider();

        await horizontalSlider.goto(page);
        await horizontalSlider.clickAndSlideDelay(page);
        let value = await horizontalSlider.getSliderValue(page);
        let valueInDiv = await horizontalSlider.getSliderDivValue(page);
        expect(value).toBe('3');
        expect(valueInDiv).toBe('3');

        await horizontalSlider.goto(page);
        await horizontalSlider.clickAndDoubleSlideDelay(page);
        value = await horizontalSlider.getSliderValue(page);
        valueInDiv = await horizontalSlider.getSliderDivValue(page);
        expect(value).toBe('3.5');
        expect(valueInDiv).toBe('3.5');
    }, 15000);
});
