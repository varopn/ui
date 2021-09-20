const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const Dropdown = require("../lib/PageObject/dropdown");


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
     it("dropdown page", async () => {
        const dropdown = new Dropdown();

        await dropdown.goto(page);
        const titleOfDisabledOption = await dropdown.getTitleOfDisabledOption(page);
        expect(titleOfDisabledOption).toContain(locators.dropdownDisabledOptionTitle);

        await dropdown.clickFirstOption(page);
        const titleOfFirstOption= await dropdown.getTitleOfFirstOption(page);
        expect(titleOfFirstOption).toContain(locators.dropdownFirstOptionTitle);

        await dropdown.clickSecondOption(page);
        const titleOfSecondOption= await dropdown.getTitleOfSecondOption(page);
        expect(titleOfSecondOption).toContain(locators.dropdownSecondOptionTitle);
    }, 9000);
});
