import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import profile from "../images/image-avatar.png";
import "../style/navigationBar.css";
import "../style/show.css";

interface pageLocation {
	data: string;
	func: (params: boolean) => void;
}

function NavigationBar({ data, func }: pageLocation) {
	const [MenuState, setMenuState] = useState(false);

	useEffect(() => {
		changeUnderline();
	}, []);

	function animateBurgerMenu() {
		func(MenuState);
		let element = document.getElementById("nav_burger_menu_container")!;
		let elementChild: HTMLCollection = element.children;

		if (MenuState) {
			for (let i = 0; i < elementChild.length; i++) {
				elementChild[i].classList.remove("active");
				setMenuState(!MenuState);
			}
		} else {
			for (let i = 0; i < elementChild.length; i++) {
				elementChild[i].classList.add("active");
				setMenuState(!MenuState);
			}
		}
	}

	function changeUnderline() {
		let elementAll = document.getElementsByTagName("li");

		for (let i = 0; i < elementAll.length; i++) {
			elementAll[i].classList.remove("active");
		}
		let element: HTMLElement | null = document.getElementById(
			window.location.href.split("/")[3]
		)!;

		element?.classList.add("active")!;
	}

	return (
		<div className='nav_container'>
			<div className='nav_flex_element'>
				<div
					onClick={() => animateBurgerMenu()}
					id='nav_burger_menu_container'
					className='nav_burger_menu_container'
				>
					<div className='nav_burger_menu1'></div>
					<div className='nav_burger_menu2'></div>
					<div className='nav_burger_menu3'></div>
				</div>
				<div
					id='nav_logo_container'
					className='nav_logo_container'
					onClick={() => changeUnderline()}
				>
					<Link className='nav_logo_container' to='/'>
						<Logo />
					</Link>
				</div>
				<ul className='nav_pages'>
					<li
						onClick={() => changeUnderline()}
						id='Collection'
						className='Collection'
					>
						<Link className='link' to='/Collection'>
							Collection
						</Link>
					</li>
					<li onClick={() => changeUnderline()} id='Men' className='Men'>
						<Link className='link' to='/Men'>
							Men
						</Link>
					</li>
					<li onClick={() => changeUnderline()} id='Women' className='Women'>
						<Link className='link' to='/Women'>
							Women
						</Link>
					</li>
					<li onClick={() => changeUnderline()} id='About' className='About'>
						<Link className='link' to='/About'>
							About
						</Link>
					</li>
					<li
						onClick={() => changeUnderline()}
						id='Contact'
						className='Contact'
					>
						<Link className='link' to='/Contact'>
							Contact
						</Link>
					</li>
					<div className='nav_underline'></div>
				</ul>
			</div>
			<div className='nav_flex_element'>
				<div className='nav_cart'>
					<CartIcon />
				</div>
				<div className='nav_profile'>
					<img className='img_profile' alt='profile' src={profile} />
				</div>
			</div>
		</div>
	);
}

export default NavigationBar;
