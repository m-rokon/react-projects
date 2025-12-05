import { useState } from "react";
import data from "./data";

const App = () => {
	const [birthdayBuddy, setBirthdayBuddy] = useState(data);
	return (
		<section>
			<article>
				{birthdayBuddy.map((people) => {
					const { id, name, age, image } = people;
					return (
						<div key={id}>
							<div>
								<img src={image} alt={name} />
							</div>
							<div>
								<h4>{name}</h4>
								<p>{age}</p>
							</div>
						</div>
					);
				})}
			</article>
		</section>
	);
};
export default App;
