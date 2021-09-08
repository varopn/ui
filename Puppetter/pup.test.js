const puppeteer = require ("puppeteer");

const APP = "https://the-internet.herokuapp.com/add_remove_elements/";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });
  afterAll(() => {
    browser.close();
});

describe("Contact form", () => {
    it("lead can submit a contact request", async () => {
      await page.goto(`${APP}`);
      await page.waitForSelector("#content > div > button");
      await page.click("#content > div > button");
      await page.waitForSelector("#elements > button");
      await page.click("#elements > button");
    }, 9000);
  });