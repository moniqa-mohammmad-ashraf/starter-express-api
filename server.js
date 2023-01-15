const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const routes = require('./controllers/routecontroller');
const port = process.env.PORT || 3001;
app.use(cors());
require('dotenv').config();

mongoose.set("strictQuery", false);
mongoose.connect(
  'mongodb+srv://sa:123@cluster0.gaiezys.mongodb.net/testAc',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
);

  // ...
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);


app.listen(port, () => console.log(`Server listening at port ${port}...`));







