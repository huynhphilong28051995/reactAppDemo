import fs from 'fs';
import path from 'path';

import couchbase from 'couchbase';

import bodyParser from 'body-parser';

import multer from 'multer';

const jsonParser = bodyParser.json();

const storage = multer.diskStorage({
    destination: './.uploads/',
    filename: function (req, file, cb) {
        let ext;
        // Mimetype stores the file type, set extensions according to filetype
        switch (file.mimetype) {
            case 'image/jpeg':
                ext = '.jpeg';
                break;
            case 'image/png':
                ext = '.png';
                break;
        }
        cb(null, file.originalname.slice(0, 4) + Date.now() + ext);
    }
});

const upload = multer({storage: storage});

export default function (app) {
    app.post('/data/document/upload', upload.single('file'), (req, res, next) => {
        const fileName = req.file.filename;
        const filePath = req.file.path;
        next();
    });
}