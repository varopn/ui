const puppeteer = require("puppeteer");
const { keyPressesDiv } = require("../lib/Locators/locators");
const locators = require("../lib/Locators/locators");
const KeyPresses = require("../lib/PageObject/keyPresses")

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
    it("key presses auth page", async () => {
        const keyPresses = new KeyPresses();
        const keyA = 'A';
        const keyComma = 'COMMA';
        const keyOne = '1';

        //actually i can use page.keyboard.press...

        await keyPresses.goto(page);
        await keyPresses.typeInDivKey(page,'A');
        const firstTitleOfDiv = await keyPresses.getTitleOfDiv(page);
        expect(firstTitleOfDiv).toContain(locators.keyPressesDivBasicTitle + keyA);

        await keyPresses.typeInDivKey(page,',');
        const secondTitleOfDiv = await keyPresses.getTitleOfDiv(page);
        expect(secondTitleOfDiv).toContain(locators.keyPressesDivBasicTitle + keyComma);

        await keyPresses.typeInDivKey(page,'1');
        const thirdTitleOfDiv = await keyPresses.getTitleOfDiv(page);
        expect(thirdTitleOfDiv).toContain(locators.keyPressesDivBasicTitle + keyOne);
    }, 20000);
});