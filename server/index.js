const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;


const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

//cors
const cors = require("cors");
app.use(
    cors({
        origin:"http://localhost:3000",
        methods: "GET, POST",
        credentials: true
    })
)

require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

//default route
app.get('/', (req, res)=>{
    return res.json({
        success: true,
        message: 'Your server is up and running.....'
    })
});

//activate
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})