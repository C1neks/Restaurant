import express from "express";
import multer from "multer";
const router = express.Router();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      cb(new Error("Please upload an image."));
    }
    cb(undefined, true);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("File upload success");
});

router.post("/multiple", upload.array("images", 5), (req, res) => {
  console.log(req.files);
  res.send("Files uploaded success");
});

export default router;
