const db = require('./db')
const app = require('./app')
require('dotenv').config()

//connect to the mysql database
db.connect(error => {
    if(error) {
        console.error('Database connection failed:' ,error.message);
        return;
    }
    //success message
    console.log('connected to the mysql database')
})

app.listen(process.env.PORT, () => {

    console.log("Server running at http://localhost:3002");
})

