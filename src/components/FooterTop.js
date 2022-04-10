import React from 'react';
import './FooterTop.css';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
function FooterTop() {
	return (
		<div className='footertop'>
			<img
				src='https://www.prestocard.ca/~/media/afms/images/presto-black.ashx?h=32&la=en&w=78&hash=A794A56F0C188DF3ED50BF3C69795066B9290E17'
				alt='footertoplogo'
				className='footertop__logo'></img>

			<div className='footertop__section'>
				<div className='footertop__section__title'>General</div>
				<div className='footertop__section__items'>
					<ul className='section__list__items'>
						<li>Contact Us</li>
						<li>Accessibility</li>
						<li>Privacy Policy</li>
						<li>Terms & Conditions</li>
						<li>Sitemap</li>
					</ul>
				</div>
			</div>
			<div className='footertop__section'>
				<div className='footertop__section__title'>PRESTO</div>
				<div className='footertop__section__items'>
					<ul className='section__list__items'>
						<li>About PRESTO</li>
						<li>FAQ</li>
						<li>Take Our Survey</li>
						<li>Customer Charter</li>
						<li>Metrolinx</li>
					</ul>
				</div>
			</div>

			<div className='footertop__socialmedialinks'>
				<div className='footer__social'>
					<FaFacebookF />
					<p>Facebook</p>
				</div>
				<div className='footer__social'>
					<FaTwitter />
					<p>Twitter</p>
				</div>
				<div className='footer__social'>
					<FaYoutube />
					<p>Youtube</p>
				</div>
			</div>
		</div>
	);
}

export default FooterTop;
