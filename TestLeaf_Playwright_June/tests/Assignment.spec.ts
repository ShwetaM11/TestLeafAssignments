import test, { chromium, firefox } from "@playwright/test";


test('Launching Edge Browser' , async() => {
    
    const Edgebrowser=await chromium.launch({channel:'msedge',headless:false})
    const context= await Edgebrowser.newContext()
    const page= await context.newPage()
    await page.goto("https://www.redbus.in")
    await page.waitForTimeout(5000)

    console.log(await page.title())
    console.log(page.url())
    page.close()

})


test('Launching Firefox Browser' , async() => {
    
    const Firefoxrowser=await firefox.launch({channel:'firefox',headless:false})
    const context= await Firefoxrowser.newContext()
    const page= await context.newPage()
    await page.goto("https://www.flipkart.com")
    await page.waitForTimeout(5000)

    console.log(await page.title())
    console.log(page.url())

})