import { Browser } from "./BrowserInheritance";

class Chrome extends Browser{
openIncognito(){
    console.log("Open the incognito window")
}
clearCache(){
    console.log("Clear the cache")
}
}
let chromeObj= new Chrome()
chromeObj.openURL()
chromeObj.closeBrowser()
chromeObj.navigateBack()
chromeObj.openIncognito()
chromeObj.clearCache()
