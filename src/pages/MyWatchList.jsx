import { useContext, useEffect, useState } from "react";
import MyWatchListCard from "../components/MyWatchListCard";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../utils/useTitle";

const MyWatchList = () => {
	useTitle("My Watch List");
	const [myWatchList, setMyWatchList] = useState([]);

	const { user } = useContext(AuthContext);
	const userEmail = user.email;
	useEffect(() => {
		if (userEmail) {
			fetch("http://localhost:5001/myWatchList", {
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
			<h1 className="text-center text-4xl font-bold text-fuchsia-600 mt-8">
				My Watch List Total -
				<span className="text-blue-600">{myWatchList.length}</span>
			</h1>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Sr. No</th>
							<th>Title</th>
							<th>Published year</th>
							<th>Rating</th>
							<th>Genre</th>
							<th>Reviewed By</th>
						</tr>
					</thead>
					<tbody>
						{/* row */}
						{myWatchList.map((watchList) => (
							<MyWatchListCard
								key={watchList._id}
								watchList={watchList}
								myWatchList={myWatchList}
								setMyWatchList={setMyWatchList}
							></MyWatchListCard>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyWatchList;
