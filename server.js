const express=require("express");
const app=express();

const admin = require("firebase-admin");
const credentials= require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});


const db= admin.firestore();

app.use(express.json);
app.use(express.urlencoded({extended: true}));

app.post('/create',async(req,res)=>{
    try{
        console.log(req.body);
        const id= req.body.email; 
        const userJson={
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };
        const response = db.collection("users").doc(id).delete(userJson);
        res.send(response);

    }catch(error){
        res.send(error);
    }
})

app.get('/read/all',async(req,res)=>{
    try{
        const userref=db.collection("users");
        const response=userref.get();
        let responseArr=[];
        response.forEach((doc)=>{
            responseArr.push(doc.data());
        });
        res.send(responseArr);


    }catch(error){
        res.send(error);
    }
});


app.get('/read/;id',async(req,res)=>{
    try{
        const userref=db.collection("users").doc(request.params.id);
        const response=userref.get();
        
        res.send( response.data());


    }catch(error){
        res.send(error);
    }
});
app.get('/update',async(req,res)=>{
    try{
        const id= req.body.id;
        const newFirsrname="Hello World!"
        const userref=db.collection("users").doc(id);
        update({
            Firstname: newFirstname
        })

        
        res.send( response);


    }catch(error){
        res.send(error);
    }
});

app.get('/delete',async(req,res)=>{
    try{
        const response=db.collection("users").doc(req.params.id).delete();
        res.send(response);
    }catch(error){
        res.send(error);
    }
});





app.use(express.urlencoded({extended: true}));
const PORT=process.env.PORT 
app.listen(PORT,() => {
  console.log('server is running on port $(PORT).');  
}) 





  
