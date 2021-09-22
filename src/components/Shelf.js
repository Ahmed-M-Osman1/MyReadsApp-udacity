import React from "react";
import Book from "../components/Book";
import "../App.css";

class Shelf extends React.Component {
  shelfBooks() {
    return this.props.books.map((book) => {
      return (
        <li key={this.props.books.id}>
          {/*I name the state here book to be identical with the search page state so the book can receive the same information and no need to change the props name*/}
          <Book
            book={book}
            changeTheShelf={this.props.changeTheShelf}
          />
        </li>
      );
    });
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{this.shelfBooks()}</ol>
        </div>
      </div>
    );
  }
}
export default Shelf;
