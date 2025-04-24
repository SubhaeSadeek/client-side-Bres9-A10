import GameCardContainer from "../components/GameCardContainer";

const Home = () => {
	const carousalScroll = (e, img_num) => {
		e.preventDefault();
		const slide = document.getElementById(`slide${img_num}`);
		slide.scrollIntoView({ behavior: "smooth", block: "nearest" });
	};
	return (
		<div>
			{/* slider */}
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item relative w-full">
					<img
						src="https://i.ibb.co.com/qYddmH1H/banner-img1.png"
						className="w-full h-96"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a
							href=""
							className="btn btn-circle"
							onClick={(e) => carousalScroll(e, 4)}
						>
							❮
						</a>
						<a
							href=""
							className="btn btn-circle"
							onClick={(e) => carousalScroll(e, 2)}
						>
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img
						src="https://i.ibb.co.com/d0fHpRR0/banner-img2.png"
						className="w-full h-96"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a
							href=""
							className="btn btn-circle"
							onClick={(e) => carousalScroll(e, 1)}
						>
							❮
						</a>
						<a
							href=""
							className="btn btn-circle"
							onClick={(e) => carousalScroll(e, 3)}
						>
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img
						src="https://i.ibb.co.com/93BYZcSd/banner-img6.png"
						className="w-full h-96"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a
							href=""
							className="btn btn-circle"
							onClick={(e) => carousalScroll(e, 2)}
						>
							❮
						</a>
						<a
							href=""
							className="btn btn-circle"
							onClick={(e) => carousalScroll(e, 4)}
						>
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img
						src="https://i.ibb.co.com/JwhLdJVx/banner-img3.png"
						className="w-full h-96"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a
							href=""
							className="btn btn-circle"
							onClick={(e) => carousalScroll(e, 3)}
						>
							❮
						</a>
						<a
							href=""
							className="btn btn-circle"
							onClick={(e) => carousalScroll(e, 1)}
						>
							❯
						</a>
					</div>
				</div>
			</div>
			<GameCardContainer></GameCardContainer>
		</div>
	);
};

export default Home;
