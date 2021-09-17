const locators = require('../Locators/AccountPage/locators');
const puppeteer = require('puppeteer');

class AccountPage {
    async getEmailOnMainInfoTab(page) {
        //get email on main info tab
        await page.waitForXPath(locators.accountPageInfoTabEmail);
        let [element] = await page.$x(locators.accountPageInfoTabEmail);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getSexOnMainInfoTab(page) {
        //get sex on main info tab
        await page.waitForXPath(locators.accountPageInfoTabSex);
        let [element] = await page.$x(locators.accountPageInfoTabSex);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getDateOfBirthOnMainInfoTab(page) {
        //get date of birth on main info tab
        await page.waitForXPath(locators.accountPageInfoTabDateOfBirth);
        let [element] = await page.$x(locators.accountPageInfoTabDateOfBirth);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getEmailOnPage(page) {
        //get email on main account page
        await page.waitForXPath(locators.accountPageEmail);
        let [element] = await page.$x(locators.accountPageEmail);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async clickMainIfoTab(page) {
        await page.waitForXPath(locators.accountPageMainInfoTab);
        let [element] = await page.$x(locators.accountPageMainInfoTab);
        await element.click();
    }
}

module.exports = AccountPage;