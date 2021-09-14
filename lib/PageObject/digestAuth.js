const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class DigestAuth {
    async authenticate(page) {
        await page.authenticate({'username': locators.digestUsername, 'password': locators.digestPassword});
        await page.goto(locators.digestAuthUrl);
    }

    async getTitle(page) {
        await page.waitForXPath(locators.digestAuthTitle);
        let [element] = await page.$x(locators.digestAuthTitle);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }
}

module.exports = DigestAuth;