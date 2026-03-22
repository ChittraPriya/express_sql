const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')

const app = express()
//parse the body in the request object
app.use(bodyParser.json());

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


//Create a new Todo
app.post('/todo', (req,res) => {
    //create an sql statement
    const {tittle,description,isCompleted} = req.body
   //prepare the insert statement   const sql = 'insert into todo ( tittle, description,isCompleted) values (?, ? ,?)';
   //perform the query
   db.query(sql, [tittle, description, isCompleted], (err, result) => {
    if(err){
        return res.status(500).json({message: 'Error Fetching Details'})
    }
    res.status(201).json({message: 'new todo created', todo:result})
   })
})

//Update a new Todo
app.put('/todo/:id', (req,res) =>{
    const {id} = req.params
     //create an sql statement
    const {tittle,description,isCompleted} = req.body
    //update the insert statement
   const sql = 'update todo set tittle = ? , description = ?, isCompleted= ? where id = ?';
   //perform the query
   db.query(sql, [tittle, description, isCompleted, id], (err, result) => {
    if(err){
        return res.status(500).json({message: 'Error Fetching Details'})
    }
    res.status(200).json({message: 'todo update successfully', todo:result})
   })
})

   //Delete todo
   app.delete('/todo/:id', (req,res)=>{
    const {id} = req.params;
    //create a sql statement
    const sql = 'delete from todo where id = ?';
    //perform the query
    db.query(sql, [id], (err, result) => {
        if(err){
            return res.status(500).json({message: 'Error Fetching Details'})
        }
        res.status(200).json({ message: 'Deleted SuccessFully', todo: result})
    })
   })
   
module.exports = app
