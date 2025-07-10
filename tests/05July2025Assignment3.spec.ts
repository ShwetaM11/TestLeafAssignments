import test, { chromium, expect, firefox } from "@playwright/test";

// Test Case: Create a new Individual in Salesforce
test('Create Individuals', async () => {

    // Launch Chrome browser in visible (non-headless) mode
    const chromebrowser = await chromium.launch({ channel: 'chrome', headless: false });

    // Create a new browser context (isolated session like incognito)
    const context = await chromebrowser.newContext();

    // Open a new browser tab (page)
    const page = await context.newPage();

    // Navigate to Salesforce login page
    await page.goto("https://login.salesforce.com");

    // Fill in username
    await page.locator("#username").fill("dilip@testleaf.com");

    // Fill in password
    await page.locator("#password").fill("Leaf@123");

    // Click on the Login button
    await page.locator("#Login").click();

    // Wait for the home/dashboard page to load
    await page.waitForTimeout(5000);

    // Click on the App Launcher (waffle icon)
    await page.locator(".slds-icon-waffle").click();

    // Wait for the launcher UI to be interactive
    await page.waitForTimeout(5000);

    // Click on "View All" to view all apps
    await page.click('button:text("View All")');

    // Select the "Individuals" app/module
    await page.locator("//p[text()='Individuals']").click();

    // Click on the list view dropdown to confirm the section is interactive
    await page.locator("//span[text()='Select a List View: Individuals']").click();

    // Click on the "New" button to create a new Individual
    await page.locator('div[title="New"]').click();

    // Wait for the Last Name input to appear
    await page.waitForSelector("//input[@placeholder='Last Name']");

    // Click and fill in the Last Name field
    await page.locator("//input[@placeholder='Last Name']").click();
    await page.locator("//input[@placeholder='Last Name']").fill("Shweta");

    // Click the Save button to submit the form
    await page.click("//span[text()='Save']");

    // Capture the success toast message
    const Message = await page.locator("//span[contains(@class, 'toastMessage')]").textContent();

    // Assert that the toast message confirms the creation
    expect(Message).toBe('Individual "Shweta" was created.');

    // Log the confirmation message
    console.log(Message);
});
