const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class NotitficationMessage {
    async goto(page) {
        await page.goto(locators.notitficationMessagesUrl);
    }

    async clickRefreshLink(page) {
        await page.waitForXPath(locators.notitficationMessagesRefreshLink);
        let [element] = await page.$x(locators.notitficationMessagesRefreshLink);
        await element.click();
    }

    async getTitleOfNotification(page) {
        await page.waitForXPath(locators.notitficationMessagesDiv);
        let [element] = await page.$x(locators.notitficationMessagesDiv);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }

    async clickCloseNotificationButton(page) {
        await page.waitForXPath(locators.notitficationMessagesCloseButton);
        let [element] = await page.$x(locators.notitficationMessagesCloseButton);
        await element.click();
    }
}

module.exports = NotitficationMessage;