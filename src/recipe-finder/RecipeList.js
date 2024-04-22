import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients ? recipe.ingredients.join(', ') : 'N/A'}</p>
            <ol>
              {recipe.instructions && recipe.instructions.length > 0 ? (
                recipe.instructions.map((instruction, idx) => (
                  <li key={idx}>{instruction}</li>
                ))
              ) : (
                <li>No instructions available</li>
              )}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
