import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./Pages/Category/Category";
import Publisher from "./Pages/Publisher/Publisher";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
