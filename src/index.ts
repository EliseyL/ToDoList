import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL!, {})
  .then(() => console.log('Database connected!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
