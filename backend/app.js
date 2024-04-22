// backend/app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors')

const app = express();

// Middleware
// app.use(bodyParser.json());
app.use(cors({ origin: "*"}))
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/recipe-finder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/recipes', recipeRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
