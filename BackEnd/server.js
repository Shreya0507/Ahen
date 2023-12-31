const express = require('express')
const mysql2 = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    host: "localhost",
    user:"root",
    password: "Shubham@0247",
    database: 'signup'
})

app.post('/signin',(req,res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?"
    db.query(sql, [req.body.email, req.body.password], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            console.log("Yes data exists");
            return res.json("Success");
        } else {
            console.log("No data doesn't exists");
            return res.json("Fail");
        }
    })
    
    // console.log(req.body);
})

app.post('/signup',(req,res) => {
    const sql = "INSERT INTO login(`name`,`email`,`password`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json(err)
        }
        return res.json(data);
    })

    console.log(req.body);
})

app.listen(8081, () => {
    console.log("listening........");
})
