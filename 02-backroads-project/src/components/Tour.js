import { tours } from "../data";

const Tour = ({ img, date, title, text, icon, country, tripTime, price }) => {
	return (
		<article className="tour-card">
			<div className="tour-img-container">
				<img src={img} className="tour-img" alt={title} />
				<p className="tour-date">{date}</p>
			</div>
			<div className="tour-info">
				<div className="tour-title">
					<h4>{title}</h4>
				</div>
				<p>{text}</p>
				<div className="tour-footer">
					<p>
						<span>
							<i className={icon}></i>
						</span>{" "}
						{country}
					</p>
					<p>{tripTime}</p>
					<p>{price}</p>
				</div>
			</div>
		</article>
	);
};
export default Tour;
