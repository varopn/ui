const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class ChallengingDom {
    async goto(page) {
        await page.goto(locators.challengingDomUrl);
    }

    async getButton1 (page) {
        await page.waitForXPath(locators.challengingDomButton1);
        await page.$x(locators.challengingDomButton1);
    }

    async getButton2 (page) {
        await page.waitForXPath(locators.challengingDomButton2);
        await page.$x(locators.challengingDomButton2);
    }

    async getButton3 (page) {
        await page.waitForXPath(locators.challengingDomButton3);
        let [element] = await page.$x(locators.challengingDomButton3);
        await element.click();
        let type = element._remoteObject.description;
        return type;
    }
}

module.exports = ChallengingDom;