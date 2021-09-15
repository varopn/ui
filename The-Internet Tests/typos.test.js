const puppeteer = require("puppeteer");
const jestOr = require("../expecrOr");
const locators = require("../lib/Locators/locators");
const AddRemove = require("../lib/PageObject/addRemove");
const BasicAuth = require("../lib/PageObject/basicAuth");
const BrokenImage = require('../lib/PageObject/brokenImage');
const ChallengingDom = require("../lib/PageObject/challengingDom");
const Checkboxes = require("../lib/PageObject/checkboxes");
const ContextMenu = require("../lib/PageObject/contextMenu");
const DigestAuth = require("../lib/PageObject/digestAuth");
const Dropdown = require("../lib/PageObject/dropdown");
const DynamicContent = require("../lib/PageObject/dynamicContent");
const Typos = require("../lib/PageObject/typos");
const StatusCode = require("../lib/PageObject/statusCode");
const DynamicControls = require("../lib/PageObject/dynamicControls");
const DynamicLoading = require("../lib/PageObject/dynamicLoading");
const EntryAdd = require("../lib/PageObject/entryAdd")


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
    it("typos page", async () => {
        const typos = new Typos();

        await typos.goto(page);
        const titleOfDiv = await typos.getTitleOfDiv(page);

        jestOr.expect_or(
            () => expect(titleOfDiv).toContain(locators.typosDivTitleRandom),
            () => expect(titleOfDiv).toContain(locators.typosDivTitle),
        );
    }, 9000);
});
