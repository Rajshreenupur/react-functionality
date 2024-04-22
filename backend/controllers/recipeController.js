// backend/controllers/recipeController.js

const axios = require('axios');
const Recipe = require('../models/Recipe');

exports.searchRecipes = async (req, res) => {
  const { query } = req.body;
  try {
    // Call Spoonacular API for recipe search
    const apiKey = 'YOUR_SPOONACULAR_API_KEY';
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`);

    // Process response and save to database
    const recipesData = response.data.results.map(result => ({
      title: result.title,
      ingredients: result.missedIngredients.map(ingredient => ingredient.name),
      instructions: result.analyzedInstructions[0]?.steps.map(step => step.step),
      image: result.image,
    }));

    // Save recipes to the database
    await Recipe.insertMany(recipesData);

    // Return response to client
    res.json(recipesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
