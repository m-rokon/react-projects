import React from "react";
import ReactDOM from "react-dom/client";

const Booklist = () => {
	return (
		<section>
			<Book />
			<Book />
			<Book />
		</section>
	);
};

const Book = () => {
	return (
		<article>
			<Image />
			<Title />
			<Description />
		</article>
	);
};

const Image = () => {
	return <h2>this will replaced by image container</h2>;
};

const Title = () => {
	return <h2>Book title</h2>;
};

const Description = () => {
	return (
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eveniet?
		</p>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
