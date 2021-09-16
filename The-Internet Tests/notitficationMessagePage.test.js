const puppeteer = require("puppeteer");
const jestOr = require("../expecrOr");
const locators = require("../lib/Locators/locators");
const NotitficationMessage = require("../lib/PageObject/notificationMessage");

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
}); 

afterAll(() => {
    browser.close();
}); 


describe("UI Tests", () => {
    it("notification page", async () => {
        const notitficationMessage = new NotitficationMessage();

        await notitficationMessage.goto(page);
        await notitficationMessage.clickRefreshLink(page);
        const titleOfDiv = await notitficationMessage.getTitleOfNotification(page);
        await notitficationMessage.clickCloseNotificationButton(page);

        await notitficationMessage.clickRefreshLink(page);
        const titleOfDivAfterRefresh = await notitficationMessage.getTitleOfNotification(page);
        await notitficationMessage.clickCloseNotificationButton(page);

        jestOr.expect_or(
            () => expect(titleOfDiv).toContain(locators.notificationActionSuccess),
            () => expect(titleOfDiv).toContain(locators.notificationActionUnsuccess),
            () => expect(titleOfDivAfterRefresh).toContain(locators.notificationActionSuccess),
            () => expect(titleOfDivAfterRefresh).toContain(locators.notificationActionUnsuccess),
        );
    }, 15000);
});
