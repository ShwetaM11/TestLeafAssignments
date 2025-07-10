import test, { chromium, expect, firefox } from "@playwright/test";

test('Create a new Account', async () => {

    // Launch Chrome browser in non-headless mode
    const chromebrowser = await chromium.launch({ channel: 'chrome', headless: false });

    // Create a new browser context
    const context = await chromebrowser.newContext();

    // Open a new page
    const page = await context.newPage();

    // Navigate to Salesforce login page
    await page.goto("https://login.salesforce.com");

    // Enter username
    await page.getByLabel('Username').fill('dilip@testleaf.com');

    // Enter password
    await page.getByLabel('Password').fill('Leaf@123');

    // Click Login
    await page.locator("#Login").click();
    await page.waitForTimeout(5000); // Wait for the dashboard to load

    // Click on App Launcher (waffle icon)
    await page.locator(".slds-icon-waffle").click();
    await page.waitForTimeout(5000);

    // Click on "View All"
    await page.click('button:text("View All")');
    await page.waitForTimeout(5000);

    // Click on app search box and enter "Service"
    await page.getByPlaceholder('Search apps or items...').click();
    await page.getByPlaceholder('Search apps or items...').fill("Service");

    // Click on the first "Service" app from search results
    await page.locator('(//mark[text()="Service"])[1]').click();

    // Click on the "Accounts" tab
    await page.locator('a[title="Accounts"]').click();

    // Click on the "New" button to create a new account
    await page.getByRole('button', { name: 'New' }).click();

    // Fill in the Account Name field
    const accountName = 'Shweta Account';
    await page.locator('input[name="Name"]').fill(accountName);

    // Click the "Save" button to create the account
    await page.click("//button[@name='SaveEdit']");

    // Capture and assert the success toast message
    const Message = await page.locator("//span[contains(@class, 'toastMessage')]").textContent();
    expect(Message).toBe('Account "Shweta Account" was created.'); 

    // Log the confirmation message to the console
    console.log(Message);
});
