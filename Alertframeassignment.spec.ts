import test, { expect } from "@playwright/test";

test("Alert handling",async({page})=>{
    page.once('dialog', alertType=>{

const message=alertType.message()
console.log(alertType)
const type=alertType.type()
console.log(message)
alertType.accept()
    })
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click();
await page.waitForTimeout(2000)
const result= await page.frameLocator("//iframe[@id='iframeResult']").locator("#demo")
await expect(result).toHaveText("You pressed OK!");

})