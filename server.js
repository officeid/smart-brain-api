const express = require('express');
const bodyParser = require('body-parser');

const app= express();

app.use(bodyParser.json());

const database = {
    users : [
        {
            id: 1,
            name: 'faisal',
            email:'mf@m.com',
            password: '1234',
            entries: 0,
            joined: new Date()
        },
        {
            id: 2,
            name: 'ali',
            email:'mf1@m.com',
            password: '1234',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/',(req, res) =>{
    res.json(database.users);
});

app.post('/signin', (req, res) =>{

    if(req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password){
            res.json("success");
        }else{
            req.status(400).json("Error!");
        }
    console.log(req.body);
    // res.send('sign in'); 
    // res.json('sign in'); 

});

app.post('/register', (req, res) =>{
    const {name, email, password} = req.body;
    database.users.push(
        {
            id: 3,
            name: name,
            email:email,
            password: password,
            entries: 0,
            joined: new Date()
        }
    );
    res.json(database.users[database.users.length-1]);
});

app.listen(3000, ()=>{
    console.log('[INFO] App is running on port 3000');
});

/*
/signin --> POST success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT = user 
/
*/
