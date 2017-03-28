var fs = require('fs');

var path = require('path');

var multer = require('multer');

var bodyParser = require('body-parser');

const storage = multer.diskStorage({
    destination: './.uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

module.exports = function (app) {
    app.post('/data/document/upload', upload.single('file'), (req, res, next) => {
        const fileName = req.file.filename;;
        const filePath = req.file.path;
        res.send(fileName);
    });
}