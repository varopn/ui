const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class Typos {
    async goto(page) {
        await page.goto(locators.typosUrl);
    }

    async getTitleOfDiv(page) {
        await page.waitForXPath(locators.typosDiv);
        let [element] = await page.$x(locators.typosDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }
}

module.exports = Typos;