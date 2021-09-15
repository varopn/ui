const puppeteer = require("puppeteer");
const AddRemove = require("../lib/PageObject/addRemove");


let page;
let browser;
const width = 1920;
const height = 1080;
jest.setTimeout(10000);

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
    it("AddRemove buttons page", async () => {
        const addRemove = new AddRemove();
        await addRemove.navigate(page);
        await addRemove.clickAddButton(page);

        let addedButton = await addRemove.getDeleteButton(page);
        expect(addedButton).toBeTruthy();

        await addRemove.clickDeleteButton(page);
    }, 9000);
});