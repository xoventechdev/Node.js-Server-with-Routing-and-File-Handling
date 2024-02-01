const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const multer = require('multer');

const PORT = 5500;

// Create HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Log message when server starts listening
  if (req.method === 'GET' && pathname === '/') {
    console.log(`Server is listening on port ${PORT}`);
  }

  // Route handling
  let pageContent = '';
  if (pathname === '/') {
    pageContent = '<h2>This is Home Page</h2>';
  } else if (pathname === '/about') {
    pageContent = '<h2>This is About Page</h2>';
  } else if (pathname === '/contact') {
    pageContent = '<h2>This is Contact Page</h2>';
  } else if (pathname === '/file-write') {
    // Writing to demo.txt using fs.writeFile
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) throw err;
      console.log('File demo.txt has been written');
    });
    pageContent = '<h2>File created and text written: "hello world"</h2>';
  } else if (pathname === '/file-upload') {
    // Example of file upload using Multer
    pageContent = '<h2>File Upload Page</h2>';
    // Include the file upload form or any other content related to file upload
  } else {
    pageContent = '<h2>404 Not Found</h2>';
  }

  // Generate HTML content dynamically
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Assignment Project</title>
        <style>
            /* Your CSS styles go here */
        </style>
    </head>
    <body>
    
    <header>
        <h1>Your Assignment Project</h1>
    </header>
    
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/file-upload">File Upload</a>
        <a href="/file-create">File Create</a>
    </nav>
    
    <section>
        ${pageContent}
    </section>
    
    </body>
    </html>
  `;

  // Set the appropriate content type and send the response
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

// Listen on port 5500
server.listen(PORT);
