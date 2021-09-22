import React from "react";
import * as BooksAPI from "../BooksAPI";
import OpenSearch from "../components/OpenSearch";
import Shelf from "../components/Shelf";
import { getAll } from "../BooksAPI";
import "../App.css";

// this.props.books.filter(book=> book.shelf === 'read').map(book => (<li kay={book.id}> <Book/></li>)

class HomePage extends React.Component {
  //state linked to the App state. Its the same. 
  state = {
    books: this.props.myBooks,
  };
//this to force the page to refresh after i change the shelf.
  getAllBooks() {
    let component = this;
    getAll().then((books) => {
      component.setState({ books: books });
    });
  }

  changeTheShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((book) => {
      this.getAllBooks();
    });
  };

  componentDidMount() {
    this.getAllBooks();
  }
// in the render i pass the state the shelfs as well as filtering book to put it in the exact shelf.
  render() {
    return (
      <div className='list-books-title' kay>
        <h1>MyReads</h1>
        <OpenSearch />
        {this.state.books && (
          <div kay={this.state.books.id}>
            <Shelf
              title="Currently Reading"
              changeTheShelf={this.changeTheShelf}
              kay={this.state.books.id}
              books={this.state.books.filter(
                (book) => book.shelf === "currentlyReading"
              )}
            />
            <Shelf
              title="Want to Read"
              changeTheShelf={this.changeTheShelf}
              kay={this.state.books.id}
              books={this.state.books.filter(
                (book) => book.shelf === "wantToRead"
              )}
            />
            <Shelf
              title="Read"
              changeTheShelf={this.changeTheShelf}
              kay={this.state.books.id}
              books={this.state.books.filter((book) => book.shelf === "read")}
            />
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
