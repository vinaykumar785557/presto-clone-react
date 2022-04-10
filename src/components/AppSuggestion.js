import React from 'react';
import './AppSuggestion.css';
function AppSuggestion() {
	return (
		<div className='appsuggestion'>
			<div className='appsuggestion__details'>
				<p className='appsuggestion__text'>
					Bye-bye waiting. Adios wondering. Say hello to instant loads and
					balance checking with the user-friendly PRESTO App. Download the
					improved PRESTO App today!
				</p>
				<button className='appsuggestion__button'>
					Learn more about the PRESTO app
				</button>
			</div>
			<img className='appimage'
				src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/homepage-bottom.ashx?h=500&w=1650&la=en&hash=373CE5B19FC41D8EABB5C0B7D5594955EC126B87'
				alt='app'></img>
		</div>
	);
}

export default AppSuggestion;
