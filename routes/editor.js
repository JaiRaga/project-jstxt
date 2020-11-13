const fs = require("fs");
const path = require("path");
const express = require("express");
const Editor = require("../models/Editor");
const router = express.Router();

// Save code to db
router.post("/runcode", async (req, res) => {
  console.log(1, req.body, req.body.code);
  const code = new Editor({
    ...req.body
  });
  try {
    console.log(2, code);
    await code.save();
    console.log(3, path.join(__dirname, "../public/index.html"));

    // For Html editor
    !!code.html
      ? fs.writeFile(
          path.join(__dirname, "../public/index.html"),
          code.html,
          (err) => {
            if (err) console.log("Error**********", err);
            console.log("Success html");
          }
        )
      : null;

    // For CSS editor
    !!code.css
      ? fs.writeFile(
          path.join(__dirname, "../public/styles.css"),
          code.css,
          (err) => {
            if (err) console.log("Error**********", err);
            console.log("Success css");
          }
        )
      : null;

    // For JS editor
    !!code.js
      ? fs.writeFile(
          path.join(__dirname, "../public/script.js"),
          code.js,
          (err) => {
            if (err) console.log("Error**********", err);
            console.log("Success js");
          }
        )
      : null;

    console.log(4);
    res.status(201).send(code);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
