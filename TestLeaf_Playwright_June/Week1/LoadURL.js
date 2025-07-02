import { channel } from "diagnostics_channel";
import test, { chromium } from "playwright/test";


test('Launch Browser' , async()=>{
    // set browser
    //deafult wait -> 30 sec
    const browser=await chromium.launch({channel:'edge',headless:false})
    //open  new window/context
    const context= await browser.newContext()
    //open a page or tab
    const page= await context.newPage()
    //load the url
    await page.goto("https://www.leafground.com/table.xhtml")

    await page.waitForTimeout(5000)
})

//npx playwright test filename
//npx playwright test LaunchBrowser.spec.ts