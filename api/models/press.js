
const sql = require("./dbServices.js");

// constructor
const Press = function (press) {
    this.date=press.date
};

Press.create = (newPress, result) => {
    sql.query("INSERT INTO press SET ?", newPress, (err, res) => {
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


module.exports = Press;