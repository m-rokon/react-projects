import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const title =
	"The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About";
const author = "Mel Robbins";
const img = "./images/book-1.jpg";

const Booklist = () => {
	return (
		<section className="booklist">
			<Book title={title} author={author} img={img} />
			<Book title={title} author={author} img={img} />
		</section>
	);
};

const Book = (props) => {
	return (
		<article className="book">
			<img src={props.img} alt={props.title} />
			<h2>{props.title}</h2>
			<h4>{props.author}</h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
