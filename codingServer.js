const http = require('http');
const fs = require('fs');
const path = require('path');
const serverport = 8000;

http
	.createServer((req, res) => {
		console.log(req.url);
		console.log(path.join(__dirname, 'output', req.url));
		if (req.url === '/') {
			fs.readFile('./output/index.html', (err, html) => {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(html);
			});
		} else if (req.url.match('.css')) {
			let fStream = fs.createReadStream('./output/styles.css', 'UTF-8');
			res.writeHead(200, { 'Content-Type': 'text/css' });
			fStream.pipe(res);
		} else if (req.url.match('.js')) {
			console.log(req.url.match('.js'));
			let fStream = fs.createReadStream('./output/script.js', 'UTF-8');
			res.writeHead(200, { 'Content-Type': 'text/javascript' });
			fStream.pipe(res);
		}
	})
	.listen(serverport);
