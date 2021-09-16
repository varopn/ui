const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class KeyPresses {
    async goto(page) {
        await page.goto(locators.keyPressesUrl);
    }

    async typeInDivKey(page, key) {
        await page.waitForXPath(locators.keyPressesInput);
        let [element] = await page.$x(locators.keyPressesInput);
        await element.click();
        await element.type(key);
    }

    async getTitleOfDiv(page) {
        await page.waitForXPath(locators.keyPressesDiv);
        let [element] = await page.$x(locators.keyPressesDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }
}

module.exports = KeyPresses;