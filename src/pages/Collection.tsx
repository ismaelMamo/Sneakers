import "../style/collection.css";

function Collection() {
	function navigate(params: string) {
		window.location.href = `${window.location.origin}/${params}`;
	}
	return (
		<div id='collection_main_container'>
			<div id='collection_main'>
				<div onClick={() => navigate("Men")} className='collection_card'>
					<img
						alt='Men'
						src='https://i.pinimg.com/474x/0a/f6/1b/0af61bc91c80b8593405b2c97c176c31.jpg'
						id='mens_collection'
					/>
					<div className='collection_name'>Men</div>
				</div>
				<div onClick={() => navigate("Women")} className='collection_card'>
					<img
						alt='Women'
						src='https://images-platform.99static.com//0Qwt2pSX-JirxPAh9vCEUE47ABo=/fit-in/500x500/projects-files/47/4791/479117/d2848b95-e0a7-49b9-9483-35c187d4f548.jpg'
						id='womens_collection'
					/>
					<div className='collection_name'>Women</div>
				</div>
			</div>
		</div>
	);
}

export default Collection;
