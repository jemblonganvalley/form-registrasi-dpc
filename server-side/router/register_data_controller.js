const express = require("express");
const formidable = require("formidable");
const store = express.Router();
const path = require("path");
const StoreData = require("../modal/StoreData_modal");
const uuid = require("uuid").v4;

store.post("/:dpc", async (req, res) => {
  const { dpc } = req.params;

  const form = await formidable({
    multiples: false,
    uploadDir: path.join(__dirname, `../../static/dpc_${dpc}`),
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
    StoreData.storeDataMember(data, dpc)
      .then(() => {
        StoreData.storeImage({
          id: uuid(),
          created_at: new Date().toLocaleString(),
          photo_name: files.photo.name,
          user_email: fields.email,
          photo_path: `/dpc_${dpc}/${files.photo.name}`,
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

store.post("/", (req, res) => {
  const { filter } = req.body;
  StoreData.getData(filter).then((result) => {
    res.status(200).json({
      success: true,
      data: result,
    });
  });
});

store.delete("/", (req, res) => {
  const { filter } = req.body;
  console.log(filter);
  StoreData.deleteData(filter)
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: new Error("data tidak ada"),
      });
    });
});

module.exports = store;
