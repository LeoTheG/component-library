const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, "..", "src", "public")));

app.listen(port, () => console.log("listening on port ", port));
