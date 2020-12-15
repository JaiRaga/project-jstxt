const fs = require('fs');
const path = require('path');
const express = require('express');
const Editor = require('../models/Editor');
const router = express.Router();

// Saved code to db
const header = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="./styles.css">
                    <title>sample</title>
                </head>
                <body>`,
	footer = `<script src="./script.js"></script>
                </body>
                </html>`;

// Post Route
router.post('/runcode', async (req, res) => {
	console.log(1, req.body, req.body.code);
	const body = header + req.body.html + footer;
	const code = new Editor({
		...req.body,
		html: body,
	});
	try {
		console.log(2, code);
		await code.save();
		console.log(3, path.join(__dirname, '../output/index.html'));

		// For Html editor
		!!code.html
			? fs.writeFile(
					path.join(__dirname, '../output/index.html'),
					code.html,
					(err) => {
						if (err) console.log('Error**********', err);
						else console.log('Success html');
					}
			  )
			: null;

		// For CSS editor
		!!code.css
			? fs.writeFile(
					path.join(__dirname, '../output/styles.css'),
					code.css,
					(err) => {
						if (err) console.log('Error**********', err);
						else console.log('Success css');
					}
			  )
			: null;

		// For JS editor
		!!code.js
			? fs.writeFile(
					path.join(__dirname, '../output/script.js'),
					code.js,
					(err) => {
						if (err) console.log('Error**********', err);
						else console.log('Success js');
					}
			  )
			: null;

		console.log(4);
		res.status(201).send(code);
	} catch (err) {
		res.status(500).send('Server Error');
	}
});

// Get Route
router.get('/code', async (req, res) => {
	try {
		const code = await Editor.find({});
		console.log(code);
		res.send(code);
	} catch (err) {
		res.status().send('Server Error');
	}
});

module.exports = router;
