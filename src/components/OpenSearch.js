import React from 'react'
import {Link} from 'react-router-dom'

class OpenSearch extends React.Component {
    // the + sign to add books from API.
    render() {
        return (
            <div className="open-search">
              <Link to='/search'>
                  <button >Add a book</button>
              </Link>
            </div>
        )}}

    export default OpenSearch