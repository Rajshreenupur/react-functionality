// backend/controllers/recipeController.js

const axios = require('axios');
const Recipe = require('../models/Recipe');

exports.searchRecipes = async (req, res) => {
  const { query } = req.body;
  try {
    // Call Edamam API for recipe search
    const appId = '38ef58a2';
    const appKey = '3bb083cd6081797c3001c51cebbe0553	';
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);

    // Process response and save to database (optional)
    // In this example, we're not saving to the database

    // Return response to client
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
