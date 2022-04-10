import React from 'react';
import './FooterBottom.css';

const currentYear = new Date().getFullYear();

function FooterBottom() {
	return (
		<div className='footerbottom'>
			<img className='footerbottom__image'
				src='https://www.prestocard.ca/~/media/afms/images/white-metrolinx.ashx?h=24&w=74&la=en&hash=CECB3E5BF5A9334B2493CD16422E50D36112105E'
				alt='metrolinx'
			/>
			<p className='footerbottom__p'> copyright &copy; Metrolinx {currentYear}</p>
		</div>
	);
}

export default FooterBottom;
