const express = require('express');
const dbConnection = require('./db_connection');
const app = express();
var http = require('http');
const bodyParser = require("body-parser");
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
var mysql = require('mysql');

var dbConn = mysql.createConnection(dbConnection);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/insert_meeting', (req, res) => {
    console.log(req.body.date);
    var sql = "INSERT INTO meeting SET ? ";
    dbConn.query(sql, {
        agenda: req.body.agenda,
        name: req.body.name,
        date: req.body.date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        room_id: req.body.room_id,
    }, function(err, result) {
        if (err) throw err;
        res.json({
            'msg': 'Added successfully!'
        });
    });
});

app.post('/check_availability', (req, res) => {
    console.log(req.body);
    var sql = "SELECT * FROM meeting WHERE room_id = ? ";
    dbConn.query(sql, [req.body.room_id], function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json({
            'msg': 'Success!',
            'response': result
        });
    });
});

app.post('/delete_meeting', (req, res) => {
    var sql = "DELETE FROM meeting WHERE id = ?";
    dbConn.query(sql, [req.body.id], function(err, result) {
        if (err) throw err;
        res.json({
            'msg': 'Success!',
        });
    });
});

app.post('/get_rooms', (req, res) => {
    var sqlNext = "SELECT * FROM meeting WHERE room_id = ?";
    dbConn.query(sqlNext, [req.body.id], function(err, resultNext) {
        if (err) throw err;
        res.json({
            'msg': 'Success!',
            'response': resultNext
        });
    });
    // var sql = "SELECT * FROM rooms";
    // var obj = [];
    // dbConn.query(sql, [], function(err, result) {
    //     if (err) throw err;
    //     const resData = result;
    //     resData.forEach(async(element) => {
    //         var sqlNext = "SELECT * FROM meeting WHERE room_id = ?";
    //         dbConn.query(sqlNext, [element.id], function(err, resultNext) {
    //             if (err) throw err;
    //             element['meetings'] = resultNext;
    //             console.log('line68')
    //         });
    //     });
    //     res.json({
    //         'msg': 'Success!',
    //         'response': resData
    //     });
    //     console.log('line72')
    // });
});


app.listen('8080', () => console.log(`Example app listening on port 8080!`))