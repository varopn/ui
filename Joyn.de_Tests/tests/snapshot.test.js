const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

jest.setTimeout(10000);

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

describe('snapshot tests', () => {
    test('Contact page snapshot test', async () => {
        await page.goto('https://www.joyn.de/impressum',{
            waitUntil: 'networkidle2',
          });

        let mainPageImage = await page.screenshot();
        expect(mainPageImage).toMatchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent'
          });
    });

    test('About snapshot test', async () => {
        await page.goto('https://www.joyn.de/ueber-joyn', {
            waitUntil: 'networkidle2',
          });

        let mainPageImage = await page.screenshot();
        expect(mainPageImage).toMatchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent'
          });
    });
});