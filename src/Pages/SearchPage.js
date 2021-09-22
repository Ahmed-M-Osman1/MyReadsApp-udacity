import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";
import "../App.css";

class Search extends React.Component {
  state = {
    query: "",
    searchForTheBook: [],
    books: [],
  };
//pass the books from API. this is step is essentially as i will compare the books and the searched one.
  componentDidMount() {
    let component = this;
    BooksAPI.getAll().then((books) => {
      component.setState({ books: books });
    });
  }
// to update my query
  updateQuery = (query) => {
    this.setState({
      query: query,
    });
    this.searchForTheBookInAPI(query);
  };
  /* I copied this function from homepage so i can pass the book to new shelfs*/
  changeTheShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf);
  };
// the searching function
  searchForTheBookInAPI = (query) => {
    if (query) {
      let component = this;
      BooksAPI.search(query).then((searchForTheBook) => {
        {
          /* Some time there is errors especially if the query did not match any book
      using if function to cover the error so if error happened it will pass empty array*/
        }
        if (searchForTheBook.error) {
          component.setState({ searchForTheBook: [] });
        } else {
          let results = searchForTheBook.map((searchForTheBook) => {
            component.state.books.map((book) =>
              book.id === searchForTheBook.id
                ? (searchForTheBook.shelf = book.shelf)
                : ""
            );
            return searchForTheBook;
          });
          component.setState({ searchForTheBook: results });
        }
      });
    } else {
      this.setState({ searchForTheBook: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        {this.state.books && (
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(e) => this.updateQuery(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchForTheBook.map((searchForTheBook) => (
              <li key={this.state.searchForTheBook.id}>
                {/*I name the state here book to be identical with the shelfs from home page so the book can receive the same information and no need to change the props name*/}
                <Book
                  book={searchForTheBook}
                  changeTheShelf={this.changeTheShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
