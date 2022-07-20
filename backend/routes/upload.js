import express from "express";
import multer from "multer";
const router = express.Router();

export const fileStorageEngine = multer.diskStorage({
  destination: async (req, file, cb) => {
    cb(null, "./public");
  },

  filename: async (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

export const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Please upload an image!"), false);
  }
};

export default router;
