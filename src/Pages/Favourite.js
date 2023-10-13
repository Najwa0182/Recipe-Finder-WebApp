import React, { useContext } from "react";
import RecipeContext from "../context/RecipeContext";

const Favourite = () => {
    const { favoriteRecipes } = useContext(RecipeContext);
    return (
        <div className="favourite">
            <h2>Page for Favorite Recipe</h2>
            
        </div>
    );
}

export default Favourite;
