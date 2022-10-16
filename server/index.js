//import the required dependencies
const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require("cors")

// Create an instance of the server
const app = express()
// Enable all CORS requests
app.use(cors())
//Specify the port
const port = 3001

// Create a route that allows the GET HTTP method
app.get('/', (req, res) => {
    // Specify an SQL statement for fetching all the data from the database
    const sql = "SELECT * FROM sales"

    // Connect to DB and give read-only permission
    const db = new sqlite3.Database('./db/salesData.db', sqlite3.OPEN_READONLY, (err) => {
        err ? console.log(err.message) : console.log("DB connected successfully")
    })

    // Fetch all the data from the database, send it back to the client, and close the database connection
    db.all(sql, (err, rows) => {  
            res.send(rows)
            db.close()
    })
})

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`)
})
