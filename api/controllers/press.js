const Press = require("../models/press.js");

exports.create = (req, res) => {
    console.log("req", req.body)
    let press = new Press(req.body)
    Press.create(press, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Press."
            });
        else res.send(data)

    });
}
exports.getAll = (req, res) => {
    Press.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Pressss."
            });
        else res.send(data)

    });
}
