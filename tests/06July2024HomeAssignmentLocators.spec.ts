import test, { chromium, expect, firefox } from "@playwright/test";

// Test Case: Create Lead and validate data using locators
test('Locators', async () => {

    // Launch Chrome browser in non-headless mode
    const chromebrowser = await chromium.launch({ channel: 'chrome', headless: false });

    // Create a new browser context (like incognito)
    const context = await chromebrowser.newContext();

    // Open a new tab/page
    const page = await context.newPage();

    // Navigate to Leaftaps login page
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Fill in login credentials
    await page.locator("#username").fill("DemoCSR2");
    await page.locator("#password").fill("crmsfa");

    // Click the login button
    await page.locator("//input[@value='Login']").click();

    // Click the CRM/SFA image link to navigate to CRM page
    await page.locator("//img[contains(@src, 'crm.png')]").click();

    // Click the "Leads" link
    await page.locator("//a[text()='Leads']").click();

    // Click "Create Lead"
    await page.locator("//a[text()='Create Lead']").click();

    // Fill required form fields for lead creation
    await page.fill('#createLeadForm_companyName', 'TestLeaf');
    await page.fill('#createLeadForm_firstName', 'Shweta');
    await page.fill('#createLeadForm_lastName', 'Mehta');
    await page.fill('#createLeadForm_personalTitle', 'Mrs');
    await page.fill('#createLeadForm_generalProfTitle', 'QA Engineer');
    await page.fill('#createLeadForm_annualRevenue', '500000');
    await page.fill('#createLeadForm_departmentName', 'Quality Assurance');
    await page.fill('#createLeadForm_primaryPhoneNumber', '9998887770');

    // Click the "Create Lead" button to submit the form
    await page.locator("//input[@value='Create Lead']").click();

    // Fetch and log values from the created lead's view page
    const companyName = await page.locator('#viewLead_companyName_sp').textContent();
    console.log('Company Name:', companyName);

    const firstName = await page.locator('#viewLead_firstName_sp').textContent();
    console.log('First Name:', firstName);

    const lastName = await page.locator('#viewLead_lastName_sp').textContent();
    console.log('Last Name:', lastName);

    // Validate created lead values using assertions
    expect(companyName).toContain('TestLeaf');
    expect(firstName).toBe('Shweta');
    expect(lastName).toBe('Mehta');

    // Check if status field is visible
    const status = await page.locator('#viewLead_statusId_sp').isVisible();
    expect(status).toBeTruthy();

    // Log the page title
    const title = await page.title();
    console.log('Page title is:', title);
});
