import {TestData} from "../Homeassignment1.2/testDataParentClass"

class LoginTestData extends TestData{
 enterUsername(){

    console.log("Enter username")
 }
enterPassword(){
    console.log("Enter password")
}
}
let logintestObj= new LoginTestData()
logintestObj.enterCredentials()
logintestObj.navigateToHomePage()
logintestObj.enterUsername()
logintestObj.enterPassword()