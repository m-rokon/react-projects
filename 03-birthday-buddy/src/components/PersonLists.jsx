import Person from "./Person";

const PersonLists = ({ bBuddies }) => {
	return (
		<article>
			{bBuddies.map((people) => {
				return <Person key={people.id} {...people} />;
			})}
		</article>
	);
};
export default PersonLists;
