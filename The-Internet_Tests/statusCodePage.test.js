const puppeteer = require("puppeteer");
const StatusCode = require("../lib/PageObject/statusCode");

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
    it("status code page", async () => {
        const statusCode = new StatusCode();

        await statusCode.goto(page);
        await page.waitForTimeout(1000);

        const actualStatusCode1 = await statusCode.getStatusCode200(page);
        await statusCode.clickBackLink(page);
        await page.waitForTimeout(1000);

        const actualStatusCode2 = await statusCode.getStatusCode301(page);
        await statusCode.clickBackLink(page);
        await page.waitForTimeout(1000);

        const actualStatusCode3 = await statusCode.getStatusCode404(page);
        await statusCode.clickBackLink(page);
        await page.waitForTimeout(1000);

        const actualStatusCode4 = await statusCode.getStatusCode500(page);
        await page.waitForTimeout(1000);

        expect(actualStatusCode1).toBe(200);
        expect(actualStatusCode2).toBe(301);
        expect(actualStatusCode3).toBe(404);
        expect(actualStatusCode4).toBe(500);
    }, 12000); 
});
