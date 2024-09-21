const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const uploadPath = path.join(__dirname,'uploads');

// Serve the static html and other assets
app.use(express.static(__dirname));

// setup multer storage for the file uploads
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,uploadPath);
    },
    filename :(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload = multer({storage: storage});

//file upload route
app.post('/upload',upload.array('files'),(req,res)=>{
    if(req.files){
        res.json({message: 'Files uploaded successfully'});
    }
    else{
        res.status(400).json({message: 'No files were uploaded'});
    }
});

// start the server
app.listen(3000,()=>{
    console.log('Server listening on port 3000');
});

// goto http://localhost:3000

// thanks for watching. 
/// please like and subscribe.