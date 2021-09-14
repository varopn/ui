const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');
const { alertMessage } = require('../Locators/locators');

class ContextMenu {
    async goto(page) {
        await page.goto(locators.contextMenuUrl);
    }

    async listeningAlert(page, alertMessage) {
        await page.on( 'dialog', async (dialog) => {
            alertMessage = await dialog.message();
            await dialog.accept();
        } );
    }

    async clickContexMenu (page) {
        await page.waitForXPath(locators.contextMenu);
        let [element] = await page.$x(locators.contextMenu);
        await element.click({
            button: 'right',
        });
        await page.waitForTimeout(2000);
    }

    async getAlertMessage (page) {
        await page.waitForXPath(locators.checkbox2);
        let [element] = await page.$x(locators.checkbox2);
        element.click();
        await page.waitForTimeout(2000);
        await page.screenshot({path: 'buddy-screenshot.png'});
        const type =  await page.$eval('#checkboxes > input:nth-child(3)', element => element.getAttribute('checked'));
        return type;
    }
}

module.exports = ContextMenu;