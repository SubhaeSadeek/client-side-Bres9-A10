import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
	const allReviews = useLoaderData();
	return (
		<div>
			{allReviews.map((review) => (
				<ReviewCard key={review._id} review={review}></ReviewCard>
			))}
		</div>
	);
};

export default AllReviews;
