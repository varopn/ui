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
    it("Observe account main info after login", async () => {
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
        await loginPage.typePasswordInInput(page);
        //clicking on login button
        await loginPage.clickFormSubmitButton(page);
        //clicking on confirm button
        await loginPage.clickConfirmButton(page);
        //clicking to accout image to login
        await mainPage.clickAccountIconButtonAfter(page);
        await page.waitForTimeout(3000);
        await accountPage.clickMainIfoTab(page);
        const email = await accountPage.getEmailOnPage(page);
        const emailOnTab = await accountPage.getEmailOnMainInfoTab(page);
        const sexOnTab = await accountPage.getSexOnMainInfoTab(page);
        const dateOnTab = await accountPage.getDateOfBirthOnMainInfoTab(page);
        expect(email).toContain('varopn@gmail.com');
        expect(emailOnTab).toContain('varopn@gmail.com')
        expect(sexOnTab).toContain('männlich')
        expect(dateOnTab).toContain('06.03.1999')
    }, 90000);
});
