import test from "@playwright/test"
test("Case update in salesforce",async({page})=> {

   
       await page.goto("https://login.salesforce.com/") 
       await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com')
     //await page.waitForTimeout(3000)
       await page.getByLabel('Password').fill('TestLeaf@2025')
       await page.waitForTimeout(3000)
       await page.locator("#Login").click()
       await page.locator(".slds-icon-waffle").click()
      await page.getByLabel("View All Applications").click()
       await page.getByPlaceholder("Search apps or items...").fill('Sales')
await page.getByPlaceholder("Search apps or items...").press('Enter')
       await page.waitForTimeout(3000)
       //await page.getByRole('link',{name:'Cases',exact:true}).click()
       //await page.locator("//p[text()='Cases']").click()
       await page.locator("//span[text()='00001008']").click()
       await page.locator("[name='Edit']").click()
       await page.getByRole("combobox",{name :'Status'}).click()
       await page.locator("//span[text()='On Hold']").last().click()
       await page.getByRole("combobox",{name :'Case Origin'}).click()
       await page.locator("//span[text()='Phone']").last().click()
       await page.getByRole("combobox",{name :'Priority'}).click()
       await page.locator("//span[text()='Low']").last().click()
  await page.locator("[name='SaveEdit']").click()
  await page.getByText('Case "00001008" was saved.').click()

})