const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class AddRemove {
    async clickAddButton(page) {
        const elements = await page.$x(locators.addButton);
        await elements[0].click();
    }

    async clickDeleteButton(page) {
        await page.waitForXPath(locators.deleteButton);
        const elements = await page.$x(locators.deleteButton);
        await elements[0].click();
    }
       
    async navigate (page) {
      await page.goto(locators.addRemoveUrl);
    };

    async getDeleteButton(page) {
        await page.waitForXPath(locators.deleteButton);
        const elements = await page.$x(locators.deleteButton);
        return elements[0];
    }
}

module.exports = AddRemove;