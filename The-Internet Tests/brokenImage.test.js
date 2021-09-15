const puppeteer = require("puppeteer");
const BrokenImage = require('../lib/PageObject/brokenImage');

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
    it("broken image page", async () => {
        const brokenImage = new BrokenImage();

        await brokenImage.goto(page);
        let brokenImage1 = await brokenImage.getImage1(page);
        expect(brokenImage1).toBe('Not Found');

        let brokenImage2 = await brokenImage.getImage2(page);
        expect(brokenImage2).toBe('Not Found');

        let brokenImage3 = await brokenImage.getImage3(page);
        expect(brokenImage3).toBe('img');

    }, 9000);
});
