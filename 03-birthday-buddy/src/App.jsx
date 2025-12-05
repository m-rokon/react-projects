import { useState } from "react";
import data from "./data";

const App = () => {
	const [birthdayBuddy, setBirthdayBuddy] = useState(data);

	const handleClearAll = () => {
		setBirthdayBuddy([]);
	};

	return (
		<main>
			<section className="container">
				<h3>
					{birthdayBuddy.length ? birthdayBuddy.length : "No"} Birthdays Today
				</h3>
				{birthdayBuddy.map((people) => {
					const { id, name, age, image } = people;
					return (
						<article key={id} className="person">
							<div>
								<img className="img" src={image} alt={name} />
							</div>
							<div>
								<h4>{name}</h4>
								<p>{age}</p>
							</div>
						</article>
					);
				})}
				<button
					className="btn btn-block"
					type="button"
					onClick={handleClearAll}
				>
					Clear all
				</button>
			</section>
		</main>
	);
};
export default App;
