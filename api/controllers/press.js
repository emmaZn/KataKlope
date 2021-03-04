const Press = require("../models/press.js");

exports.create = (req, res) => {
    console.log("req", req)
    let press = new Press(req.body)
    Press.create(press, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Delivery."
            });
        else res.send(data)

    });
}