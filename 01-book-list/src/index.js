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
			<ExampleEvent />
			{books.map((book) => {
				return <Book {...book} key={book.id} />;
			})}
		</section>
	);
};

// basic events

const handleFormInput = (e) => {
	// console.log(e);
	console.log(e.target.name);
};

const handleFormSubmission = () => {
	console.log("form submitted.");
};
const handleButtonClick = (e) => {
	e.preventDefault();
	console.log("form button clicked");
};

const ExampleEvent = () => {
	return (
		<section>
			<form onSubmit={handleFormSubmission}>
				<h2>Typical form</h2>
				<input
					type="text"
					name="example"
					style={{ margin: "1rem 0", display: "block" }}
					onChange={handleFormInput}
				/>
				<button onClick={handleButtonClick}>Click me</button>
			</form>
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
