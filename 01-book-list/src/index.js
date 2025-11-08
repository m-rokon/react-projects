import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

// ES6 - Modules (React components)
// Numbers challenge

const Booklist = () => {
	return (
		<section className="booklist">
			{books.map((book, index) => {
				return <Book {...book} key={book.id} numbers={index} />;
			})}
		</section>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
