const {Builder, Capabilities, By, until} = require('selenium-webdriver')
 
const chromedriver = require('chromedriver')
 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
 
beforeAll(async () => {
   await driver.get("")
})
 
afterAll(async () => {
   await driver.quit()
})
