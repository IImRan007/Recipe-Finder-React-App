import React, { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Axios from "axios";

const App = () => {
  const [timeOutId, setTimeOutId] = useState();
  const [recipeList, setRecipeList] = useState([]);

  const APP_ID = "5e5fbafc";
  const API_KEY = "c4ea3e79fdf67ef985c0518d148513e2";

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${API_KEY}`
    );
    // console.log(response);
    setRecipeList(response.data.hits);
  };
  // Debouncing
  const onTextChange = (event) => {
    clearTimeout(timeOutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    setTimeOutId(timeout);
  };
  return (
    <>
      <GlobalStyle />
      <Header onTextChange={onTextChange} />
      {recipeList.length &&
        recipeList.map((recipeObj) => (
          <RecipeList recipeObj={recipeObj.recipe} />
        ))}
    </>
  );
};

export default App;
