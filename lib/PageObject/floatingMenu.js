const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class FloatingMenu {
    async goto(page) {
        await page.goto(locators.floatingMenuUrl);
    }

    async clickHome(page) {
        await page.waitForXPath(locators.floatingMenuHome);
        const elements = await page.$x(locators.floatingMenuHome);
        await elements[0].click();
    }

    async clickContact(page) {
        await page.waitForXPath(locators.floatingMenuContact);
        const elements = await page.$x(locators.floatingMenuContact);
        await elements[0].click();
    }

    async clickAbout(page) {
        await page.waitForXPath(locators.floatingMenuAbout);
        const elements = await page.$x(locators.floatingMenuAbout);
        await elements[0].click();
    }

    async clickNews(page) {
        await page.waitForXPath(locators.floatingMenuNews);
        const elements = await page.$x(locators.floatingMenuNews);
        await elements[0].click();
    }

    async scroll(page) {
        await page.evaluate(_ => {
            window.scrollBy(0, window.innerHeight);
          });
    }

    async getDeleteButton(page) {
        await page.waitForXPath(locators.deleteButton);
        const elements = await page.$x(locators.deleteButton);
        return elements[0];
    }
}

module.exports = FloatingMenu;