import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const RecipeList = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;
  // console.log(props);
  const close = () => {
    setShow(false);
  };
  return (
    <>
      <Dialog open={show} onClose={setShow}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </IngredientsText>
          <SeeMoreText onclick={close}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <RecipeListContainer>
        <RecipeContainer>
          <RecipeImage src={recipeObj.image} alt="recipe_image" />
          <RecipeName>{recipeObj.label}</RecipeName>
          <IngredientsText onClick={() => setShow(true)}>
            Ingredients
          </IngredientsText>
          <SeeMoreText onClick={() => window.open(recipeObj.url)}>
            See Complete Recipe
          </SeeMoreText>
        </RecipeContainer>
      </RecipeListContainer>
    </>
  );
};

export default RecipeList;

// Styled Components

const RecipeListContainer = styled.div`
  display: inline-block;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1.875rem;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  box-shadow: 0 3px 10px 0 #aaa;
  width: 18.75rem;
`;

const RecipeImage = styled.img`
  height: 36vh;
  object-fit: cover;
`;

const RecipeName = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 10px 0;
`;

const IngredientsText = styled.span`
  font-size: 1rem;
  border: solid 2px #eb3300;
  padding: 0.625rem 0.813rem;
  cursor: pointer;
  border-radius: 4px;
  color: #eb3300;
  font-weight: bold;
  text-align: center;
`;

const SeeMoreText = styled.span`
  font-size: 1rem;
  border: solid 2px #20b420;
  margin: 0.625rem 0;
  padding: 0.625rem 0.813rem;
  cursor: pointer;
  color: #20b420;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
`;
