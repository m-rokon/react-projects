import { useState } from "react";
import data from "./data";
import PersonLists from "./components/PersonLists";

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
				<PersonLists bBuddies={birthdayBuddy} />
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
