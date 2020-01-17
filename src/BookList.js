import React, { Component } from 'react'
import Book from './Book';
import { thisExpression } from '@babel/types';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addBook = this.addBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.getKenFolletBooks = this.getKenFolletBooks.bind(this);
    }

    // The URL I was looking to fetch was incorrect
    getKenFolletBooks = () => {

        const currentBookList = this.state.bookList

        fetch(`${process.env.PUBLIC_URL}/..public/BookList.JSON`)
            .then(r => r.json())
            .then(data => this.setState({
                bookList: [...currentBookList, ...data]
            }))
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    addBook = (event) => {
        event.preventDefault();

        const currentBookList = this.state.bookList
        const newBook = this.state.value

        this.setState({
            bookList: [...currentBookList, newBook],
        })
    }

    deleteBook = (event) => {
        const bookIndex = parseInt(event.target.parentNode.id.slice(-1));
        // console.log(bookIndex)
        const newBooks = this.state.bookList.filter((book, index) => index !== bookIndex)
        this.setState({
            bookList: [...newBooks]
        })
    }

    render() {

        // I mispelled bookList as booklist and did not catch my error unti 11:11
        const showBooks = this.state.bookList.map((book, index) => <Book book={book} id={book + '-' + index} key={index} deleteBook={this.deleteBook} />)
        // console.log(this.state)
        return (
            <div className="bookListMain">
                <div className="header">
                    <form onSubmit={(e) => { this.addBook(e) }}>
                        <input placeholder="Book" type='text' value={this.state.value} onChange={this.handleChange} />
                        <button>
                            Add Book
                    </button>
                        <button onClick={this.getKenFolletBooks}> Get Top 10 Books by Ken Follet</button>
                    </form>
                </div>
                <ol>
                    {showBooks}
                </ol>
            </div>
        )
    }
}
export default BookList