import test, { expect } from "@playwright/test";
import path from "path";

test("File upload in salesforce",async({page})=> {

   
       await page.goto("https://login.salesforce.com/") 
       await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com')
     //await page.waitForTimeout(3000)
       await page.getByLabel('Password').fill('TestLeaf@2025')
       await page.waitForTimeout(3000)
       await page.locator("#Login").click()
      await page.waitForTimeout(3000) 
  await page.locator(".slds-icon-waffle").click()
await page.getByLabel('View All Applications').click()
await page.waitForTimeout(2000)
await page.getByPlaceholder('Search apps or items...').fill('Accounts')
await page.waitForTimeout(2000)
//await page.locator("//mark[text()='Accounts']").click()
//await page.waitForTimeout(2000)
await page.getByRole('button',{ name : 'New'}).click()
//await page.waitForTimeout(2000)
await page.locator("[name='Name']").fill("TestAccounts")
await page.locator("//button[@aria-label='Type']").click()
await page.getByTitle('Prospect').click()
await page.waitForTimeout(2000)
//await page.locator("//div[@aria-label='Industry']").click()
//await page.getByTitle('Banking').click()
await page.locator("//button[text()='Save']").click()
await expect(page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']")).toContainText("Accounts")
await page.locator("//span[text()='Files']").click()
const chooser = page.waitForEvent('filechooser',{timeout: 5000})
await page.locator("//div[text()='Upload Files']").click()
const catchEvent = await chooser
    
await catchEvent.setFiles(path.join(__dirname, '../../../../testfileupload/sample1.png'))
    await page.waitForTimeout(5000)
    await expect(page.locator("//div[text()='sample1.png']")) .toHaveText(/sample1.*/);

await page.waitForTimeout(2000)



})
