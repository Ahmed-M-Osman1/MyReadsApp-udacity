import React, { useState, useEffect, setState } from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Pages/HomePage";
import { getAll } from "./BooksAPI";

class BooksApp extends React.Component {
// in this state the Books will be holed to display later
  state = {
    books: [],
  };
//function to change the shelfs using update bookAPI
  changeTheShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf);
  };
// here I mount all the book to the state
  componentDidMount() {
    let component = this;
    getAll().then((books) => {
      component.setState({ books: books });
    });
  }
// I use switch here for Route both pages ('/' and '/search')
  render() {
    return (
      <div className='list-books-title'>
        <Switch>
          <Route
            myBooks={this.state.books}
            exact
            path={"/"}
            component={HomePage}
          />
          <Route
            exact
            path={"/Search"}
            component={SearchPage}
            books={this.state.books}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
