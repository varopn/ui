const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class DynamicControls {
    async goto(page) {
        await page.goto(locators.dynamicControlsUrl);
    }

    async clickRemoveWithCheckedCheckbox(page) {
        await page.waitForXPath(locators.dynamicControlsCheckBox);
        let [element] = await page.$x(locators.dynamicControlsCheckBox);
        await element.click();
        await page.waitForXPath(locators.dynamicControlsRemoveAddButton);
        let [element1] = await page.$x(locators.dynamicControlsRemoveAddButton);
        await element1.click();
    }

    async getTitleAfterClicking(page) {
        await page.waitForXPath(locators.dynamicControlsDiv);
        let [element] = await page.$x(locators.dynamicControlsDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async clickAddRemoveButton(page) {
        await page.waitForXPath(locators.dynamicControlsRemoveAddButton);
        let [element] = await page.$x(locators.dynamicControlsRemoveAddButton);
        await element.click();
    }

    async checkAfterAddClicking(page) {
        await page.waitForXPath(locators.dynamicControlsCheckBoxAfterAdd);
        let [element] = await page.$x(locators.dynamicControlsCheckBoxAfterAdd);
        await element.click();
    }

    async getTitleAfterClickingAddAndCheck(page) {
        await page.waitForXPath(locators.dynamicControlsCheckBoxDivAfterCheck);
        let [element] = await page.$x(locators.dynamicControlsCheckBoxDivAfterCheck);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async verifyIsEnabledInput(page) {
        await page.waitForXPath(locators.dynamicControlInput);
        let [element] = await page.$x(locators.dynamicControlInput);
        let isDisabled = await page.evaluate(element => element.disabled, element);
        return isDisabled;
    }

    async clickEnableDisableButton(page) {
        await page.waitForXPath(locators.dynamicControlsEnableButton);
        let [element] = await page.$x(locators.dynamicControlsEnableButton);
        await element.click();
    }

    async typeSomeText(page) {
        await page.waitForXPath(locators.dynamicControlInput);
        let [element] = await page.$x(locators.dynamicControlInput);
        await element.click();
        await element.type('Hello');
    }
}

module.exports = DynamicControls;