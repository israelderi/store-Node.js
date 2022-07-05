const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 7070;
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userinfodb');
const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: false }));

db.on('error', () => console.log("conection error"));
db.once('open', () => console.log("conected to the db!"));

app.use('/', express.static('public'));

app.get('/', (req, res) => { res.sendFile(__dirname + '/Pages/entrance.html') });

app.get('/signin', (req, res) => { res.sendFile(__dirname + '/Pages/signin.html') });

app.get('/payment', (req, res) => { res.sendFile(__dirname + '/Pages/payment.html') });

app.get('/signup', (req, res) => { res.sendFile(__dirname + '/Pages/signup.html') });

app.get('/store', (req, res) => { res.sendFile(__dirname + '/Pages/store.html') });

const UsersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String
});
const Users = mongoose.model('Users', UsersSchema);

app.post('/signup', (req, res) => {
    debugger
     var user = new Users({
        firstName: `${req.body.firstName}`,
        lastName: `${req.body.lastName}`,
        email: `${req.body.email}`,
        password: `${req.body.password}`,
        confirmPassword: `${req.body.confirmPassword}`

    })

const addToDB = async () => {
        const result = await Users.insertMany(user)
        res.sendFile(__dirname + '/Pages/signin.html')   
     }
    addToDB()
})
app.post('/signin', (req, res)=>{
const getFromBD = async ()=>{
const resu = await Users.find({email : `${req.body.email}`})
        if(resu[0].password === req.body.password){ 
            res.sendFile(__dirname + '/Pages/store.html')
        }
        else{
            res.send("NOT good") 
        }
    }
    getFromBD();
})

app.listen(PORT, () => { console.log(`listen on port ${PORT}`) });
