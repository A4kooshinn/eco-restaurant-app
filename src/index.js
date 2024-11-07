import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const RecipeData = [
  {
    name: "Somali diet",
    ingredients: "Salmon with Broccoli, Carrot, and Rice.",
    price: 20 + "$",
    photoName: "images/Rice.jpg",
    soldOut: false,
  },
  {
    name: "Grilled Chicken ",
    ingredients:
      "grilled chicken, fresh greens, avocado, and hard-boiled eggs.",
    price: 15 + "$",
    photoName: "images/grilled.jpg",
    soldOut: true,
  },
  {
    name: "Makarooni bowl",
    ingredients: "Makaroni,Boiled-egg,avocado,salads,carrots",
    price: 15 + "$",
    photoName: "images/makaroni.jpg",
    soldOut: false,
  },
  {
    name: "Avocado Keto Bowl",
    ingredients:
      "Chicken Slices,Avocado,Hard-Boiled Eggs,Grape Tomatoes,Spinach ",
    price: 15 + "$",
    photoName: "images/solomon.jpg",
    soldOut: false,
  },
  {
    name: "Rainbow Salad Bowl",
    ingredients:
      "Grilled Chicken Pieces,Avocado,Hard-Boiled Eggs,Chioggia Beets,Leafy Greens ",
    price: 12 + "$",
    photoName: "images/onions.jpg",
    soldOut: false,
  },
  {
    name: "Grilled Chicken Plate ",
    ingredients:
      "Grilled chicken breast seasoned with herbs,Creamy mashed potatoes,carrots",
    price: 15 + "$",
    photoName: "images/potato.jpg",
    soldOut: false,
  },
  {
    name: "Avocado Chickpea Salad",
    ingredients:
      "avocado,Cherry tomatoes,Boiled eggs,Shredded chicken breast and Fresh lettuce leaves",
    price: 15 + "$",
    photoName: "images/eggs.jpg",
    soldOut: true,
  },
  {
    name: " Shrimp bowl",
    ingredients: "Cooked shrimp,Sliced avocado,Chopped and Shredded lettuce",
    price: 15 + "$",
    photoName: "images/shrimp.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="./logo.png" alt="logo" className="logo" />
      <h3>Eco Organic Foods</h3>
    </div>
  );
}
function Menu() {
  const recip = RecipeData;
  // const recip = [];
  const numrecipe = recip.length;
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      {numrecipe > 0 ? (
        <>
          <p className="para">
            Authentic diet high protien and fats. All organic and all delicious.{" "}
          </p>
          <ul className="recippe">
            {RecipeData.map((rec) => (
              <Recip reci={rec} key={rec.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. please come back later :)</p>
      )}
    </main>
  );
}
function Recip({ reci }) {
  return (
    <li className={`recip ${reci.soldOut ? "sold-out" : ""}`}>
      <img className="menuPic" src={reci.photoName} alt={reci.name} />
      <div className="reciSize">
        <h2>{reci.name}</h2>
        <p>{reci.ingredients}</p>
        <span>{reci.soldOut ? "SOLD OUT" : reci.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )}
      </footer>
    </div>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        we're currently open from {openHour}:00 until {closeHour}:00 come visit
        us or Order us online.
      </p>
      <button className="btn">order Now</button>
    </div>
  );
}

const react = ReactDom.createRoot(document.getElementById("root"));
react.render(
  <StrictMode>
    <App />
  </StrictMode>
);
