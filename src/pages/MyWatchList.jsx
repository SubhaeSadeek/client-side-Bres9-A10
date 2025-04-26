import { useContext, useEffect, useState } from "react";
import MyWatchListCard from "../components/MyWatchListCard";
import { AuthContext } from "../provider/AuthProvider";

const MyWatchList = () => {
	const [myWatchList, setMyWatchList] = useState([]);
	const { user } = useContext(AuthContext);
	const userEmail = user.email;
	useEffect(() => {
		if (userEmail) {
			fetch("http://localhost:5001/addWatchList", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ userEmail }),
			})
				.then((res) => res.json())
				.then((data) => setMyWatchList(data))
				.catch((err) => console.error("Error fetching My Watchlist Data", err));
		}
	}, [userEmail]);

	return (
		<div>
			{myWatchList.map((watchList) => (
				<>
					<MyWatchListCard
						key={watchList._id}
						watchList={watchList}
					></MyWatchListCard>
				</>
			))}
		</div>
	);
};

export default MyWatchList;
