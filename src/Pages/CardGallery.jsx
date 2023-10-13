import React, { useContext } from "react";
import Card from "../components/Card/Card";
import RecipeContext from "../context/RecipeContext";

const CardGallery = () => {
  const { fetchedData, saveRecipe, unsaveRecipe } = useContext(RecipeContext);

  return (
    <div className="container d-flex my-4 flex-wrap justify-content-center">
      {fetchedData.map((item, i) => (
        <Card
          readmore={item.recipe.url}
          key={item.recipe.uri}
          img={item.recipe.image}
          by={item.recipe.source}
          title={item.recipe.label}
          recipe={item.recipe}
          saveRecipe={saveRecipe} // Pass the saveRecipe function here
          unsaveRecipe={unsaveRecipe} // Pass the unsaveRecipe function here
        />
      ))}
    </div>
  );
};

export default CardGallery;
