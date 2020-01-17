import React, { Component } from 'react';

class Book extends Component {



  render() {
    console.log(this.props)
    return (
      <li id={this.props.book.key}>
        {this.props.book}
        <button onClick={e => this.props.deleteBook(e)}>Delete Book</button>
      </li>
    );
  }

}


export default Book