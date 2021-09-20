const puppeteer = require("puppeteer");
const ChallengingDom = require("../lib/PageObject/challengingDom");

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
    it("challenging DOM page", async () => {
        const challengingDom = new ChallengingDom();

        await challengingDom.goto(page);
        await challengingDom.getButton1(page);
        await challengingDom.getButton2(page);

        let button3 = await challengingDom.getButton3(page);
        expect(button3).toContain('button');

    }, 9000);
});
