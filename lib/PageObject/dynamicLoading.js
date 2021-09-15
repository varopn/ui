const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class DynamicLoading {
    async gotoFirstLink(page) {
        await page.goto(locators.dynamicLoadingFirstLink);
    }

    async gotoSecondLink(page) {
        await page.goto(locators.dynamicLoadingSecondLink);
    }

    async clickStartButton(page) {
        await page.waitForXPath(locators.dynamicLoadingStartButton);
        let [element] = await page.$x(locators.dynamicLoadingStartButton);
        await element.click();
    }

    async getTitleAfterClicking(page) {
        await page.waitForXPath(locators.dynamicLoadingDiv);
        let [element] = await page.$x(locators.dynamicLoadingDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }
}

module.exports = DynamicLoading;