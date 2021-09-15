const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class ExitIntent {
    async goto(page) {
        await page.goto(locators.exitAddUrl);
    }

    async waitForModalWindow(page) {
        await page.mouse.move(-100, -50);
        await page.waitForXPath(locators.exitAddModalWindow);
    }

    async getModalWindowTitle(page) {
        let [element] = await page.$x(locators.exitAddTitleP);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async mouseMove(page) {
        await page.mouse.move(0, 0);
    }

    async clickCloseButton(page) {
        await page.waitForXPath(locators.exitAddCloseButton);
        let [element] = await page.$x(locators.exitAddCloseButton);
        await element.click();
    }
}

module.exports = ExitIntent;