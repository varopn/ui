const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const DigestAuth = require("../lib/PageObject/digestAuth");

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
    it("digest auth page", async () => {
        const digestAuth = new DigestAuth();

        await digestAuth.authenticate(page);
        const title = await digestAuth.getTitle(page);
        expect(title).toContain(locators.digestAuthTitleData);
        await page.mouse.move(100, 100);
    }, 20000);
});
