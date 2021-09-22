import React from "react";
import "../App.css";

class Book extends React.Component {
  render() {
    // function to thumbnailImage to load and handling error.
    let thumbnailImage = this.props.book.imageLinks
      ? this.props.book.imageLinks.thumbnail
      : "";
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnailImage})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(e) =>
                this.props.changeTheShelf(this.props.book, e.target.value)
              }
              value={this.props.book.shelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
