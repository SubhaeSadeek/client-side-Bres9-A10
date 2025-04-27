import { NavLink } from "react-router-dom";

const MyReviewsCard = ({ myReview }) => {
	const { title, image, yearOfPublished, ratingOfGame, genre, _id } = myReview;

	return (
		<div className="card bg-base-300 shadow-sm">
			<figure className="px-4 pt-4">
				<img
					src={image}
					alt={`image showing cover of ${title}`}
					className="rounded-xl"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className="font-bold text-black/65">
					<span className="text-cyan-600">Published year: </span>{" "}
					{yearOfPublished}
				</p>
				<p className="font-bold text-black/65">
					<span className="text-cyan-600">rating:</span> {ratingOfGame}
				</p>
				<p className="font-bold text-black/65">
					<span className="text-cyan-600">Genre:</span> {genre}
				</p>
			</div>
			<div className="card-actions justify-center mb-4">
				<NavLink to={"/"}>
					<button className="btn btn-info">Detail Review Here</button>
				</NavLink>
			</div>
		</div>
	);
};

export default MyReviewsCard;
