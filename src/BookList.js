import React, { Component } from 'react'
import Book from './Book';
import { thisExpression } from '@babel/types';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: ["Test Book Title"],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addBook = this.addBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    // The URL I was looking to fetch was incorrect
    // componentDidMount() {
    //     fetch(`${process.env.PUBLIC_URL}/..public/BookList.JSON`)
    //         .then(r => r.json())
    //         .then(data => this.setState({
    //             bookList: [...data]
    //         }))
    // }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    addBook = (event) => {
        event.preventDefault();

        const currentBookList = this.state.bookList
        const newBook = this.state.value

        console.log(newBook)

        this.setState({
            bookList: [...currentBookList, newBook],
        })
    }

    deleteBook = (event) => {
        console.log(event)
    }

    render() {

        // I mispelled bookList as booklist and did not catch my error unti 11:11
        const showBooks = this.state.bookList.map((book, index) => <Book book={book} key={index} deleteBook={this.deleteBook} />)
        console.log(this.state)
        return (
            <div className="bookListMain">
                <div className="header">
                    <form onSubmit={(e) => { this.addBook(e) }}>
                        <input placeholder="Book" type='text' value={this.state.value} onChange={this.handleChange} />
                        <button>
                            Add Book
                    </button>
                        <button> Get Top 10 Books by Ken Follet</button>
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