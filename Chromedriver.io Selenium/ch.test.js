const webdriver = require('selenium-webdriver')

function searchTitle() {
    let driver = new webdriver.Builder().forBrowser('chrome').build()

    driver.get('https://the-internet.herokuapp.com/').then(function() {
        driver.getTitle().then(function(title) {
            setTimeout(function() {
                console.log(title)
                driver.quit()
            }, 5000)
        })
    })
}

searchTitle()