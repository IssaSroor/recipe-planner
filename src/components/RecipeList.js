import React, { useMemo } from "react";
import styles from './RecipeList.module.css';

const RecipeList = ({ ingredients, dispatch }) => {
  const totalCost = useMemo(
    () => ingredients.reduce((sum, ingredient) => sum + ingredient.cost * ingredient.quantity, 0),
    [ingredients]
  );

  const removeIngredient = (index) => {
    dispatch({ type: "REMOVE", payload: index });
  };

  return (
    <div className={styles.recipeList}>
      <h2>Recipe List</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={styles.listItem}>
            {ingredient.name} - {ingredient.quantity} x ${ingredient.cost.toFixed(2)}
            <button
              className={styles.removeButton}
              onClick={() => removeIngredient(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className={styles.totalCost}>Total Cost: ${totalCost.toFixed(2)}</p>
    </div>
  );
};

export default RecipeList;
