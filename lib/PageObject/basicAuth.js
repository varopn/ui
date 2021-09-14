const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class BasicAuth {
    async authenticate(page) {
        await page.authenticate({'username': locators.basicUsername, 'password': locators.basicPassword});
        await page.goto(locators.basicAuthUrl);
    }

    async getTitle(page) {
        await page.waitForXPath(locators.basicAuthTitle);
        let [element] = await page.$x(locators.basicAuthTitle);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }
}

module.exports = BasicAuth;