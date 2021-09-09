const puppeteer = require ("puppeteer");

const APP = "https://the-internet.herokuapp.com/add_remove_elements/";
const APP2 = "https://www.youtube.com/";

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

describe("Youtube form", () => {
  it("Search", async () => {
    await page.goto(`${APP2}`);
    await page.click("input#search");
    await page.type("input#search", "JavaScr");
    await page.click("button#search-icon-legacy");
    await page.waitForSelector("#contents > ytd-video-renderer:nth-child(1)");
    await page.click("#contents > ytd-video-renderer:nth-child(1)");
    await page.waitForSelector("#movie_player > div.html5-video-container > video");
    await page.click("#movie_player > div.html5-video-container > video");
  }, 90000);
});