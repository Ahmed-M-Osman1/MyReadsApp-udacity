{this.state.searchForTheBook.map((searchForTheBook) => {
                this.props.books.map(book=> (
                  book.id === searchForTheBook.id ?
                  searchForTheBook.shelf = book.shelf : searchForTheBook.shelf ='none'))})}