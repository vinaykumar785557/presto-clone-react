import './App.css';
import Accordian from './components/Accordian';
import AppSuggestion from './components/AppSuggestion';
import Banner from './components/Banner';
import Discounts from './components/Discounts';
import FooterBottom from './components/FooterBottom';
import FooterTop from './components/FooterTop';
import Header from './components/Header';
import Row from './components/Row';
import StoryBoard from './components/StoryBoard';
import TransitAgencies from './components/TransitAgencies';

function App() {
	return (
		<div className='app'>
			{/* Header */}
			<Header />
			{/* Banner */}
			<Banner />
			{/* Row */}
			<Row />
			{/* StoryBoard */}
			<StoryBoard />
			{/* ProductsAccordian */}
			<Accordian />
			{/* TransitAgencies */}
			<TransitAgencies />
			{/* AppSuggestion */}
			<AppSuggestion />
			{/*Discounts*/}
			<Discounts />
			{/* FooterTop */}
			<FooterTop />
			{/* FooterBottom */}
			<FooterBottom />
		</div>
	);
}

export default App;
