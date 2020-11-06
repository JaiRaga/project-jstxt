const express = require("express");
require("./db/mongoose");

const app = express();

//init middleware
app.use(express.json());

const port = process.env.PORT || 9008;

app.listen(port, () => console.log(`Server running on port ${port}`));
