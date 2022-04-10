import React from 'react';
import './Banner.css';
function Banner() {
	return (
		<div className='banner'>
			<img className='banner__image'
				src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/homepage-hero-temporary.ashx?h=784&w=1650&la=en&hash=407155568711A635E70C518D171BDB25C921EDC7'
				alt='banner'
			/>

			<div className='banner__detailswrapper'>
				<h2>Hello PRESTO</h2>

				<div className='banner__buttons'>
					<button className='banner__button'>I'm new to PRESTO</button>
					<button className='banner__button'>I'm a PRESTO User</button>
				</div>
				<div className='banner__discover'>
					<a href='/'>discover more about presto</a>
				</div>
			</div>
		</div>
	);
}

export default Banner;
