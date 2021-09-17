const locators = require('../Locators/MainPage/locators');
const puppeteer = require('puppeteer');

class MainPage {
    async clickConfirmCountryButton(page) {
        //clicking confirm on banner about specific country
        await page.waitForXPath(locators.mainPageCountryBannerConfirmButton);
        let [element] = await page.$x(locators.mainPageCountryBannerConfirmButton);
        await element.click();
    }

    async clickAccountIconButton(page) {
        //clicking to accout image to login
        await page.waitForXPath(locators.mainPageAccountIcon);
        let [element] = await page.$x(locators.mainPageAccountIcon);
        await element.click();
    }

    async clickAccountIconButtonAfter(page) {
        //clicking to accout image to login
        await page.waitForXPath(locators.mainPageAccountIconAfter);
        let [element] = await page.$x(locators.mainPageAccountIconAfter);
        await element.click();
    }

    async clickPlusContentButton(page) {
        //clicking to plus content button
        await page.waitForXPath(locators.mainPagePlusContentButton);
        let [element] = await page.$x(locators.mainPagePlusContentButton);
        await element.click();
    }

    async clickPlusContentLoginButton(page) {
        //clicking to plus content button
        await page.waitForXPath(locators.mainPagePlusContentLoginButton);
        let [element] = await page.$x(locators.mainPagePlusContentLoginButton);
        await element.click();
    }
}

module.exports = MainPage;