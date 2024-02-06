const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const multer = require('multer');


const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handling Route 
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is Home Page');
  } else if (pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is About Page');
  } else if (pathname === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is Contact Page');
  } else if (pathname === '/file-write') {
    
    fs.writeFile('./res/demo.txt', 'hello world', (err) => {
      if (err) throw err;
      console.log('File demo.txt has been written');
    });

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('File created and text written: "hello world"');

  } else if (pathname === '/file-upload') {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });

    const upload = multer({ storage: storage }).single('file');

    upload(req, res, function (err) {
      if (err) {
        return res.end('Error uploading file.');
      }
      res.end('File is uploaded successfully!');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

});


server.listen(5500, () => {
  console.log(`Server is starts listening on port 5500`);
});
