const express = require('express')
const db = require('./db')

const app = express()
//server setup
app.get('/', (req,res) => {
    res.status(200).json({message: 'express with mysql'})
})

app.get('/todo', (req,res)=> {
    //create an sql statement
    const sql = 'select * from todo';

    db.query(sql, (err, result) => {
        if(err) {
            return res.status(500).json({message: 'error fetching todo'})
        }
        res.status(200).json({todos: result})
    })
})

module.exports = app
