import React, { useState, useCallback, useContext } from "react";
import { ThemeContext } from "../App";
import styles from './IngredientForm.module.css';


const IngredientForm = ({ addIngredient }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const id = React.useId();
  const { isDarkTheme } = useContext(ThemeContext);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (name && quantity && cost) {
        addIngredient({ name, quantity: parseInt(quantity), cost: parseFloat(cost) });
        setName("");
        setQuantity("");
        setCost("");
      }
    },
    [name, quantity, cost, addIngredient]
  );

  return(
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Ingredient Name</label>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Quantity</label>
        <input
          className={styles.input}
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Cost</label>
        <input
          className={styles.input}
          type="number"
          step="0.01"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
        />
      </div>
      <button className={styles.button} type="submit">
        Add Ingredient
      </button>
    </form>
  );
};
export default IngredientForm;
