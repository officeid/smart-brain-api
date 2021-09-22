const express = require('express');

const app= express();


app.get('/',(req, res) =>{
    res.send('This is working');
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