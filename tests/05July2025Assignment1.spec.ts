import test, { chromium, expect, firefox } from "@playwright/test";

// Test case: Create a new Lead in Salesforce
test('Create Lead', async () => {

    // Launch Chrome browser in non-headless mode
    const chromebrowser = await chromium.launch({ channel: 'chrome', headless: false });

    // Create a new browser context (like a fresh profile)
    const context = await chromebrowser.newContext();

    // Open a new page (tab) in the browser
    const page = await context.newPage();

    // Navigate to Salesforce login page
    await page.goto("https://login.salesforce.com");

    // Enter username
    await page.locator("#username").fill("dilip@testleaf.com");

    // Enter password
    await page.locator("#password").fill("Leaf@123");

    // Click the login button
    await page.locator("#Login").click();

    // Wait for the home page to load
    await page.waitForTimeout(10000);

    // Click on the App Launcher (waffle icon)
    await page.locator(".slds-icon-waffle").click();

    // Wait for the app menu to appear
    await page.waitForTimeout(5000);

    // Click on "View All" to see all available apps
    await page.click('button:text("View All")');

    // Click on "Sales" app
    await page.locator("//p[text()='Sales']").click();

    // Click on the "Leads" tab in the navigation
    await page.locator("//span[text()='Leads']").click();

    // Click the "New" button to create a new lead
    await page.locator('div[title="New"]').click();

    // Click the salutation dropdown
    await page.locator('button[name="salutation"]').click();

    // Wait for the dropdown options to load and select "Mrs."
    await page.waitForSelector('lightning-base-combobox-item >> text=Mrs.');
    await page.locator('lightning-base-combobox-item >> text=Mrs.').click();

    // Fill in the Last Name field
    await page.waitForSelector("//input[@name='lastName']");
    await page.locator("//input[@name='lastName']").click();
    await page.locator("//input[@name='lastName']").fill("Shweta");

    // Fill in the Company Name field
    await page.waitForSelector("//input[@name='Company']");
    await page.locator("//input[@name='Company']").click();
    await page.locator("//input[@name='Company']").fill("TestLeaf");

    // Click the Save button
    await page.click('button[name="SaveEdit"]');

    // Capture and validate the success toast message
    const Message = await page.locator("//span[contains(@class, 'toastMessage')]").textContent();
    expect(Message).toBe('Lead "Mrs.  Shweta" was created.');

    // Log the success message in console
    console.log(Message);
});
