import React, { useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:");
    }
  };

  return (
    <div>

      <Header />

      <div className="container mt-4">
        <h1 className="text-center mb-4">Google Books Search</h1>
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
        <BookList books={books} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
