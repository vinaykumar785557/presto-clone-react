import React from 'react';
import './Agency.css';
function Agency({ agency }) {
	const { img, websitelink } = agency;
	return (
		<img
			className='agency__img'
			src={img}
			alt=''
			onClick={() => window.open(websitelink)}></img>
	);
}

export default Agency;
