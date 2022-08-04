import "../style/missionCards.css";
import ForestIcon from "@mui/icons-material/Forest";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Co2Icon from "@mui/icons-material/Co2";
function MissionCards() {
	return (
		<div id='mission_banner_container'>
			<div id='mission_banner_1'>
				<div id='mission_icons_1'>
					<div className='card-container'>
						<div className='card'>
							<div className='front'>
								<ForestIcon id='mission_icons_1' />
							</div>
							<div className='back'>
								<ForestIcon id='mission_icons_1' />
							</div>
						</div>
					</div>
				</div>
				<div className='mission_text'>We use recycled material</div>
			</div>
			<div id='mission_banner_2'>
				<div id='mission_icons_2'>
					<div className='card-container'>
						<div className='card'>
							<div className='front'>
								<VolunteerActivismIcon id='mission_icons_2' />
							</div>
							<div className='back'>
								<VolunteerActivismIcon id='mission_icons_2' />
							</div>
						</div>
					</div>
				</div>
				<div className='mission_text'>We donates 25% of profits</div>
			</div>
			<div id='mission_banner_3'>
				<div id='mission_icons_3'>
					<div className='card-container'>
						<div className='card'>
							<div className='front'>
								<Co2Icon id='mission_icons_3' />
							</div>
							<div className='back'>
								<Co2Icon id='mission_icons_3' />
							</div>
						</div>
					</div>
				</div>
				<div className='mission_text'>We are carbon neutral</div>
			</div>
		</div>
	);
}
export default MissionCards;
