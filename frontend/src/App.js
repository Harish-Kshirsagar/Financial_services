import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import ResisterPage from "./components/Login/ResisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<ResisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
