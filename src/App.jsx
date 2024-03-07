import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./Pages/Category/Category";
import Publisher from "./Pages/Publisher/Publisher";
import Navbar from "./Components/Navbar";
import Author from "./Pages/Author/Author";
import Book from "./Pages/Book/Book";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/category" element={<Category />} />
        <Route path="/author" element={<Author />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
