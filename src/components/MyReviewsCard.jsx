import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewsCard = ({ myReview, myReviews, setMyReviews }) => {
	const { title, image, yearOfPublished, ratingOfGame, genre, _id } = myReview;
	const handleMyReviewDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete review!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://server-side-bres9-a10.onrender.com/myReview/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount) {
							Swal.fire({
								title: "Deleted!",
								text: "Your Review has been deleted.",
								icon: "success",
							});
							const remainingMyReviews = myReviews.filter(
								(rev) => rev._id != id
							);
							setMyReviews(remainingMyReviews);
						}
					});
			}
		});
	};

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
				<NavLink to={`/updateReview/${_id}`}>
					<button className="btn btn-info">Update</button>
				</NavLink>
				<button
					onClick={() => handleMyReviewDelete(_id)}
					className="btn btn-error"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default MyReviewsCard;
