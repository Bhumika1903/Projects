const { Console } = require('console');
const express = require('express');
const path = require('path');
const port = 2000;
const app = express();
const bodyparser = require('parser');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded());




var contactList = [
    {
        Name : "Bhumika",
        Phone : "6263109947"
    },
    {
        Name : "Dolly",
        Phone : "8989715468"
    },
    {
        Name : "Muskan",
        Phone : "7584694123"
    },
    {
        Name : "Kratika",
        Phone : "9425678912"
    }
]



app.get("/" , function(req , res){
    return res.render('home' , {
        title : "My Contacts lists",
        contact_list : contactList
    });
})

app.get("/practice" , function(req , res){
    return res.render('practice' , {title : "Lets play with ejs!"});
})

app.post("/create_contact" , function(req , res){
    //return res.redirect("/practice")
    /*console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Phone);*/
    contactList.push({
        Name: req.body.Name,
        Phone: req.body.Phone
    });
    return res.redirect('/')
})


app.listen(port , function(err){
    if (err){
        console.log("Error is found and will be solved quickly" , err);
        
    }
    console.log("No error Found");
})