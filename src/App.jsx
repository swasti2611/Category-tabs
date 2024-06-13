import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import "./App.css"; // Make sure this path matches the location of your CSS file

function App() {
  const [menCategory, setMenCategory] = useState([]);
  const [womenCategory, setWomenCategory] = useState([]);
  const [kidsCategory, setKidsCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("men");

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(
        "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
      );
      let apiData = await response.json();
      let men = apiData.categories.find((item) => item.category_name === "Men");
      let women = apiData.categories.find(
        (item) => item.category_name === "Women"
      );
      let kids = apiData.categories.find(
        (item) => item.category_name === "Kids"
      );

      setMenCategory(men ? men.category_products : []);
      setWomenCategory(women ? women.category_products : []);
      setKidsCategory(kids ? kids.category_products : []);
    };
    getData();
  }, []);

  return (
    <>
      <div className="tabContainer">
        <button
          className={activeCategory === "men" ? "activeTab" : "tab"}
          onClick={() => setActiveCategory("men")}
        >
          Men
        </button>
        <button
          className={activeCategory === "women" ? "activeTab" : "tab"}
          onClick={() => setActiveCategory("women")}
        >
          Women
        </button>
        <button
          className={activeCategory === "kids" ? "activeTab" : "tab"}
          onClick={() => setActiveCategory("kids")}
        >
          Kids
        </button>
      </div>
      <div className="productContainer">
        {activeCategory === "men" &&
          menCategory.map((item) => (
            <Products
              key={item.id}
              image={item.image}
              price={item.price}
              compare_at_price={item.compare_at_price}
              title={item.title}
              vendor={item.vendor}
              badge_text={item.badge_text}
            />
          ))}
        {activeCategory === "women" &&
          womenCategory.map((item) => (
            <Products
              key={item.id}
              image={item.image}
              price={item.price}
              compare_at_price={item.compare_at_price}
              title={item.title}
              vendor={item.vendor}
              badge_text={item.badge_text}
            />
          ))}
        {activeCategory === "kids" &&
          kidsCategory.map((item) => (
            <Products
              key={item.id}
              image={item.image}
              price={item.price}
              compare_at_price={item.compare_at_price}
              title={item.title}
              vendor={item.vendor}
              badge_text={item.badge_text}
            />
          ))}
      </div>
    </>
  );
}

export default App;
