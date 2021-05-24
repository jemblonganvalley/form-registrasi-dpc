const express = require("express");
const cors = require("cors");
const hbs = require("express-handlebars");
const path = require("path");
const { home, about } = require("./router");
const frm = require("./router/formPendaftaran");
const store = require("./router/storeForm_controller");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.static(path.join(__dirname, "../build")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//view engine
app.set("views", path.join(__dirname, "../build"));
app.set("view engine", "html");
app.engine(
  "html",
  hbs({
    layoutsDir: path.join(__dirname, "../layouts"),
    defaultLayout: "layout.html",
    extname: "html",
  })
);

//router
app.use("/", home);
app.use("/formpendaftaran", frm);
app.use("/api/storeform", store);

app.listen(PORT, () => {
  console.log("listen port " + PORT);
});
