import test, { request } from '@playwright/test'


let access_Token:any
let instance_Url:any
let token_type:any
let Opportunity_Id:any


test("SF E2E",async({request})=>{


//generate token


//Removed code for github upload


const res=await tokenResponse.json()
console.log(res)
access_Token=res.access_token
instance_Url=res.instance_url
token_type=res.token_type



//post request -> Account


const OppResponse=await request.post(`${instance_Url}/services/data/v59.0/sobjects/Opportunity`,{


    headers:{
        "Content-Type":"application/json",
        "Authorization":`${token_type} ${access_Token}`
    },
    data:{
        "Name": "Testing Raji",
    "CloseDate": "2025-03-15",
    "StageName":"Prospecting"

    }
})


const OppRes=await OppResponse.json()
console.log(OppRes)
Opportunity_Id=OppRes.id

//get request -> Account
const OppgetResponse=await request.get(`${instance_Url}/services/data/v59.0/sobjects/Opportunity/${Opportunity_Id}`,{


    headers:{
        "Content-Type":"application/json",
        "Authorization":`${token_type} ${access_Token}`
    }
    
})


const OppgetRes=await OppgetResponse.json()
console.log(OppgetRes)

//patch request

const OpppatchResponse=await request.patch(`${instance_Url}/services/data/v59.0/sobjects/Opportunity/${Opportunity_Id}`,{


    headers:{
        "Content-Type":"application/json",
        "Authorization":`${token_type} ${access_Token}`
    },
    data:{
        "Type": "New Customer",
"StageName":"Qualification"
    }
})

//const OpppatchRes=await OpppatchResponse.json()
console.log(OpppatchResponse)

//delete request
const OppdeleteResponse=await request.delete(`${instance_Url}/services/data/v66.0/sobjects/Account`,{


    headers:{
        "Content-Type":"application/json",
        "Authorization":`${token_type} ${access_Token}`
    }
    
})


//const accgetRes=await accgetResponse.json()
console.log(OppdeleteResponse)

})
