const puppeteer = require("puppeteer");
const DynamicContent = require("../lib/PageObject/dynamicContent");


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
    it("dynamic content page", async () => {
        const dynamicContent = new DynamicContent();

        await dynamicContent.goto(page);
        const titleOfFirstDiv = await dynamicContent.getTitleOfFirstDiv(page);
        const titleOfSecondDiv= await dynamicContent.getTitleOfSecondDiv(page);
        const titleOfThirdDiv= await dynamicContent.getTitleOfThirdDiv(page);

        await dynamicContent.refresh(page);
        const titleOfFirstDivAdd = await dynamicContent.getTitleOfFirstDiv(page);
        const titleOfSecondDivAdd = await dynamicContent.getTitleOfSecondDiv(page);
        const titleOfThirdDivAdd = await dynamicContent.getTitleOfThirdDiv(page);

        expect(titleOfFirstDiv).toContain(titleOfFirstDivAdd);
        expect(titleOfSecondDiv).toContain(titleOfSecondDivAdd);
        expect(titleOfThirdDiv).not.toContain(titleOfThirdDivAdd);
    }, 9000); 
});