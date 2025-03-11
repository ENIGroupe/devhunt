const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
})

db.query("CREATE DATABASE IF NOT EXISTS Auth", (err, result) => {
    if(err) {
        console.error("Erreur lors de la création de la base :", err)
    } else {
        console.error("Base de données prête! ")
    }
})

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Auth'
})

module.exports = dbConnect;