const Press = require("../models/press.models.js");

exports.create = (req, res) => {
    console.log("req", req.body)
    let press = new Press(req.body)
    Press.create(press, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Delivery."
            });
        else res.send(data)

    });
}