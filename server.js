const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
//import routes
const authRoutes = require('./backend/routes/auth');
const { db } = require('./backend/models/User');
//app
const app = express();
// db
mongoose
  .connect(process.env.DATABASE,{
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
   })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use('/api', authRoutes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});