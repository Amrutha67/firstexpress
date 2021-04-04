let express=require('express')
let app=express()
app.get('/', (req,res)=>{

    res.send("hello")
})
app.get('/home' ,(req,res)=>{
    res.send("Iam Amrutha from Wayanad")

})

app.get('/name',(req,res)=>{
    res.send("Let your dreams come true")

})

app.get('/abc',(req,res)=>{
    res.send("Every moment is a fresh beginning"
 
    )
})

app. listen(3000,()=>{
  console.log ("server started at http://localhost:3000/")
})