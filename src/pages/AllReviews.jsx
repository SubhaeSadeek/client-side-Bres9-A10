import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/AllReviewCard";
import useTitle from "../utils/useTitle";

const AllReviews = () => {
	useTitle("All review");
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
