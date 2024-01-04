const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

// catch all route for any unknown routes
app.use("*", (req, res) => {
  res.status(404).send("Page not found");
});

// create error handler to replace default express error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
