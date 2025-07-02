import test from "playwright/test";

test("Page Fixture", async({page})=>{
    
    //page fixture -> pre condition (set browser, window and page)
    //async({page}) -> pre condition line
    //await page.goto("")

    await page.goto("https://www.google.com")

    
})