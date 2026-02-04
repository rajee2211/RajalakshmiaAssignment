//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
//`runTests` with `switch` for test type messages.
//Hints to solve
//For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For 
//`runTests`, use a `switch` statement to handle different `testType` values, including a default case

let  launchBrowser="Safari"
if(launchBrowser=="google"){
    console.log("Given browser is " +" "+launchBrowser)
}
else if(launchBrowser=="IE"){
  console.log("Given browser is " +" "+launchBrowser)  
}
else{
    console.log("Given browser is " +" "+launchBrowser)
}

let runTests="sanity"
switch(runTests){
    case  "sanity":
    console.log("TestType is sanity")
    break
    case "regression":
    console.log("TestType is regression")
    break   
    default:
    console.log("TestType is Smoke")

}

