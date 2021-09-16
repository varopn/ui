const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const Hovers = require("../lib/PageObject/hovers")

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
    it("hovers page", async () => {
        const hovers = new Hovers();

        await hovers.goto(page);
        let IsHiddenFirst = await hovers.isHiddenInfoFirstUser(page);
        let IsHiddenSecond = await hovers.isHiddenInfoSecondUser(page);
        let IsHiddenThird = await hovers.isHiddenInfoThirdUser(page);

        expect(IsHiddenFirst).toBeTruthy();
        expect(IsHiddenSecond).toBeTruthy();
        expect(IsHiddenThird).toBeTruthy();

        await hovers.clickFirstUser(page);
        let name = await hovers.getNameOfFirstUser(page);
        IsHiddenFirst = await hovers.isHiddenInfoFirstUser(page);
        IsHiddenSecond = await hovers.isHiddenInfoSecondUser(page);
        IsHiddenThird = await hovers.isHiddenInfoThirdUser(page);

        expect(name).toContain(locators.hoverFirstUserName);
        expect(IsHiddenFirst).toBeFalsy();
        expect(IsHiddenSecond).toBeTruthy();
        expect(IsHiddenThird).toBeTruthy();

        await hovers.clickSecondUser(page);
        name = await hovers.getNameOfSecondUser(page);
        IsHiddenFirst = await hovers.isHiddenInfoFirstUser(page);
        IsHiddenSecond = await hovers.isHiddenInfoSecondUser(page);
        IsHiddenThird = await hovers.isHiddenInfoThirdUser(page);
        
        expect(name).toContain(locators.hoverSecondUserName);
        expect(IsHiddenFirst).toBeTruthy();
        expect(IsHiddenSecond).toBeFalsy();
        expect(IsHiddenThird).toBeTruthy();

        await hovers.clickThirdUser(page);
        name = await hovers.getNameOfThirdUser(page);
        IsHiddenFirst = await hovers.isHiddenInfoFirstUser(page);
        IsHiddenSecond = await hovers.isHiddenInfoSecondUser(page);
        IsHiddenThird = await hovers.isHiddenInfoThirdUser(page);
        
        expect(name).toContain(locators.hoverThirdUserName);
        expect(IsHiddenFirst).toBeTruthy();
        expect(IsHiddenSecond).toBeTruthy();
        expect(IsHiddenThird).toBeFalsy();
    }, 20000);
});