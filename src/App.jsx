import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;