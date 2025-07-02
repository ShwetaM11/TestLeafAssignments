import { channel } from "diagnostics_channel";
import test, { chromium } from "playwright/test";


test('Launch Browser' , async()=>{
    // set browser
    //deafult wait -> 30 sec
    const Edgebrowser=await chromium.launch({channel:'msedge',headless:false})
    //open  new window/context
    const context= await Edgebrowser.newContext()
    //open a page or tab
    const page= await context.newPage()
    //load the url
    await page.goto("https://www.leafground.com/table.xhtml")

    await page.waitForTimeout(5000)

    console.log(await page.title())
    console.log(page.url())
})
