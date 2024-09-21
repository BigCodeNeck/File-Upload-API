# File Upload API with Express.js and Multer

## Overview
This repository contains a simple Node.js application that allows file uploads through an API using **Express.js** and **Multer**. The uploaded files are stored locally in a designated directory, and the API can handle multiple file uploads at once.

## Features
- **Multiple File Uploads**: Supports uploading multiple files in a single request.
- **Express.js**: Backend server framework to handle HTTP requests.
- **Multer**: Middleware for handling file uploads and storing them on the server.

## Requirements
- Node.js (v12.x or higher)
- NPM (v6.x or higher)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/file-upload-api.git
cd file-upload-api
```

### 2. Install Dependencies
```bash
npm install
npm install express
npm install multer
```

### 3. Run the Application
```bash
node server.js
```
This will start the server on port **3000**.

## API Endpoint

### Upload Files
**POST** `/upload`

- This endpoint allows you to upload one or multiple files.
- Use form-data with the key `files` for file uploads.

#### Request Example (cURL):
```bash
curl -X POST http://localhost:3000/upload -F 'files=@/path/to/file1' -F 'files=@/path/to/file2'
```

#### Response Example:
```json
{
  "message": "Files uploaded successfully."
}
```

### Directory for Uploaded Files
All uploaded files will be stored in the `uploads/` directory located in the project root.

## Customization
- **Upload Directory**: You can change the directory where the files are uploaded by modifying the `uploadPath` variable in `app.js`.
- **File Naming**: The default behavior stores files with their original name. You can customize the file naming strategy inside the `filename` function in the Multer configuration.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit.
---

### Contributions
Feel free to fork the repository, make improvements, and submit a pull request. Any contributions to enhance the project are welcome!
