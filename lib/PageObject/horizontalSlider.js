const locators = require('../Locators/locators');
const puppeteer = require('puppeteer');

class HorizontalSlider {
    async goto(page) {
        await page.goto(locators.horUrl);
    }

    async clickAndSlideDelay(page) {
        await page.click(locators.horSlider);
        await page.keyboard.press('ArrowRight');
    }

    async clickAndDoubleSlideDelay(page) {
        await page.click(locators.horSlider);
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
    }

    async getSliderValue(page) {
        return await page.$eval(locators.horSlider, input => input.value);
    }

    async getSliderDivValue(page) {
        await page.waitForXPath(locators.horSliderUrl);
        let [element] = await page.$x(locators.horSliderUrl);
        let title = await page.evaluate(element => element.textContent, element);
        return title;
    }
}

module.exports = HorizontalSlider;