// const {Builder, Capabilities, By, until} = require('selenium-webdriver')
 
// const chromedriver = require('chromedriver')
 
// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
 
// beforeAll(async () => {
//    await driver.get("")
// })
 
// afterAll(async () => {
//    await driver.quit()
// })

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('welcome back', function() {
   jest.setTimeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('welcome back', async function() {
    await driver.get("https://boardgamegeek.com/")
    await driver.manage().window().setRect({ width: 1936, height: 1066 })
    await driver.findElement(By.css(".dropdown-primary:nth-child(4) > .dropdown-toggle")).click()
    await driver.findElement(By.linkText("Geek Market")).click()
    await driver.findElement(By.css("li:nth-child(11) .nav-label")).click()
    await driver.findElement(By.linkText("Pay Commission")).click()
  })
})

//Run using = npx jest boardgamegeek.test.js