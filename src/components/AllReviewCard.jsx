import { NavLink } from "react-router-dom";

const AllReviewCard = ({ review }) => {
	const { title, image, yearOfPublished, ratingOfGame, genre, _id } = review;

	return (
		<div className="card card-side justify-around w-5/6 mx-auto bg-accent-content/20 shadow-sm mb-4 md:pl-12 ">
			<figure>
				<img
					className="max-w-sm  h-40 rounded-2xl"
					src={image}
					alt={`Cover Image of video Game ${title}`}
				/>
			</figure>
			<div className="card-body">
				<h1 className="text-xl font-bold">{title}</h1>
				<p className="">Genre: {genre} </p>
				<p className="">Publishing Year: {yearOfPublished}</p>
				<p className="">Rating: {ratingOfGame}</p>
				<NavLink to={`/details/${_id}`}>
					<button className="btn btn-accent">Explore Detail</button>
				</NavLink>
			</div>
		</div>
	);
};

export default AllReviewCard;
