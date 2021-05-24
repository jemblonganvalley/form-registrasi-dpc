const express = require("express");
const formidable = require("formidable");
const store = express.Router();
const path = require("path");
const StoreData = require("../modal/StoreData_modal");
const uuid = require("uuid").v4;

store.post("/", async (req, res) => {
  const form = await formidable({
    multiples: false,
    uploadDir: path.join(__dirname, "../../uploads"),
    maxFileSize: 5 * 1024 * 1024, // 5MB
    keepExtensions: true,
    hash: true,
  });

  return await form.parse(req, (err, fields, files) => {
    const data = {
      ...fields,
      photo_name: files.photo.name,
      created_at: new Date().toLocaleDateString(),
    };
    StoreData.storeDataMember(data)
      .then(() => {
        StoreData.storeImage({
          id: uuid(),
          created_at: new Date().toLocaleString(),
          photo_name: files.photo.name,
          user_email: fields.email,
          photo_path: `/uploads/${files.photo.name}`,
        });
      })
      .then((result) => {
        res.status(201).json({
          success: true,
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          error: err,
        });
      });
  });
});

module.exports = store;
