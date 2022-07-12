import "./styles/index.css";
import Header from "./components/header/header";
import InputForm from "./components/InputForm/InputForm";
import Keyboard from "./components/Keyboard/Keyboard";
function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
      <Keyboard />
    </div>
  );
}

export default App;
