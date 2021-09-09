const puppeteer = require ("puppeteer");

const APP = "https://the-internet.herokuapp.com/add_remove_elements/";
const APP2 = "https://www.youtube.com/";

let page;
let browser;
const width = 1920;
const height = 1080;
jest.setTimeout(10000);

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
/*
describe('"The Internet" black-box tests', () => {

  describe('add/delete elements page', () => {
      test('add element test', async () => {
          let url = 'https://the-internet.herokuapp.com/add_remove_elements/';
          await page.goto(url);

          await page.click('#content > .example > button');
          
          let addedButton = await page.$('.added-manually');
          expect(addedButton).toBeTruthy();
      });
  });

  describe('dropdown list page', () => {
      test('select 1st option test', async () => {
          let url = 'https://the-internet.herokuapp.com/dropdown';
          await page.goto(url);

          await page.click('#dropdown');
          await page.select('#dropdown', '1');

          let option1 = await page.$eval('#dropdown > option[value="1"]', op => op.getAttribute('selected'));
          expect(option1).toBe('selected');
      });
  });

  describe('checkboxes page', () => {
      test('ticking checkboxes test', async () => {
          let url = 'https://the-internet.herokuapp.com/checkboxes';
          await page.goto(url);

          await page.click('#checkboxes > input:nth-child(1)');
          let checkbox1tick = await page.$eval('#checkboxes > input:nth-child(1)', cb => cb.getAttribute('checked'));
          
          await page.click('#checkboxes > input:nth-child(3)');
          let checkbox2tick = await page.$eval('#checkboxes > input:nth-child(3)', cb => cb.getAttribute('checked'));

          expect(checkbox1tick).toBeDefined();
          expect(checkbox2tick).toBeNull();
      });
  });

  describe('login page', () => {
      test('succesful login test', async () => {
          let url = 'https://the-internet.herokuapp.com/login';
          await page.goto(url);

          await page.click('#username');
          await page.type('#username', 'tomsmith')

          await page.click('#password');
          await page.type('#password', 'SuperSecretPassword!');

          await page.click('.radius');

          await page.waitForSelector('#flash');
          let loginConfirm = await page.$eval('#flash', alert => alert.innerText);
          expect(loginConfirm).toContain('You logged into a secure area!');
      });
  });

  describe('input page', () => {
      test('input number test', async () => {
          let url = 'https://the-internet.herokuapp.com/inputs';
          await page.goto(url);

          await page.click('input');
          await page.type('input', '123');
          await page.keyboard.press('ArrowDown', {delay: 100});
          await page.keyboard.press('ArrowUp', {delay: 100});
          await page.keyboard.press('ArrowUp', {delay: 100});

          let inputValue = await page.$eval('input', input => input.value);
          expect(inputValue).toEqual('124');
      });
  });

  describe('horizontal slider page', () => {
      test('change value test', async () => {
          let url = 'https://the-internet.herokuapp.com/horizontal_slider';
          await page.goto(url);

          await page.click('input');
          await page.keyboard.press('ArrowRight', {delay: 100});

          let inputValue = await page.$eval('input', input => input.value);
          expect(inputValue).toEqual('3');
      });
  });

  describe('notification message page', () => {
      test('appear of notification test', async () => {
          let url = 'https://the-internet.herokuapp.com/notification_message_rendered';
          await page.goto(url);

          await page.click('#content > .example > p > a');

          await page.waitForSelector('#flash');
          let renderedMessage = await page.$eval('#flash', message => message.innerText);
          try {
              expect(renderedMessage).toMatch(' Action successful\n×');
          }
          catch {
              expect(renderedMessage).toMatch(' Action unsuccesful, please try again\n×');
          }
      });
  });

  describe('status codes page', () => {
      test('status code 404 test', async () => {
          let url = 'https://the-internet.herokuapp.com/status_codes';
          await page.goto(url);

          let href = await page.$eval('#content > .example > ul > li:nth-child(3) > a', link => link.href);

          let newPage = await page.goto(href);
          let statusCode = await newPage.status();
          expect(statusCode).toEqual(404);
      });
  });

  describe('dynamic controls page', () => {
      test('remove checkbox test', async () => {
          let url = 'https://the-internet.herokuapp.com/dynamic_controls';
          await page.goto(url);

          await page.click('.row > #content > .example > #checkbox-example > button');

          await page.waitForSelector('#checkbox-example > #message');
          let message = await page.$eval('#checkbox-example > #message', message => message.innerText);
          expect(message).toMatch("It's gone!");
      });
  });

  describe('basic auth page', () => {
      test('valid auth test', async () => {
          let url = 'https://the-internet.herokuapp.com/basic_auth';

          await page.authenticate({'username': 'admin', 'password': 'admin'});

          await page.goto(url);

          let message = await page.$eval('.example > p', message => message.innerText);
          expect(message).toMatch('Congratulations! You must have the proper credentials.');
      });
  });
});*/