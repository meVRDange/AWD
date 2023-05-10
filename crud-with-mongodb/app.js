const express = require("express");
const app = express();
const mongoose = require("mongoose");
const studentRouter = require("./routes/StudentRoutes");

app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
  );
app.use("/api/students", studentRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
