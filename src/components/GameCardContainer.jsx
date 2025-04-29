import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const LIMIT = 6;
const GameCardContainer = () => {
	const [reviews, setReviews] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);
	const [totalReviews, setTotalReviews] = useState(0);

	const [loading, setLoading] = useState(false);

	const fetchReviews = async () => {
		setLoading(true);

		fetch(
			`https://server-side-bres9-a10.onrender.com/limitReview?page=${page}&limit=${LIMIT}`
		)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to fetch posts");
				}
				return res.json();
			})
			.then((data) => {
				setTotalReviews(data.total);
				if (page === 1) {
					setReviews(data.reviews);
				} else {
					setReviews((prev) => [...prev, ...data.reviews]);
				}
				setTotalPages(data.totalPages);
			})
			.catch((err) => console.log("error on fetching limited reviews", err))
			.finally(() => setLoading(false));
	};
	useEffect(() => {
		fetchReviews();
	}, [page]);

	const handleMoreReviews = () => {
		if (page < totalPages) {
			setPage((prev) => prev + 1);
		}
	};

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-3	gap-4 w-11/12 mx-auto my-12 ">
				{reviews.map((review) => (
					<div className="card bg-base-300 shadow-sm" key={review._id}>
						<figure className="px-4 pt-4">
							<img
								src={review.image}
								alt={`image showing cover of ${review?.title}`}
								className="rounded-xl"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">{review?.title}</h2>
							<p>rating: {review?.yearOfPublished}</p>
							<p>rating: {review?.ratingOfGame}</p>
						</div>
						<div className="card-actions justify-center mb-4">
							<NavLink to={"/allReviews"}>
								<button className="btn btn-info">See all Reviews</button>
							</NavLink>
						</div>
					</div>
				))}
			</div>

			{page < totalPages && (
				<div className="card-actions justify-center">
					<button
						className="btn btn-accent my-4"
						onClick={handleMoreReviews}
						disabled={loading}
					>
						{loading ? "Loading..." : "Load More"}
					</button>
				</div>
			)}
			<div className="w-1/2 mx-auto flex flex-col md:flex-row justify-between md:gap-12 text-sm text-black/70 mb-4 border-t-2 border-fuchsia-200 ">
				<p>
					Showing review{" "}
					<span className="font-bold text-fuchsia-900">{reviews.length}</span>{" "}
					of {totalReviews}
				</p>
				<p>
					Currently on page{" "}
					<span className="font-black text-fuchsia-900">{page}</span> of{" "}
					{totalPages}
				</p>
			</div>
		</div>
	);
};

export default GameCardContainer;
