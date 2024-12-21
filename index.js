const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000;
const cors = require('cors');
const Users = require("./mongoose/models.js");

import("./mongoose/connection.js");
const secretKey = "nikkkkkk123"
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    console.log('end point hit ===============');
    res.json({ msg: 'Hello World!' })
})

app.get('/users', async (req, res) => {
    console.log('gettign courese ===============');
    try {
        let x = await Users.find();
        res.status(200).json(x)
    } catch (error) {
        console.log(error);
    }
});


app.post('/users', async (req, res) => {
    console.log('users callled ===============');
    console.log(req.body);
    
    try {
        const postedData = await new Users(req.body).save()
        console.log(postedData);
        res.status(200).json(postedData)
    } catch (error) {
        console.log(error);
    }
});

app.post('/api/auth/login', async (req, res) => {
    console.log('users callled  /api/auth/login===============');
    console.log(req.body);    
    try {
        const loginData = await find({email: req.body.email})
        console.log(loginData);
        if(loginData){
            if(req.body.password == loginData.password){
                let token = jwt.sign({ id: loginData._id }, secretKey, { expiresIn: '9999 years' });
                loginData.password = undefined;
                res.status(200).send({ success: true, auth: true, token: token, user: user, message: 'Login successful.' });
            }
        }
        console.log(postedData);
        res.status(200).json(postedData)
    } catch (error) {
        console.log(error);
    }
});

app.post('/api/auth/register', async (req, res) => {
    console.log('register callled  register===============');
    console.log(req.body);
    try {
        const registerData = await new Users(req.body).save()
        console.log(registerData);
        res.status(200).json({registerData})
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// mongodb+srv://nik:NA7T4JExmRAPuGZ@cluster0.ozcp8.mongodb.net/