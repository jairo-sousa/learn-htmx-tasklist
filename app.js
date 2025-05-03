const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}`);
});
