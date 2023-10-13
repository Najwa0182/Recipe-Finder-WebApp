// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Card.css";
// import RecipeContext from "../../context/RecipeContext";

// const Card = (props) => {
//   const [isSaved, setIsSaved] = useState(false);
//   const { saveRecipe, unsaveRecipe } = useContext(RecipeContext);
//   const navigate = useNavigate();

//   const handleSaveClick = () => {
//     if (isSaved) {
//       setIsSaved(false);
//       unsaveRecipe(props.recipe); // Unsave the recipe
//     } else {
//       setIsSaved(true);
//       const recipeWithLink = { ...props.recipe, readmore: props.readmore }; // Include the "Read More" link
//       saveRecipe(recipeWithLink); // Save the recipe with the link
//       navigate("/favourite");
//     }
//   };
  

//   return (
//     <>
//       <div className="card-box">
//         <img src={props.img} alt="food" />
//         <div className="card-details my-2">
//           <div className="card-title">{props.title}</div>
//           <div className="card-by">by {props.by}</div>
//         </div>
//         <div className="card-btns">
//           {props.readmore}
//           <a target={"_blank"} rel="noreferrer" href={props.readmore}>
//             <button className="mx-1 readmore card-btn">Read more</button>
//           </a>
//           <button className="mx-1 ingredients card-btn">Ingredients</button>
//           <button onClick={handleSaveClick} className="mx-1 save card-btn">
//             {isSaved ? 'Unsave' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // You can add logic here to add/remove the recipe from the list of favorites in your state or storage.
  };

  return (
    <div className="card-box">
      <img src={props.img} alt="food" />
      {/* ... (other card details) */}
      <div className="card-btns">
           <a target={"_blank"} rel="noreferrer" href={props.readmore}>
             <button className="mx-1 readmore card-btn">Read more</button>
           </a>
        <button className="favorite card-btn" onClick={toggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default Card;
