import test from "@playwright/test";

test("Login page ",async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.fill("#password","Sales@123")
    await page.click("#Login")
    await page.waitForTimeout(5000)

    const pageTitle=await page.title()
    console.log("Page Title:"+ pageTitle)
    
    await page.waitForTimeout(5000)

})