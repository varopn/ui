const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class Form {
    async goto(page) {
        await page.goto(locators.formUrl);
    }

    async typeLogin(page) {
        await page.waitForXPath(locators.formLogin);
        let [element] = await page.$x(locators.formLogin);
        await element.click();
        await element.type(locators.formLoginData);
    }

    async typePassword(page) {
        await page.waitForXPath(locators.formPassword);
        let [element] = await page.$x(locators.formPassword);
        await element.click();
        await element.type(locators.formPasswordData);
    }

    async clickLogin(page) {
        await page.waitForXPath(locators.formLoginButton);
        let [element] = await page.$x(locators.formLoginButton);
        await element.click();
    }

    async getTitle(page) {
        await page.waitForXPath(locators.formDiv);
        let [element] = await page.$x(locators.formDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async clickLogout(page) {
        await page.waitForXPath(locators.formLogoutButton);
        let [element] = await page.$x(locators.formLogoutButton);
        await element.click();
    }
}

module.exports = Form;