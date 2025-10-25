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

const Booklist = () => {
	return (
		<section className="booklist">
			{books.map((book) => {
				const { author, title, img, id } = book;
				return <Book title={title} img={img} author={author} key={id} />;
			})}
		</section>
	);
};

// destructuring props

const Book = (props) => {
	const { author, title, img } = props;
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
