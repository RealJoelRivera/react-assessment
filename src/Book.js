import React, { Component } from 'react';

class Book extends Component {



  render() {
    return (
      <li id={this.props.id} >
        {this.props.book}
        <button onClick={e => this.props.deleteBook(e)}>Delete Book</button>
      </li>
    );
  }

}


export default Book