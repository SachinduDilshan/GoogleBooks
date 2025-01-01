# Google Books Search Application

A simple web application built with React, CSS, and the Google Books API that allows users to search for books, view details, and explore related information.

## Features

- Search for books by title, author, or other keywords.
- Display a list of books with title, authors, and a link to more details.
- Modern and responsive design.
- Utilizes the Google Books API to fetch book data.

## Technologies Used

- React.js
- Bootstrap 4
- Axios (for HTTP requests)
- Google Books API
- CSS for custom styling

## Setup & Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/google-books-search.git
   cd google-books-search
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This will start the app at [http://localhost:3000](http://localhost:3000).

## How to Use

1. Enter a search term (book title, author, etc.) in the search bar.
2. Click the "Search" button to retrieve a list of books from the Google Books API.
3. The list will show book titles, authors, and a button to view more details about each book.

## Folder Structure

```
/src
  /components
    BookList.js        # Displays the list of books
  App.js               # Main app component
  Header.js            # Header component
  Footer.js            # Footer component
  reportWebVitals.js   # Web vitals for performance monitoring
  index.js             # Entry point for React
  custom.css           # Custom styles
```
