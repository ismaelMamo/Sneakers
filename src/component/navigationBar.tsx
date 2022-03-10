import { useState, useEffect } from "react";
import $ from "jquery";
import "../style/navigationBar.css";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../images/icon-menu.svg";
import profile from "../images/image-avatar.png";

interface pageLocation {
	data: string;
}

function NavigationBar({ data }: pageLocation) {
	$(document).ready(function () {
		$("li a").click(function () {
			console.log("in");

			$(this).parent().siblings().removeClass("active");

			$(this).parent().addClass("active");
		});
	});
	return (
		<div className='nav_container'>
			<div className='nav_flex_element'>
				<div className='nav_burger_menu'>
					<MenuIcon />
				</div>
				<div className='nav_logo_container'></div>
				<ul className='nav_pages'>
					<li className='Collection'>
						<a>Collection</a>
					</li>
					<li className='Men'>
						<a>Men</a>
					</li>
					<li className='Women'>
						<a>Women</a>
					</li>
					<li className='About'>
						<a>About</a>
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
