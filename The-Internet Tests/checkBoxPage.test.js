const puppeteer = require("puppeteer");
const Checkboxes = require("../lib/PageObject/checkboxes");


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
    it("checkboxes page", async () => {
        const checkboxes = new Checkboxes();

        await checkboxes.goto(page);
        let expectedResult = await checkboxes.clickCheckbox1(page);
        expect(expectedResult).toBeDefined();
        let expectedResult1 = await checkboxes.clickCheckbox2(page);
        expect(expectedResult1).toBeNull();
    }, 9000);
});
