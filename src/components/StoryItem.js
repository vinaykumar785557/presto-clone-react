import React from 'react';
import './StoryItem.css';
function StoryItem({ story }) {
	const { img, title, description } = story;
	return (
		<div className='storyitem'>
			<img src={img} alt={title} className='storyitem__image'></img>
			<h4 className='storyitem__title'>{title}</h4>
			<p className='storyitem__description'>{description}</p>
		</div>
	);
}

export default StoryItem;
