import test, { expect } from '@playwright/test';
import path from 'path';




test.only("File upload without event listener", async({page})=>{

   await page.goto(`https://the-internet.herokuapp.com/upload`)             
    const choose =page.locator("#file-upload")
    const filepath = path.join(__dirname, '../../../../testfileupload/sample1.png')
    await choose.setInputFiles(filepath)
    await page.waitForTimeout(5000)



})