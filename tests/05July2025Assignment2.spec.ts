import test, { chromium, expect, firefox } from "@playwright/test";

// Test case: Create a Lead and then Edit the Company Name
test('Edit Lead', async () => {

    // Launch Chrome browser in non-headless mode
    const chromebrowser = await chromium.launch({ channel: 'chrome', headless: false });

    // Create a new browser context (isolated session)
    const context = await chromebrowser.newContext();

    // Open a new page
    const page = await context.newPage();

    // Navigate to the login page of Leaftaps
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Enter username
    await page.locator("#username").fill("DemoCSR2");

    // Enter password
    await page.locator("#password").fill("crmsfa");

    // Click the Login button
    await page.locator("//input[@value='Login']").click();

    // Click the CRM/SFA link (image)
    await page.locator("//img[@src='/opentaps_images/integratingweb/crm.png']").click();

    // Click on the "Leads" link
    await page.locator("//a[text()='Leads']").click();

    // Click on the "Create Lead" link
    await page.locator("//a[text()='Create Lead']").click();

    // Fill in Company Name
    await page.fill('#createLeadForm_companyName', 'TestLeaf');

    // Fill in First Name
    await page.fill('#createLeadForm_firstName', 'Shweta Lead');

    // Fill in Last Name
    await page.fill('#createLeadForm_lastName', 'Mehta');

    // Click the "Create Lead" button
    await page.locator("//input[@value='Create Lead']").click();

    // Click on the "Edit" button to modify the created lead
    await page.click('text=Edit');

    // Update the Company Name field
    await page.fill('#updateLeadForm_companyName', 'Updated Company Name As Test QA');

    // Click the "Update" button to save changes
    await page.locator("//input[@value='Update']").click(); 

});
