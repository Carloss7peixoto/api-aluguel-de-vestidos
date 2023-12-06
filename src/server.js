// /src/server.js

const express = require('express');
const mongoose = require('mongoose');
const dressRoutes = require('./routes/dressRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const authenticateJWT = require('./middleware/authenticateJWT');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/aluguelvestidos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/dresses', authenticateJWT, dressRoutes);
app.use('/auth', authRoutes);
app.use('/users', authenticateJWT, userRoutes); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

