const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to kataklope application." });
});
require("./routes/press.js")(app);



app.listen(process.env.PORT, () => {
    console.log(`app is running on port ${process.env.PORT}`)
})