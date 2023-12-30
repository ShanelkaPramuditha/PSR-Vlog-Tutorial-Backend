const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '68.233.101.101';
const mongoose = require('mongoose');
const router = require('./router');

// middleware
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Zeddy:BIv1STe9tBhCzgok@primarydatabase.2sjdf6b.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('MongoDB Error', error);
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port}`);
});

app.use('/api', router);
