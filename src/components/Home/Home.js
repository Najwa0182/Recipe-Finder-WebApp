import React from "react";
import Searchbar from "../SearchBar/Searchbar";
import Slider from "../Slider/Slider";
import CardGallery from "../../Pages/CardGallery";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Recipe Gallery</h1>
      <Slider />
      <Searchbar />
      <CardGallery />
    </div>
  );
};

export default Home;
