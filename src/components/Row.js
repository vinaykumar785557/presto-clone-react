import React from 'react';
import './Row.css';
function Row() {
	return (
		<div className='row'>
			<div className='row__details'>
				<h3 className='row__title'>
					We met in a previous life. But in this one we're way cooler.
				</h3>
				<p className='row__description'>
					Say goodbye to paper tickets, tokens, passes and cash. Say hello to
					more ways to tap on to transit with your PRESTO card, PRESTO tickets,
					PRESTO E-Tickets and PRESTO contactless. Available on participating
					transit agencies throughout the{' '}
					<b>Greater Toronto and Hamilton Area and Ottawa.</b>
				</p>

				<button className='row__button'>Discover more about PRESTO</button>
			</div>

			<img
				className='row__image'
				src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/homepage-intro-feature.ashx?h=715&w=1072&la=en&hash=66E39A7E5E6258502581764E09FDA1E91EB86FB2'
				alt='introfeature'
			/>
		</div>
	);
}

export default Row;
