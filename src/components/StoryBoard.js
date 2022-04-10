import React from 'react';
import './StoryBoard.css';
import StoryItem from './StoryItem';

const stories = [
	{
		id: '1',
		img: 'https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/featureimginstant350px.ashx?h=258&w=350&la=en&hash=434EE8D46E9AE72E2F1DA6D460EF0855CBD2E4A8',
		title: 'Instant',
		description:
			'Take advantage of instant loads and instant balance checking with the PRESTO app.',
	},
	{
		id: '2',
		img: 'https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/featureimgtouchless350px.ashx?h=258&w=350&la=en&hash=92743DDA801F832CDD5D7273DC08A89AB49A7E6C',
		title: 'Touchless',
		description:
			'Tap to pay with one of our many touchless, contactless and cashless payment options.',
	},
	{
		id: '3',
		img: 'https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/featureimgsavings350px.ashx?h=258&w=350&la=en&hash=664FA1B1243C92AB7B7FCAFD7BD1906B8AE637E5',
		title: 'Discounts',
		description:
			'Enjoy PRESTO discount rates on your transit fare, especially if you’re a student or senior.',
	},
];
function StoryBoard() {
	return (
		<div className='storyboard'>
			{stories.map((story) => (
				<StoryItem key={story.id} story={story} />
			))}
		</div>
	);
}

export default StoryBoard;
