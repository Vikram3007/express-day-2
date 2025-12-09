
//1.we are calling buil in module and store it to express variable
let express = require("express")
//2.we are creating app using express function
let app = express()

app.use(express.json())
//10.creating a middleware to check token from user
let username="abu"
let mypass ="vikram"
//11.throwing error if token is not present
let checkToken = (req,res,next)=>{

if(req.query.token==""||req.query.token==undefined){

return res.send({


    status : 0,
    msg:"please fill the token"

})


}


if(req.query.token!=username){

return res.send({


    status : 0,
    msg:"please provide valid token"

})


}



    next();
}

app.use((req,res,next)=>{

if(req.query.userpass==""||req.query.userpass==undefined){

return res.send({


    status : 0,
    msg:"please fill the password"

})


}


if(req.query.userpass!=mypass){

return res.send({


    status : 0,
    msg:"please provide valid password"

})


}



    next();
})



app.use(checkToken)  //middleware



//3.we are creating api using get medthod
app.get("/",(req,res)=>{


   



    res.send({
        status : 1,
        msg : "home page api"
})
})



app.get("/cart",(req,res)=>{


    res.send({
        status : 2,
        msg : "cart page api"
})
})


//4.we are creating api using post method
app.post("/mart",(req,res)=>{
//6.we print the json data from user. 
     console.log(req)

    res.send({
        status : 3,
        msg : "mart page api",
        //7.req.body to print only body part
        bodydata : req.body
})
})


//8.to print query data we use req.query
app.post("/login",(req,res)=>{


    res.send({
        status : 2,
        msg : "cart page api",
        queryData : req.query

})
})

//9.to prinnt a dynamic data from user we use req.params

app.get("/login/:id",(req,res)=>{

let currentId = req.params.id

    res.send({
        status : 2,
        msg : "2nd page api"+currentId
        

})
})

//5.we are creating serverd using listen method
app.listen("3000");