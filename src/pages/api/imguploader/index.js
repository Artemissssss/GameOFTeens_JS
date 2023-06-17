import nextConnect from 'next-connect';
import multer from 'multer';
const {GridFsStorage} = require('multer-gridfs-storage');
const path = require('path');
const crypto = require('crypto');
const mongoURI = `mongodb+srv://${process.env.NEXT_PUBLIC_DATABASE_USER}:${process.env.NEXT_PUBLIC_DATABASE_PASSWORD}@${process.env.NEXT_PUBLIC_DATABASE}/goiteens-files`;
        
        
const storage = new GridFsStorage({
  url: mongoURI,
  options: {useUnifiedTopology: true, useNewUrlParser: true},
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'files'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

const apiRoute = nextConnect({
onError(error, req, res) {
  res.status(404).json({ error: `Sorry something Happened! ${error.message}` });
},
onNoMatch(req, res) {
  res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
},
});

apiRoute.use(upload.array('upload'));

apiRoute.post((req, res) => {
  const {filename, mimetype, size} = req.files[0]
res.status(200).json({
  'uploaded': 1,
  'fileName': filename,
  'url': `/api/imguploader/${filename}`,
  size: size,
  type: mimetype,
  name: filename
});
});

export default apiRoute;

export const config = {
api: {
  bodyParser: false,
},
};