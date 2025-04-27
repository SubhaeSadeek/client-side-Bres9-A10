import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/AllReviewCard";

const AllReviews = () => {
	const allReviews = useLoaderData();
	return (
		<div>
			{allReviews.map((review) => (
				// <AllReviewCard key={review._id} review={review}></AllReviewCard>
				<AllReviewCard key={review._id} review={review}></AllReviewCard>
			))}
		</div>
	);
};

export default AllReviews;
