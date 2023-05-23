const express = require("express");
const app = express();
const path = require("path");
const router = require("./route/route1");
const { CheckDate } = require("./middelwares/date");
const port = 4000;


app.set('views','./views')
app.set('view engine','pug')
app.use(express.static(path.join(__dirname,'public')))

app.use("/", CheckDate,router);


app.listen(port, (err) => {
    err ? console.log(err) : console.log(`SERVER IS RUNNING ON PORT ${port}`);
 
});