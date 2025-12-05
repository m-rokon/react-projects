const Person = ({ name, image, age }) => {
	return (
		<div className="person">
			<div>
				<img className="img" src={image} alt={name} />
			</div>
			<div>
				<h4>{name}</h4>
				<p>{age} years</p>
			</div>
		</div>
	);
};
export default Person;
