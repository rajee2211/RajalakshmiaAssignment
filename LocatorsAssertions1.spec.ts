// Create a Lead 

import test from "@playwright/test";

test("Locators and assertions", async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill('Demosalesmanager')
await page.locator("#password").fill('crmsfa')
await page.locator(".decorativeSubmit").click()
await page.waitForTimeout(4000)
await page.locator("//a[contains(text(),'M/SF')]").click()
await page.waitForTimeout(4000)
await page.getByRole('link',{name:'Leads'}).click()
await page.waitForTimeout(4000)
await page.getByRole('link',{name:'Create Lead'}).click()
await page.waitForTimeout(4000)
await page.locator(".inputBox").first().fill("TestCompany")
await page.waitForTimeout(4000)
await page.locator(".inputBox").nth(2).fill("TestFirstName")
await page.locator("[name='lastName']").last().fill("testLastname")
await page.locator("[name='personalTitle']").fill("testtitle")
await page.locator("[name='generalProfTitle']").fill("TestprofTitle")
await page.locator("[name='annualRevenue']").fill("1000000")
await page.locator("[name='departmentName']").fill("TestDepartment")
await page.locator("[name='primaryPhoneNumber']").last().fill("9874566785")
await page.locator(".smallSubmit").click()

})
//not able to validate assertions since not able to login to leaftap