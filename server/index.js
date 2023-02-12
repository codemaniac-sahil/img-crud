const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(cors());
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.set("strictQuery", false);
app.use(express.json());

app.use("/user", require("./routes/user"));

app.listen(8000, () => {
  console.log("Server is running");
});
