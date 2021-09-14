const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class Checkboxes {
    async goto(page) {
        await page.goto(locators.checkboxesUrl);
    }

    async clickCheckbox1 (page) {
        await page.waitForXPath(locators.checkbox1);
        let [element] = await page.$x(locators.checkbox1);
        element.click();
        await page.waitForTimeout(1000);
        const type =  await page.$eval('#checkboxes > input:nth-child(1)', cb => cb.getAttribute('checked'));
        return type;
    }

    async clickCheckbox2 (page) {
        await page.waitForXPath(locators.checkbox2);
        let [element] = await page.$x(locators.checkbox2);
        element.click();
        await page.waitForTimeout(2000);
        const type =  await page.$eval('#checkboxes > input:nth-child(3)', element => element.getAttribute('checked'));
        return type;
    }
}

module.exports = Checkboxes;