import "./App.css";
import Home from "./pages/Home";
import Technical from "./pages/Technical";
import ThemeSwitcher from "./components/ThemeSwitch";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ThemeSwitcher />
      </div>
    </Router>
  );
}

export default App;
