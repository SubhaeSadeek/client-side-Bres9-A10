import { useEffect, useState } from "react";
const LIMIT = 6;
const GameCardContainer = () => {
	const [reviews, setReviews] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchReviews = async () => {
		setLoading(true);

		fetch(`http://localhost:5001/limitReview?page=${page}&limit=${LIMIT}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to fetch posts");
				}
				return res.json();
			})
			.then((data) => {
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
	console.log(reviews);
	const handleMoreReviews = () => {
		if (page < totalPages) {
			setPage((prev) => prev + 1);
		}
	};
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-3	gap-4 w-11/12 mx-auto my-12 ">
				{reviews.map((review) => (
					<div className="card bg-fuchsia-300  shadow-sm" key={review._id}>
						<figure className="px-10 pt-10">
							{/* <img
								src=""
								alt={`image showing cover of ${review?.title}`}
								className="rounded-xl"
							/> */}
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">{review?.title}</h2>
							<p>rating: {review?.yearOfPublished}</p>
							<p>rating: {review?.ratingOfGame}</p>
						</div>
					</div>
				))}
			</div>

			{page < totalPages && (
				<button
					className="btn btn-accent mt-4"
					onClick={handleMoreReviews}
					disabled={loading}
				>
					{loading ? "Loading..." : "Load More"}
				</button>
			)}
		</div>
	);
};

export default GameCardContainer;
