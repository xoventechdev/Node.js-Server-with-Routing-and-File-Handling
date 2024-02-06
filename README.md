# Node.js Server with Routing and File Handling

This project demonstrates a basic Node.js server implementation with routing and file handling capabilities. The server listens on port 5500 and responds to different URLs with predefined messages. It also includes file writing functionality using `fs.writeFile()` and file upload functionality using `multer`.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-server.git


2. Install dependencies:

   ```bash
   npm install

## Usage
To start the server, run the following command:

```bash
   node index.js

The server will start listening on port 5500. You can access different routes as follows:


- **/:** Home Page
- **/about :** About Page
- **/contact:** Contact Page
- **/file-write:**  Writes "hello world" to a file named demo.txt
- **/file-upload:** Endpoint for uploading files

## Dependencies
- **Multer:** [multer](https://www.npmjs.com/package/multer)

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
