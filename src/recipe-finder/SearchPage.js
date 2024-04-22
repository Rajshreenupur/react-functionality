// frontend/src/pages/SearchPage.js

import React, { useState } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('/api/recipes/search', { query });
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
            <RecipeList recipes={recipes} />
      <input
        type="text"
        placeholder="Enter ingredients or dish name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPage;
