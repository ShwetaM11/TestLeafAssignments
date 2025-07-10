import test, { chromium, expect, firefox } from "@playwright/test";

// Test Case: Edit a Lead and verify the updated fields
test('Edit a Lead', async () => {

    // Launch Chrome browser in visible mode
    const chromebrowser = await chromium.launch({ channel: 'chrome', headless: false });

    // Create a new browser context (isolated session)
    const context = await chromebrowser.newContext();

    // Open a new tab
    const page = await context.newPage();

    // Navigate to Leaftaps login page
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Fill in login credentials
    await page.locator("#username").fill("DemoCSR2");
    await page.locator("#password").fill("crmsfa");
    await page.locator("//input[@value='Login']").click();

    // Navigate to CRM/SFA
    await page.locator("//img[contains(@src, 'crm.png')]").click();

    // Click on "Leads"
    await page.locator("//a[text()='Leads']").click();

    // Navigate to "Find Leads"
    await page.locator("//a[text()='Find Leads']").click();

    // Fill in first name for search
    await page.locator("//div[@id='x-form-el-ext-gen248']//input[@name='firstName']").fill("Shweta");

    // Click on "Find Leads" button
    await page.locator("//button[text()='Find Leads']").click();

    // Get the first lead from the search result
    const leadLink = page.locator('//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a').first();

    // Ensure the lead link is visible before clicking
    await expect(leadLink).toBeVisible();

    // Click on the lead to open its detail page
    await leadLink.click();

    // Click "Edit" on the lead detail page
    await page.click("//a[text()='Edit']");

    // Update Company Name
    await page.fill('#updateLeadForm_companyName', 'updated TestLeaf');

    // Update Annual Revenue
    await page.fill('#updateLeadForm_annualRevenue', '10000000');

    // Update Department Name
    await page.fill('#updateLeadForm_departmentName', 'updated department');

    // Update Description
    await page.fill('#updateLeadForm_description', 'updated description');

    // Click the "Update" button to save changes
    await page.click('input[value="Update"]');

    // Retrieve updated values from the detail page
    const companyName = await page.locator('#viewLead_companyName_sp').textContent();
    console.log("Company Name:", companyName);

    const annualRevenue = await page.locator('#viewLead_annualRevenue_sp').textContent();
    console.log("Annual Revenue:", annualRevenue);

    const department = await page.locator('#viewLead_departmentName_sp').textContent();
    console.log("Department:", department);

    const description = await page.locator('#viewLead_description_sp').textContent();
    console.log("Description:", description);

    // Assert the values have been updated correctly
    expect(companyName).toContain('updated TestLeaf');
    expect(annualRevenue).toBe('$10,000,000.00');
    expect(department).toBe('updated department');
    expect(description).toBe('updated description');

    // Print the page title for verification/debugging
    const title = await page.title();
    console.log('Page title is:', title);

});
