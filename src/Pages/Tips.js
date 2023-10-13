// import React from "react";
// import "./Tips.css";

// const Tips = () => {
//   return (
//     <div>
// //       <h2>Tips</h2>
// //       {/* Add your tips content here */}
// //       <button class="accordion">Section 1</button>
// //         <div class="panel">
// //             <p>Lorem ipsum...</p>
// //         </div>

// //         <button class="accordion">Section 2</button>
// //         <div class="panel">
// //             <p>Lorem ipsum...</p>
// //         </div>

// //         <button class="accordion">Section 3</button>
// //         <div class="panel">
// //             <p>Lorem ipsum...</p>
// //         </div>
// //     </div>
// //     );
// // };

// // export default Tips;

import React, { useState } from "react";
import "./Tips.css";

const Tips = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleAccordion = (sectionIndex) => {
    if (sectionIndex === activeSection) {
      // Clicked on the currently active section, close it
      setActiveSection(null);
    } else {
      // Clicked on a different section, open it
      setActiveSection(sectionIndex);
    }
  };

  return (
    <div>
      <h2>Quick Tips and Tricks</h2>

      <button
        className={`accordion ${activeSection === 1 ? "active" : ""}`}
        onClick={() => toggleAccordion(1)}
      >
        Nutrition Tips
      </button>
      <div className={`panel ${activeSection === 1 ? "show" : ""}`}>
        <p>
        If you want to boost your health and wellbeing, there are plenty of natural and home remedies to choose from, 
        ranging from avoiding charred meats and added sugars to practicing meditation. Here are health and nutrition tips 
        that are based on scientific evidence: 
        </p>
        <p>
            <li>
                Limit sugary drinks
            </li>
            <li>
                Eat nuts and seeds
            </li>
            <li>
                Stay hydrated
            </li>
            <li>
                Avoid ultra-processed food
            </li>
            <li>
                Eat fatty fish
            </li>
        </p>

      </div>

      <button
        className={`accordion ${activeSection === 2 ? "active" : ""}`}
        onClick={() => toggleAccordion(2)}
      >
        Meal Planning
      </button>
      <div className={`panel ${activeSection === 2 ? "show" : ""}`}>
        <p>
        Meal planning and prepping are wonderful skills to have in your personal health and wellness tool kit.
        A well-thought-out meal plan can help you improve your diet quality or reach a specific health goal while saving you time 
        and money along the way. Here are the simple tips for developing a successful meal planning habit: 
        </p>
        <p>
            <hr></hr>
            <b>1. Start small</b>
            <p><img src="https://images.freeimages.com/images/large-previews/fdc/fresh-vegetables-fruits-and-other-foodstuffs-sho-1321844.jpg" 
            alt='smalleat' width="150" height="120"></img></p>
            <p>Begin by planning out just a few meals or snacks for the week ahead. Eventually, 
            you’ll figure out which planning strategies work best, and you can slowly build upon your plan by adding in more meals as you see fit.</p>
        </p>
        <p>
            <hr></hr>
            <b>2. Keep a well-stocked pantry</b>
            <p>Here are a few examples of healthy and versatile foods to keep in your pantry:</p>
            <li>
                Whole Grains: brown rice, quinoa, oats, bulgur, whole-wheat pasta, polenta
                <p>
                    <img src="https://media.istockphoto.com/id/835833518/photo/wholegrain-food-still-life-shot-on-rustic-wooden-table.jpg?s=2048x2048&w=is&k=20&c=S6InBcXdQNvNpY4PL2Huj2GrxC_stFB1kVlHhnDGfzM="
                    alt="grains" width="150" height="120"></img>
                </p>
                <p></p>
            </li>
            <li>
                Oils: olive, avocado, coconut
                <p>
                    <img src="https://media.istockphoto.com/id/1206682746/photo/pouring-extra-virgin-olive-oil-in-a-glass-bowl.jpg?s=2048x2048&w=is&k=20&c=yNArv_lhATv4eJ8fQx-MYNUuXA7qjkb-WYSC4vkmEGI="
                    alt="oil" width="150" height="120"></img>
                </p>
            <hr></hr>
            </li>
        </p>
      </div>

      <button
        className={`accordion ${activeSection === 3 ? "active" : ""}`}
        onClick={() => toggleAccordion(3)}
      >
        Eating Style
      </button>
      <div className={`panel ${activeSection === 3 ? "show" : ""}`}>
        <p>
            <p>There are various eating styles and dietary approaches that people follow for different health and lifestyle reasons. 
                Here are some examples of popular eating styles:</p>
            <ol>
                <li>
                    <b>Mediterranean Diet</b>
                    <p>
                        <img class="image" src="https://media.istockphoto.com/id/1407144829/photo/grilled-salmon-fish-fillet-and-fresh-tomato-vegetable-salad-with-lettuce-arugula-broccoli-and.webp?b=1&s=612x612&w=0&k=20&c=i_r4Ae95W39CzH9so7FwQRjLmprKwH72MP_OwCLLSvo="
                    alt="oil" width="380" height="320"></img>

                    This diet is inspired by the traditional dietary patterns of countries bordering the Mediterranean Sea. It emphasizes fruits, 
                    vegetables, whole grains, lean proteins (especially fish), and healthy fats like olive oil. It's known for its potential 
                    heart-healthy benefits.
                    </p>
                </li>
                <li>
                    <b>Vegetarian Diet</b>
                    <p>
                        <img class="image" src="https://media.istockphoto.com/id/1631099364/photo/autumnal-plum-and-spinach-salad-with-toasted-walnuts-honey-and-mint-leaves-top-view-black.webp?b=1&s=612x612&w=0&k=20&c=ZkdlhF5YiA3Nfwy9ZMnFOX9kvAFrnduTl35W-_KTxBw="
                        alt="oil" width="380" height="350"></img>
                    
                        Vegetarians exclude meat but may include dairy products and eggs. There are different types of vegetarians, such as lacto-vegetarians (dairy allowed) and ovo-vegetarians (eggs allowed). 
                        Some follow a vegan diet, which excludes all animal products.
                        https://github.com/imhardikdesai/Recipe-Finder-WebApp
                    </p>
                </li>
            </ol>
        </p>
      </div>
    </div>
  );
};

export default Tips;
