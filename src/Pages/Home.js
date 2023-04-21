import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import API from "../Utils";
import styles from "../Styles/home.module.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const url =
      API.ROOT_URL +
      input +
      "&app_id=" +
      API.APP_ID +
      "&app_key=" +
      API.APP_KEY;
    const headers = {
      Allow: "application/json",
      "Accept-Language": "en"
    };

    async function apiCall(url, header) {
      try {
        if (input) {
          const response = await fetch(url, header);
          const data = await response.json();
          // console.log(data);

          setRecipe(data.hits);
        }
      } catch (err) {
        console.error(err);
      }
    }

    apiCall(url, headers);
  }, [input]);

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        className={styles.search}
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className={styles.list}>
        <Card card={recipe} />
      </div>
    </div>
  );
};

export default Home;
