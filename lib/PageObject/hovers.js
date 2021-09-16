const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class Hovers {
    async goto(page) {
        await page.goto(locators.hoversUrl);
    }

    async clickFirstUser(page) {
        await page.waitForXPath(locators.hoversFirstFigure);
        let [element] = await page.$x(locators.hoversFirstFigure);
        await element.click();
    }

    async clickSecondUser(page) {
        await page.waitForXPath(locators.hoversSecondFigure);
        let [element] = await page.$x(locators.hoversSecondFigure);
        await element.click();
    }

    async clickThirdUser(page) {
        await page.waitForXPath(locators.hoversThirdFigure);
        let [element] = await page.$x(locators.hoversThirdFigure);
        await element.click();
    }

    async getNameOfFirstUser(page) {
        await page.waitForXPath(locators.hoverFirstUserNameDiv);
        let [element] = await page.$x(locators.hoverFirstUserNameDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getNameOfSecondUser(page) {
        await page.waitForXPath(locators.hoverSecondUserNameDiv);
        let [element] = await page.$x(locators.hoverSecondUserNameDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async getNameOfThirdUser(page) {
        await page.waitForXPath(locators.hoverThirdUserNameDiv);
        let [element] = await page.$x(locators.hoverThirdUserNameDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async isHiddenInfoFirstUser(page) {
        return await page.$eval('#content > div > div:nth-child(3) > div', (elem) => {
            return window.getComputedStyle(elem).getPropertyValue('display') === 'none'
        });
    }

    async isHiddenInfoSecondUser(page) {
        return await page.$eval('#content > div > div:nth-child(4) > div', (elem) => {
            return window.getComputedStyle(elem).getPropertyValue('display') === 'none'
        });
    }

    async isHiddenInfoThirdUser(page) {
        return await page.$eval('#content > div > div:nth-child(5) > div', (elem) => {
            return window.getComputedStyle(elem).getPropertyValue('display') === 'none'
        });
    }
}

module.exports = Hovers;