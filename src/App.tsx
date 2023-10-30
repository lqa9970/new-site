import "./App.css";
import Home from "./pages/Home";
import Technical from "./pages/Technical";
import ThemeSwitcher from "./components/ThemeSwitch";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Technical />} />
        </Routes>
        <ThemeSwitcher />
      </div>
    </Router>
  );
}

export default App;
