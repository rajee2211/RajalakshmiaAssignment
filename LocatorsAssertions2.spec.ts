//Edit a Lead 
import test from "@playwright/test";

test("Locators and assertions", async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill('Demosalesmanager')
await page.waitForTimeout(4000)
await page.locator("#password").fill('crmsfa')
await page.locator(".decorativeSubmit").click()
await page.waitForTimeout(4000)
await page.locator("//a[contains(text(),'M/SF')]").click()
await page.waitForTimeout(4000)
await page.getByRole('link',{name:'Leads'}).click()
await page.waitForTimeout(4000)
await page.getByRole('link',{name:'Find Leads'}).click()
await page.locator("[name='firstName']").last().fill("TestFirstName")
await page.getByRole('button',{ name: 'Find Leads'}).click()
await page.waitForTimeout(4000)
//await page.locator(".linktext").nth(3).click()
await page.getByRole('link',{ name: '10427'}).click()
await page.locator("//a[text()='Edit']").click()
await page.locator("#updateLeadForm_companyName").fill("TestCompanyname")
await page.locator("#updateLeadForm_annualRevenue").fill("2000000")
await page.locator("#updateLeadForm_departmentName").fill("TestDepartmentupdated")
await page.locator("#updateLeadForm_description").fill("Test Description")
await page.locator(".smallSubmit").first().click()

await page.waitForTimeout(4000)

//need to verify the edited section with assertion





})