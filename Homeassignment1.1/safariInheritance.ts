import { Browser } from "./BrowserInheritance";

class Safari extends Browser{
readerMode(){
    console.log("Reader mode")
}
fullScreenMode(){
console.log("Full screener mode")
}
}
let safariObj= new Safari()
safariObj.openURL()
safariObj.closeBrowser()
safariObj.navigateBack()
safariObj.readerMode()
safariObj.fullScreenMode()