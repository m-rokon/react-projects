import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// somewhat dynamic props
const firstBook = {
	title:
		"The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About",
	author: "Mel Robbins",
	img: "./images/book-1.jpg",
};
const secondBook = {
	title: "How to Test Negative for Stupid: And Why Washington Never Will",
	author: "John Kennedy",
	img: "https://m.media-amazon.com/images/I/71tbImx2YVL._SY342_.jpg",
};

const Booklist = () => {
	return (
		<section className="booklist">
			<Book
				title={firstBook.title}
				author={firstBook.author}
				img={firstBook.img}
			/>
			<Book
				title={secondBook.title}
				author={secondBook.author}
				img={secondBook.img}
			/>
		</section>
	);
};

// destructuring props

const Book = ({ author, title, img }) => {
	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
