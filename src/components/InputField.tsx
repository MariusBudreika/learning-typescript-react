import React from "react";
import styles from "./InputField.module.scss";

const InputField = () => {
  return (
    <form className={styles.input}>
      <input
        type="text"
        placeholder="Enter a task"
        className={styles.inputField}
      />
      <button className={styles.inputBtn} type="submit">
        Save
      </button>
    </form>
  );
};

export default InputField;
