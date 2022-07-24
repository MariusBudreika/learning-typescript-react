import styles from "./App.module.scss";
import InputField from "./components/InputField";

const App: React.FC = () => {
  return (
    <>
      <h1 className={styles.label}>Todo list</h1>
      <InputField />
    </>
  );
};

export default App;
