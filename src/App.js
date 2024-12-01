import React, { createContext, useState, useReducer } from "react";
import IngredientForm from "./components/IngredientForm";
import RecipeList from "./components/RecipeList";
import Timer from "./components/Timer";

export const ThemeContext = createContext();

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);


  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const addIngredient = (ingredient) => {
    dispatch({ type: "ADD", payload: ingredient });
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div style={{ background: isDarkTheme ? "#333" : "#fff", color: isDarkTheme ? "#fff" : "#000", minHeight: "100vh" }}>
        <button onClick={toggleTheme}>
          {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
        </button>
        <h1>Recipe Planner</h1>
        <IngredientForm addIngredient={addIngredient} />
        <RecipeList ingredients={ingredients} dispatch={dispatch} />
        <Timer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
