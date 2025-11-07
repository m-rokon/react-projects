import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// proper list

const books = [
	{
		title:
			"The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About",
		author: "Mel Robbins",
		img: "./images/book-1.jpg",
		id: 1,
	},
	{
		title: "How to Test Negative for Stupid: And Why Washington Never Will",
		author: "John Kennedy",
		img: "https://m.media-amazon.com/images/I/71tbImx2YVL._SY342_.jpg",
		id: 2,
	},
];

// prop drilling

const Booklist = () => {
	const getBook = (id) => {
		const book = books.find((book) => book.id === id);
		console.log(book);
	};
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book {...book} key={book.id} displayBook={getBook} />;
			})}
		</section>
	);
};

// destructuring props

const Book = (props) => {
	const { author, title, img, id, displayBook } = props;
	// console.log(displayBook);
	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			<button className="btn" onClick={() => displayBook(id)}>
				click me
			</button>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
