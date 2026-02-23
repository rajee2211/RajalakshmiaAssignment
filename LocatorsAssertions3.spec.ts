// Create a new Account 

import test from "@playwright/test"

test("Create new salesforce account",async({page})=>{

    await page.goto("https://login.salesforce.com/") 
    await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com')
  //await page.waitForTimeout(3000)
    await page.getByLabel('Password').fill('TestLeaf@2025')
    await page.waitForTimeout(3000)
    await page.locator("#Login").click()
   await page.waitForTimeout(3000)
const title = await page.title()
const url = page.url()
console.log('Page Title:', title)
console.log('Current URL:', url)
   
await page.locator(".slds-icon-waffle").click()
await page.getByLabel('View All Applications').click()
await page.waitForTimeout(2000)
await page.getByPlaceholder('Search apps or items...').fill('Service')
await page.waitForTimeout(2000)
//service
//await page.locator("(//mark[text()='Service'])[1]").click()
// page.waitForTimeout(2000)
//accounts
await page.locator("(//span[text()='Accounts'])[1]").click()
await page.getByRole('button',{ name : 'New'}).click()
await page.waitForTimeout(2000)
await page.locator("[name='Name']").click()
await page.locator("//button[text()='Save']").click()
 
})