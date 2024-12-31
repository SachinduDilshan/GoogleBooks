import React, { useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components/styles/custom.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBVye2uyBpdY7ZmhlENRVRkYM8-d-hUYUE`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="app-container">
      <Header />

      <main className="container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for your favorite books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <BookList books={books} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
