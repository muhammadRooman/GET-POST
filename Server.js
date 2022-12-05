const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
//mongoDb import
const DB = require("./DB/Connection");
//Place-router inside the Router folder
const placerouter = require("./Routers/Place-router");
//port no#
const port =  5000;
const app = express();
//cors npm because react run 3000 and server runs 5000 .
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", placerouter);

app.listen(port, console.log(`Server connected port No ${port}`));
