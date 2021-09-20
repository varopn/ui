const locators = require('../Locators/PreProdPage/locators');
const puppeteer = require('puppeteer');

class PreProdPage {
    async goto(page) {
        //go to start link
        //await page.goto(locators.preProdUrl);
        await page.goto('https://www.joyn.de/ueber-joyn');
    };

    async typePasswordInInput(page) {
        //typing password for pre production env
        //await page.waitForXPath(locators.preProdPasswordInput);
        //let [element] = await page.$x(locators.preProdPasswordInput);
        //await element.click();
        //await element.type(locators.preProdPaswordData);
    }

    async clickConfirmButton(page) {
        //clicking confirm for pre production env
        //await page.waitForXPath(locators.preProdConfirmButton);
        //let [element] = await page.$x(locators.preProdConfirmButton);
        //await element.click();
    }
}

module.exports = PreProdPage;