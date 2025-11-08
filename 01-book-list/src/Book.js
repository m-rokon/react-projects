const Book = (props) => {
	const { author, title, img, numbers } = props;
	// console.log(displayBook);
	return (
		<article style={{ position: "relative" }} className="book">
			<span
				style={{
					position: "absolute",
					top: "0px",
					left: "0px",
					background: "#ff4000ff",
					color: "#fff",
					padding: "0.2rem 1rem",
				}}
			>
				#{numbers + 1}
			</span>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

export default Book;
