import React from 'react';
import Agency from './Agency';
import './TransitAgencies.css';

const agencies = [
	{
		id: '1',
		img: 'https://www.prestocard.ca/~/media/afms/images/thumbnail/brampton-transit-150x63px.ashx?h=63&w=150&la=en&hash=78551669290BF4F6D358B392B792C19FC42F1BD5',
		websitelink:
			'https://www.brampton.ca//en/residents/transit/Pages/Home.aspx',
	},
	{
		id: '2',
		img: 'https://www.prestocard.ca/~/media/afms/images/thumbnail/burlington-transit-150x63px.ashx?h=63&w=150&la=en&hash=3702137144447764CAC47940D6CE21AD42D4422C',
		websitelink: 'https://www.burlingtontransit.ca/en/index.aspx',
	},
	{
		id: '3',
		img: 'https://www.prestocard.ca/~/media/afms/images/thumbnail/drt-150x63px.ashx?h=63&w=150&la=en&hash=9D6BE1266BEAB6DA1531EFC7BAF70A62751364FC',
		websitelink: 'https://www.durhamregiontransit.com/en/index.aspx',
	},
	{
		id: '4',
		img: 'https://www.prestocard.ca/~/media/afms/images/thumbnail/go-150x63px.ashx?h=63&w=150&la=en&hash=F509799695C777F31D9A78089A32CAC2F3B06805',
		websitelink: 'https://www.gotransit.com/en/',
	},
	{
		id: '5',
		img: 'https://www.prestocard.ca/~/media/afms/images/productimages/hsr1-150x63px.ashx?h=63&w=150&la=en&hash=A7882DD3E79A43DB9CE8507B1051348A0BC8F91D',
		websitelink: 'https://www.hamilton.ca/hsr-bus-schedules-fares',
	},
	{
		id: '6',
		img: 'https://www.prestocard.ca/~/media/afms/images/thumbnail/miway-150x63px.ashx?h=63&w=150&la=en&hash=01B6C223A6549D139FB2AB72538A556302A79E33',
		websitelink: 'https://www.mississauga.ca/miway-transit/',
	},
	{
		id: '7',
		img: 'https://www.prestocard.ca/~/media/afms/images/productimages/oakville-240x44px.ashx?h=44&w=240&la=en&hash=FEA863CF8830E21F1AD32AC738CCF6F45F390960',
		websitelink: 'https://www.oakvilletransit.ca/index.html',
	},
	{
		id: '8',
		img: 'https://www.prestocard.ca/~/media/afms/images/thumbnail/oct-150x63px.ashx?h=63&w=150&la=en&hash=6F49BDD000C6141A3A67BA946E34DD13ED6334A5',
		websitelink: 'https://www.octranspo.com/en/',
	},
	{
		id: '9',
		img: 'https://www.prestocard.ca/~/media/afms/images/thumbnail/ttc-150x63px.ashx?h=63&w=150&la=en&hash=31BE5775EA46FCB9093BD1AF4095B7825AB5732E',
		websitelink: 'https://www.ttc.ca/',
	},
	{
		id: '10',
		img: 'https://www.prestocard.ca/~/media/afms/images/thumbnail/yrtviva-122x50.ashx?h=60&w=122&la=en&hash=60BEBEE0CAC6DF2453FB279EA76B75B6225DC634',
		websitelink: 'https://www.yrt.ca/en/',
	},
	{
		id: '11',
		img: 'https://www.prestocard.ca/~/media/afms/images/transit%20agencies/up-logo-transparent-150x63.ashx?h=63&w=150&la=en&hash=3CE4F927AB4F0208DF0661E0E1D13278767E6A54',
		websitelink: 'https://www.upexpress.com/',
	},
];
function TransitAgencies() {
	return (
		<div className='transit'>
			<h2 className='transit__title'>Participating Transit Agencies</h2>

			{agencies.map((agency) => (
				<Agency key={agency.id} agency={agency} />
			))}
		</div>
	);
}

export default TransitAgencies;
