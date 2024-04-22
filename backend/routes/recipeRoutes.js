// backend/routes/recipeRoutes.js

const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/search', recipeController.searchRecipes);

module.exports = router;
