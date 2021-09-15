const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class EntryAdd {
    async goto(page) {
        await page.goto(locators.entryAddUrl);
    }

    async waitForModalWindow(page) {
        await page.waitForXPath(locators.entryAddModalWindow);
    }

    async getModalWindowTitle(page) {
        let [element] = await page.$x(locators.entryAddTitleP);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async clickCloseButton(page) {
        await page.waitForXPath(locators.entryAddCloseButton);
        let [element] = await page.$x(locators.entryAddCloseButton);
        await element.click();
    }
}

module.exports = EntryAdd;