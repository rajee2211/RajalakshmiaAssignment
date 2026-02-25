import test, { expect } from '@playwright/test';
import path from 'path';
import { Expect } from '@playwright/test';


test("Upload file using Event Listener filechooser", async({page})=>{

    await page.goto(`https://the-internet.herokuapp.com/upload`)
    const chooser = page.waitForEvent('filechooser',{timeout: 5000})
    page.locator("//div[@id='drag-drop-upload']").click()
    
    const catchEvent = await chooser
    
    await catchEvent.setFiles(path.join(__dirname, '../../../../testfileupload/sample1.png'))
    await page.waitForTimeout(5000)
    await expect(page.locator("//span[text()='sample1.png']")).toHaveText(/sample1.*/);

})

test("Download file using event listener",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/download")
const downloadchooser= page.waitForEvent("download",{timeout : 5000})
await page.locator("//a[text()='file.json']").click()
const downloadevent = await downloadchooser
await downloadevent.saveAs(path.join(__dirname,"../../../../testfileupload/",downloadevent.suggestedFilename()))


})