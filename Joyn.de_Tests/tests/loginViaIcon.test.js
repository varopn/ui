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

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: true,
        args: [`--window-size=${width},${height}`,
               '--disable-infobars',
               '--no-sandbox',
               '--disable-setuid-sandbox']   
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
    const cookies = await page.cookies();
}); 

afterEach(() => {
    browser.close();
}); 

describe("E2E Tests", () => {
    it("Login via PLUS Content Button on main page", async () => {
        //go to start link
        await preProdPage.goto(page);
        //clicking to accout image to login
        await page.waitForTimeout(3000);
        await mainPage.clickPlusContentButton(page);
        await mainPage.clickPlusContentLoginButton(page);
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
        await page.waitForTimeout(3000);
        await mainPage.clickAccountIconButtonAfter(page);
        //get email from account page
        const email = await accountPage.getEmailOnPage(page);
        expect(email).toContain('varopn@gmail.com')
    }, 90000);

    it("Login via account icon on main page", async () => {
        //go to start link
        await preProdPage.goto(page);
        //clicking to accout image to login
        await mainPage.clickAccountIconButton(page);
        //typing email to login form 
        await loginPage.typeEmailInInput(page);
        //clicking on login button
        await loginPage.clickFirstSubmitButton(page);
        //typing password to login form 
        await loginPage.typePasswordInInput(page);
        //clicking on login button
        await loginPage.clickFormSubmitButton(page);
        //clicking on confirm button
        await loginPage.clickConfirmButton(page);
        //clicking to accout image to login
        await page.waitForTimeout(3000);
        await mainPage.clickAccountIconButtonAfter(page);
        //get email from account page
        const email = await accountPage.getEmailOnPage(page);

        expect(email).toContain('varopn@gmail.com')
    }, 90000);

    it("Login via account icon on main page with invalid password", async () => {
        //go to start link
        await preProdPage.goto(page);
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

    it("Observe account main info after login", async () => {
        //go to start link
        await preProdPage.goto(page);
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
        await page.waitForTimeout(3000);
        await mainPage.clickAccountIconButtonAfter(page);
        await accountPage.clickMainIfoTab(page);
        const email = await accountPage.getEmailOnPage(page);
        const emailOnTab = await accountPage.getEmailOnMainInfoTab(page);
        const sexOnTab = await accountPage.getSexOnMainInfoTab(page);
        const dateOnTab = await accountPage.getDateOfBirthOnMainInfoTab(page);
        expect(email).toContain('varopn@gmail.com');
        expect(emailOnTab).toContain('varopn@gmail.com');
        expect(sexOnTab).toContain('männlich');
        expect(dateOnTab).toContain('06.03.1999');
    }, 90000);
});
