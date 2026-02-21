const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello from ECS via CI/CD"));
app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(3000, "0.0.0.0", () => console.log("Listening on 3000"));