const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class Dropdown {
    async goto(page) {
        await page.goto(locators.dropdownUrl);
    }

    async getTitleOfDisabledOption(page) {
        await page.waitForXPath(locators.dropdownDisabled);
        let [element] = await page.$x(locators.dropdownDisabled);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getTitleOfFirstOption(page) {
        await page.waitForXPath(locators.dropdownFirstOption);
        let [element] = await page.$x(locators.dropdownFirstOption);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getTitleOfSecondOption(page) {
        await page.waitForXPath(locators.dropdownSecondOption);
        let [element] = await page.$x(locators.dropdownSecondOption);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async clickFirstOption(page) {
        let [element] = await page.$x(locators.dropdown);
        await element.select(locators.dropdownFirstOptionValue);
    }

    async clickSecondOption(page) {
        let [element] = await page.$x(locators.dropdown);
        await element.select(locators.dropdownSecondOptionValue);
    }
}

module.exports = Dropdown;