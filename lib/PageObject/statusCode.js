const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class StatusCode {
    async goto(page) {
        await page.goto(locators.statusCodeUrl);
    }

    async getStatusCode200(page) {
        let item = locators.statusCode200;
        let [element] = await page.$x(item);
        let href = await page.evaluate(link => link.href, element);

        let newPage = await page.goto(href);
        let statusCode = await newPage.status();

        return statusCode;
    }

    async getStatusCode301(page) {
        let item = locators.statusCode301;
        let [element] = await page.$x(item);
        let href = await page.evaluate(link => link.href, element);

        let newPage = await page.goto(href);
        let statusCode = await newPage.status();

        return statusCode;
    }

    async getStatusCode404(page) {
        let item = locators.statusCode404;
        let [element] = await page.$x(item);
        let href = await page.evaluate(link => link.href, element);

        let newPage = await page.goto(href);
        let statusCode = await newPage.status();

        return statusCode;
    }

    async getStatusCode500(page) {
        let item = locators.statusCode500;
        let [element] = await page.$x(item);
        let href = await page.evaluate(link => link.href, element);

        let newPage = await page.goto(href);
        let statusCode = await newPage.status();

        return statusCode;
    }

    async clickBackLink(page) {
        await page.waitForXPath(locators.statusCodeBackLink);
        let [element] = await page.$x(locators.statusCodeBackLink);
        await element.click();
    }
}

module.exports = StatusCode;