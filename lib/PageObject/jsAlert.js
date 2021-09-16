const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class JSAlert {
    async goto(page) {
        await page.goto(locators.jsAlertUrl);
    }

    async clickJSAlert (page) {
        await page.waitForXPath(locators.jsAlertButton);
        let [element] = await page.$x(locators.jsAlertButton);
        await element.click();
        await page.waitForTimeout(1000);
    }

    async clickJSConfim (page) {
        await page.waitForXPath(locators.jsAlertConfirmButton);
        let [element] = await page.$x(locators.jsAlertConfirmButton);
        await element.click();
        await page.waitForTimeout(1000);
    }

    async clickjsPrompt (page) {
        await page.waitForXPath(locators.jsAlertPromptButton);
        let [element] = await page.$x(locators.jsAlertPromptButton);
        await element.click();
        await page.waitForTimeout(1000);
    }

    async getTitleOfDiv (page) {
        await page.waitForXPath(locators.jsAlertDiv);
        let [element] = await page.$x(locators.jsAlertDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }
}

module.exports = JSAlert;