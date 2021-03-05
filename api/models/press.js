
const sql = require("./dbServices.js");

// constructor
const Press = function (press) {
    this.date=press.date
    this.time=press.time

};

Press.create = (newPress, result) => {
    sql.query("INSERT INTO Press SET ?", newPress, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created press: ", { id: res.insertId, ...newPress });
        result(null, { id: res.insertId, ...newPress });
        return
    });
};

Press.getAll = result => {
    sql.query("SELECT * FROM Press", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("pressss: ", res);
        result(null, res);
    });
};


module.exports = Press;