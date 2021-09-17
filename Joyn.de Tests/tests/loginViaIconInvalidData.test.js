const puppeteer = require("puppeteer");
const MainPage = require("../lib/PageObject/mainPage");
const AccountPage = require("../lib/PageObject/accountPage");
const LoginPage = require("../lib/PageObject/loginPage");
const PreProdPage = require("../lib/PageObject/preProdPage");
const mainPage = new MainPage();
const accountPage = new AccountPage();
const loginPage = new LoginPage();
const preProdPage = new PreProdPage();

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        args: [`--window-size=${width},${height}`]   
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
}); 

afterAll(() => {
    browser.close();
}); 

describe("E2E Tests", () => {
    it("Login via account icon on main page with invalid password", async () => {
        //go to start link
        await preProdPage.goto(page);
        //typing password for pre production env
        await preProdPage.typePasswordInInput(page);
        //clicking confirm for pre production env
        await preProdPage.clickConfirmButton(page);
        //clicking confirm on banner about specific country
        await mainPage.clickConfirmCountryButton(page);
        await page.waitForTimeout(3000);
        //clicking to accout image to login
        await mainPage.clickAccountIconButton(page);
        //typing email to login form 
        await loginPage.typeEmailInInput(page);
        //clicking on login button
        await loginPage.clickFirstSubmitButton(page);
        //clicking to password show button
        await loginPage.clickPasswordShowButton(page);
        //typing password to login form 
        await loginPage.typeInvalidPasswordInInput(page);
        //clicking on login button
        await loginPage.clickFormSubmitButton(page);
        //clicking on confirm button
        const message = await loginPage.getMessageOnPage(page);
        expect(message).toContain('Bitte gib ein gültiges Passwort ein.');
    }, 90000);
});
