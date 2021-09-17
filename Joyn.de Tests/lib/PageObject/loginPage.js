const locators = require('../Locators/LoginPage/locators');
const puppeteer = require('puppeteer');

class LoginPage {
    async typeEmailInInput(page) {
        //typing email to login form 
        await page.waitForXPath(locators.loginPageEmailInput);
        let [element] = await page.$x(locators.loginPageEmailInput);
        await element.click();
        await element.type(locators.loginPageEmailInputData);
    }

    async clickFirstSubmitButton(page) {
        //clicking on login button
        await page.waitForXPath(locators.loginPageFirstSubmitButton);
        let [element] = await page.$x(locators.loginPageFirstSubmitButton);
        await element.click();
    }

    async clickPasswordShowButton(page) {
        //clicking on login button
        await page.waitForXPath(locators.loginPagePasswordShowIcon);
        let [element] = await page.$x(locators.loginPagePasswordShowIcon);
        await element.click();
    }

    async typePasswordInInput(page) {
        //typing password to login form 
        await page.waitForXPath(locators.loginPagePasswordInput);
        let [element] = await page.$x(locators.loginPagePasswordInput);
        await element.click();
        await element.type(locators.loginPagePasswordInputData);
    }

    async typeInvalidPasswordInInput(page) {
        //typing password to login form 
        await page.waitForXPath(locators.loginPagePasswordInput);
        let [element] = await page.$x(locators.loginPagePasswordInput);
        await element.click();
        await element.type(locators.loginPageInavalidPasswordInputData);
    }

    async clickFormSubmitButton(page) {
        //clicking on login button
        await page.waitForXPath(locators.loginPageFormSubmitButton);
        let [element] = await page.$x(locators.loginPageFormSubmitButton);
        await element.click();
    }

    async clickConfirmButton(page) {
        //clicking on confirm button
        await page.waitForXPath(locators.loginPageConfirmButton);
        let [element] = await page.$x(locators.loginPageConfirmButton);
        await element.click();
    }

    async getMessageOnPage(page) {
        //get Alert Message when ckick on log in with invalid Password
        await page.waitForXPath(locators.loginPageMessageDivWrongPassword);
        let [element] = await page.$x(locators.loginPageMessageDivWrongPassword);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }
}

module.exports = LoginPage;