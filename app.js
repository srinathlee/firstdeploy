const express = require('express')
const mysql = require('mysql')
//const { ConnectionString } = require('connection-string');
const { createPool } = require('mysql')
const app = express()


const con = mysql.createConnection('mysql://root:sRK8ZYd8OYt7zl5pRHLO@containers-us-west-136.railway.app:5823/railway')

// {
//     host: 'containers-us-west-136.railway.app',
//     port: 5823,
//     user: 'root',
//     password: 'sRK8ZYd8OYt7zl5pRHLO',
//     database: 'railway',
//     // url :'mysql://${{ MYSQLUSER }}:${{ MYSQLPASSWORD }}@${{ MYSQLHOST }}:${{ MYSQLPORT }}/${{ MYSQLDATABASE }}'
// }
const initializeDb = () => {
    con.connect(function (err) {
        if (err) throw err;
        app.listen(process.env.port || 3000, () => {
            console.log(`server running at ${process.env.port}`)
        })
    });
}

initializeDb()


app.get('/', (req, res) => {
    pool.query('select * from users;', (err, results) => {
        if (err) {
            console.log(err)
            res.send(err);
        } else {

            res.status(200).json({ 'results': results });
        }

    });
    res.send('hello world!!')
})