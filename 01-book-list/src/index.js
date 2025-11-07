import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

// ES6 - Modules (React components)

const Booklist = () => {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book {...book} key={book.id} />;
			})}
		</section>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
