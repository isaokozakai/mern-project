const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const users = require('./routes/api/users');
const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use Routes
app.use(users);
app.use(items);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))