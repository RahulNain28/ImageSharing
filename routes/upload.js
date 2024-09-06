const express = require("express");
const router = express.Router();
const multer  = require('multer');
const path = require('path');

let imageName = '';

// app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
    destination: path.join('./uploads'),
    filename: function (req, file, cb) {
        imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    },
});
const upload = multer({storage})

router.post("/upload", upload.single('image'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.status(201).json({url:'http://localhost:8080/uploads/'+imageName});
})


module.exports = router;
// module.exports = imageName;