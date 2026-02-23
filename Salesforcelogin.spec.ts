//specs.ts

import test,{chromium} from "@playwright/test";


test('Sales force',async({page,context})=>{
    const browser = await chromium.launch({channel:'chrome',headless:false})
    const context1 = await browser.newContext()
    const page1 =await context1.newPage()
    await page.goto("https://login.salesforce.com/ ")
 await page.waitForTimeout(5000)
  await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com')
    await page.getByLabel('Password').fill('TestLeaf@2025')
    await page.waitForTimeout(3000)
    await page.locator("#Login").click()
   await page.waitForTimeout(10000)
const title = await page.title()
const url = page.url()
console.log('Page Title:', title)
console.log('Current URL:', url)
await page.close()
})
