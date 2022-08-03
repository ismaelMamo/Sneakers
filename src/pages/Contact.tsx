import { useState, useEffect } from "react";
import "../style/contact.css";
function Contact() {
	return (
		<div id='contact_main_container'>
			<div id='contact_email_container'>
				<div id='contact_title_container'>E-mail contact</div>
				<form id='contact_form_container'>
					<input className='email_input' type='text' placeholder='Your name*' />
					<input
						className='email_input'
						type='text'
						placeholder='Your email address*'
					/>
					<input className='email_input' type='text' placeholder='Subject*' />
					<textarea
						id='contact_message'
						rows={10}
						cols={70}
						placeholder='  Message*'
					/>
					<div>
						<input type='checkbox' />
						<span>Subscribe for 15% OFF</span>
					</div>
					<input id='email_submit_btn' type='submit' value='Submit' />
				</form>
			</div>
		</div>
	);
}

export default Contact;
