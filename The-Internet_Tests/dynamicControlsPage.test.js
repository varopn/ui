const puppeteer = require("puppeteer");
const locators = require("../lib/Locators/locators");
const DynamicControls = require("../lib/PageObject/dynamicControls");


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
    it("dynamic controls page", async () => {
        const dynamicControls = new DynamicControls();

        await dynamicControls.goto(page);
        await dynamicControls.clickRemoveWithCheckedCheckbox(page);
        await page.waitForTimeout(3000);
        const titleWithCheckedAndRemove = await dynamicControls.getTitleAfterClicking(page);
        expect(titleWithCheckedAndRemove).toContain(locators.dynamicControlsTitleAfterRemove);

        await dynamicControls.clickAddRemoveButton(page);
        await page.waitForTimeout(3000);
        const titleAfterClickingAdd = await dynamicControls.getTitleAfterClicking(page);
        expect(titleAfterClickingAdd).toContain(locators.dynamicControlsTitleAfterAdd);

        await dynamicControls.checkAfterAddClicking(page);
        await dynamicControls.clickAddRemoveButton(page);
        await page.waitForTimeout(3000);
        const titleAfterClickingAddAndCheck = await dynamicControls.getTitleAfterClickingAddAndCheck(page);
        expect(titleAfterClickingAddAndCheck).toContain(locators.dynamicControlsTitleAfterAddAndCheck);

        const isDisabled = await dynamicControls.verifyIsEnabledInput(page);
        expect(isDisabled).toBeTruthy();
        await dynamicControls.clickEnableDisableButton(page);
        await page.waitForTimeout(4000);
        const isDisabledAfter = await dynamicControls.verifyIsEnabledInput(page);
        expect(isDisabledAfter).toBeFalsy();
        await dynamicControls.typeSomeText(page);
    }, 50000);
});
