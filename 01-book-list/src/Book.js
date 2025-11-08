const Book = (props) => {
	const { author, title, img, numbers } = props;
	// console.log(displayBook);
	return (
		<article className="book">
			<span className="number">#{numbers + 1}</span>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

export default Book;
