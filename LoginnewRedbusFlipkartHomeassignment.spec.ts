import test,{chromium,webkit} from "@playwright/test";

test('Red Bus',async()=>{
    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.redbus.in/')
    await page.waitForTimeout(5000)
    const PageTitle=await page.title()
    console.log(PageTitle)
    console.log(page.url())

 const browser1 = await webkit.launch({headless:false})
    const context1 = await browser1.newContext()
    const page1=await context1.newPage()
    await page1.goto('https://www.flipkart.com/')
    const PageTitle1=await page1.title()
    console.log(PageTitle1)
    console.log(page1.url())
    await page.waitForTimeout(5000)
})