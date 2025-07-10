import test, { chromium, expect, firefox } from "@playwright/test";

// Test Case: Edit the salutation for an existing Individual in Salesforce
test('Edit Individuals', async () => {

    // Launch Chrome browser in non-headless (visible) mode
    const chromebrowser = await chromium.launch({ channel: 'chrome', headless: false });

    // Create a new isolated browser context (like incognito)
    const context = await chromebrowser.newContext();

    // Open a new page/tab
    const page = await context.newPage();

    // Navigate to Salesforce login page
    await page.goto("https://login.salesforce.com");

    // Enter username
    await page.locator("#username").fill("dilip@testleaf.com");

    // Enter password
    await page.locator("#password").fill("Leaf@123");

    // Click the Login button
    await page.locator("#Login").click();

    // Wait for dashboard to load
    await page.waitForTimeout(5000);

    // Click the App Launcher (waffle icon)
    await page.locator(".slds-icon-waffle").click();

    // Wait for the launcher UI to be ready
    await page.waitForTimeout(5000);

    // Click on "View All" to display all available apps
    await page.click('button:text("View All")');

    // Select the "Individuals" app/module
    await page.locator("//p[text()='Individuals']").click();

    // Search for the Individual named "Shweta"
    await page.locator("//input[@name='Individual-search-input']").fill("Shweta");
    await page.keyboard.press('Enter');

    // Click the dropdown button on the first row's action menu
    await page.locator('table tbody tr:first-child td:last-child button').click();

    // Wait for menu to appear and click "Edit"
    await page.waitForTimeout(3000);
    await page.click('a[title="Edit"]');
    await page.waitForTimeout(3000);

    // Click the salutation dropdown
    await page.click("//div[@class='salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu']//a[@class='select']");

    // Wait for the dropdown options to be visible
    await page.waitForTimeout(3000);
    await page.waitForSelector("//li[@class='uiMenuItem uiRadioMenuItem']//a[@title='Mr.']");

    // Select "Mr." from the dropdown
    await page.click("//li[@class='uiMenuItem uiRadioMenuItem']//a[@title='Mr.']");

    // Click Save to update the individual
    await page.click("//span[text()='Save']");

    // Capture and assert the success toast message
    const Message = await page.locator("//span[contains(@class, 'toastMessage')]").textContent();
    expect(Message).toBe('Individual "Shweta" was saved.');

    // Log the message to the console
    console.log(Message);
});
