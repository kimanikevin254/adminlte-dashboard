// Import the required libraries
const sqlite3 = require('sqlite3').verbose()
const fetch = require('node-fetch');

// Connect to DB and give read and write permissions
const db = new sqlite3.Database('./db/salesData.db', sqlite3.OPEN_READWRITE, (err) => {
    err ? console.log(err.message) : console.log("DB connected successfully")
})

// Fetch the dummy sales data and store it in the DB
fetch("https://raw.githubusercontent.com/kimanikevin254/dummy-sales-data/main/salesdata.json")
    .then(res => res.json())
    .then((json) => 
        db.serialize(() => {
            // Create a table and specify the fields
            db.run("CREATE TABLE sales(region, manager, salesman, item, units, unitPrice, saleAmt)")
            
            // Statement for inserting the values into the DB
            const stmt = db.prepare("INSERT INTO sales VALUES (?, ?, ?, ?, ?, ?, ?)")
            
            // Loop through the fetched data and store it in the DB
            for(let i=0; i<json.salesData.length;i++){
                stmt.run(json.salesData[i].Region, json.salesData[i].Manager, json.salesData[i].SalesMan, json.salesData[i].Item, json.salesData[i].Units, json.salesData[i].Unit_price, json.salesData[i].Sale_amt)
            }
        
            stmt.finalize()
            
            // Read data from the DB and display it in the console
            db.each("SELECT region, manager, salesman, item, units, unitPrice, saleAmt FROM sales", (err, row) => {
                console.log(row.region, row.manager, row.salesman, row.item, row.units, row.unitPrice, row.saleAmt)
            })
        })
    )
    // Close the DB
    .then(() => db.close())
