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
	const title =
		"The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About";
	const author = "Mel Robbins";
	return (
		<article className="book">
			<img
				src="https://m.media-amazon.com/images/I/91ZVf3kNrcL._SY466_.jpg"
				alt="The Let Them Theory"
			/>
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
