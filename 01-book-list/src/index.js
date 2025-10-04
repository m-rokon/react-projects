import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Booklist = () => {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
		</section>
	);
};

const Book = () => {
	return (
		<article className="book">
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => {
	return (
		<img
			src="https://m.media-amazon.com/images/I/91ZVf3kNrcL._SY466_.jpg"
			alt="The Let Them Theory"
		/>
	);
};

const Title = () => {
	return (
		<h2>
			The Let Them Theory: A Life-Changing Tool That Millions of People Can't
			Stop Talking About
		</h2>
	);
};

const Author = () => {
	return <h4>Mel Robbins</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
