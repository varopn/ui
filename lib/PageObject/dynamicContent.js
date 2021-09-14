const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class DynamicContent {
    async goto(page) {
        await page.goto(locators.dynamicContentUrl);
    }

    async getTitleOfFirstDiv(page) {
        await page.waitForXPath(locators.dynamicContentFirstDiv);
        let [element] = await page.$x(locators.dynamicContentFirstDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getTitleOfSecondDiv(page) {
        await page.waitForXPath(locators.dynamicContentSecondDiv);
        let [element] = await page.$x(locators.dynamicContentSecondDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getTitleOfThirdDiv(page) {
        await page.waitForXPath(locators.dynamicContentThirdDiv);
        let [element] = await page.$x(locators.dynamicContentThirdDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async refresh(page) {
        let [element] = await page.$x(locators.dynamicContentRefreshLink);
        await element.click();
    }
}

module.exports = DynamicContent;