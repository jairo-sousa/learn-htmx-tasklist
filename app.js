const express = require("express");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/api", todoRoutes);

app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}`);
});
