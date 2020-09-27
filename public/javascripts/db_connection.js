module.exports = {
    host: "localhost",
    user: "root",
    password: "",
    database: "infrrd_db",
    port: 3307
};
// con.connect(function(err, res) {
//     if (err) { console.log(err) };
//     console.log("Connected!");
//     // con.query("CREATE DATABASE infrrd_db", function(err, result) {
//     //     if (err) { console.log(err) };
//     //     console.log("Database created");
//     // });

//     // var sql = "CREATE TABLE meeting (id INT(11), agenda VARCHAR(255), date INT(11), start_time INT(11), end_time INT(11), room_id INT(11))";
//     // con.query(sql, function(err, result) {
//     //     if (err) { console.log(err) };
//     //     console.log("Meeting created");
//     // });

//     // var sql = "INSERT INTO rooms (id, name) VALUES ?";
//     // var values = [
//     //     [1, 'Highway 71'],
//     // ];
//     // con.query(sql, [values], function(err, result) {
//     //     if (err) throw err;
//     //     console.log("Number of records inserted: " + result.affectedRows);
//     // });
// });