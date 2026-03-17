import { Browser } from "./BrowserInheritance";

class Edge extends Browser{

    takeSnap(){
        console.log("Take the snap")
    }
clearCookies(){
    console.log("Clear the cookies")
}
}
let edgeObj= new Edge()
edgeObj.openURL()
edgeObj.closeBrowser()
edgeObj.navigateBack()
edgeObj.takeSnap()
edgeObj.clearCookies()