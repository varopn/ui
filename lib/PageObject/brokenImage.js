const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class BrokenIOmage {
    async goto(page) {
        await page.goto(locators.brokenImageUrl);
    }

    async getImage1 (page) {
        await page.goto(locators.brokenImage1Url);
        await page.waitForXPath(locators.brokenImage1);
        let [element] = await page.$x(locators.brokenImage1);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getImage2 (page) {
        await page.goto(locators.brokenImage2Url);
        await page.waitForXPath(locators.brokenImage2);
        let [element] = await page.$x(locators.brokenImage2);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getImage3 (page) {
        await page.goto(locators.brokenImage3Url);
        await page.waitForXPath(locators.brokenImage3);
        let [element] = await page.$x(locators.brokenImage3);
        let type = element._remoteObject.description;
        return type;
    }
  }
module.exports = BrokenIOmage;