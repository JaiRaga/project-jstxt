const express = require("express");
require("./db/mongoose");
const { node } = require("compile-run");

const app = express();

//init middleware
app.use(express.json());

// -----------------------------------------------------------------------------
// Compiler code
const srccode = `function name() {
    console.log("Hello Raga")
}
name()`;
const resultloc = node.runSource(srccode);

resultloc.then((res) => console.log(res)).catch((err) => console.log(err));

const result = node.runFile(`./app.js`, { stdin: "3\n2 " });

result.then((res) => console.log(res.stdout)).catch((err) => console.log(err));

// -----------------------------------------------------------------------------

const port = process.env.PORT || 9008;

app.listen(port, () => console.log(`Server running on port ${port}`));
