//global variable
let browser="Chrome";

//Function that accepts a callback
function checkBrowserVersion(callback){
    setTimeout(()=>{
        //pass the browser value to the callback after 2 seconds
        callback(browser);
    },2000);
}

//callback functions
function logBrowserVersion(browser){
    console.log("The browser version is:" +browser)
}
checkBrowserVersion(logBrowserVersion);