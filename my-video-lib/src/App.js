import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { Container } from "./Components/Container";


function App() {
  return (
    <div className="App">
         <Header />
         <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </div>
  );
}

export default App;
