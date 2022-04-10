import React from 'react';
import './Accordian.css';
function Accordian() {
	return (
		<div className='accordian'>
			<h2>Get to know PRESTO products</h2>
			<div className='accordian__singlecontainer'>
				<img
					className='icon'
					src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/cardicon38px.ashx?h=38&w=38&la=en&hash=E756169BB8825F12AD7FD3DE2D16004E6517DB0E'
					alt=''
				/>
				<details>
					<summary>PRESTO Card</summary>

					<div className='container'>
						<img
							className='accordianimage'
							src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/homepage-presto-card.ashx?h=402&w=738&la=en&hash=D53D81293BA0A85FECE35B7BF0A37D2B0E0F8E7D'
							alt=''
						/>
						<div className='conainter__p'>
							<p>
								Same outside. Totally different inside. Buy a card, load it, and
								set your fare type. Then create a PRESTO Account to add your
								card and access great benefits - including PRESTO Perks.
							</p>
							<p>
								Learn more: <a href='/'>PRESTO Card</a>
							</p>
						</div>
					</div>
				</details>
			</div>

			<div className='accordian__singlecontainer'>
				<img
					className='icon'
					src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/eticketicon38px.ashx?h=38&w=38&la=en&hash=F35E5A3285A08FD9D952BD889F811B69E08A2A69'
					alt=''
				/>
				<details>
					<summary>PRESTO E-tickets</summary>
					<div className='container'>
						<img
							className='accordianimage'
							src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/homepage-etickets.ashx?h=402&w=738&la=en&hash=CD57F134E2E201FDC17320FAA228916F64E0082A'
							alt=''
						/>
						<div className='conainter__p'>
							<p>
								Ideal for occasional riders and visitors, PRESTO E-Tickets are
								available for Durham Region Transit (DRT), Hamilton Street
								Railway (HSR) and Oakville Transit customers. Simply buy and
								activate your PRESTO E-Ticket on the PRESTO E-Ticket app or web,
								to pay for your transit trip.
							</p>
							<p>
								Learn more: <a href='/'>PRESTO E-tickets</a>
							</p>
						</div>
					</div>
				</details>
			</div>
			<div className='accordian__singlecontainer'>
				<img
					className='icon'
					src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/contactlessicon38px.ashx?h=38&w=38&la=en&hash=3C890BBB02FF3DAAE8056A9399C7F0651FB3FFF9'
					alt=''
				/>
				<details>
					<summary>PRESTO Contactless</summary>
					<div className='container'>
						<img
							className='accordianimage'
							src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/homepage-contactless.ashx?h=402&w=738&la=en&hash=DF82EDC40969A34EA3B38366B0D8C61C758DD24D'
							alt=''
						/>
						<div className='conainter__p'>
							<p>
								Waaaay more ways to pay. Tapping on just got better, easier and
								convenient-er. Pay for transit with your credit card, debit card
								or mobile wallet. Available now as a pilot on UP Express.{' '}
							</p>
							<p>
								Learn more: <a href='/'>PRESTO Contactless</a>
							</p>
						</div>
					</div>
				</details>
			</div>
			<div className='accordian__singlecontainer'>
				<img
					className='icon'
					src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/ticketicon38px.ashx?h=38&w=38&la=en&hash=C5912329D4C12E3088FC093D4569CC0C156CDBEF'
					alt=''
				/>
				<details>
					<summary className='summary'>PRESTO Tickets</summary>
					<div className='container'>
						<img
							className='accordianimage'
							src='https://www.prestocard.ca/~/media/afms/images/presto%20vi%20launch%202021/homepage/homepage-prestotickets.ashx?h=402&w=738&la=en&hash=327054C96EE46197ACD8BD6CE215F7A0C21B48E3'
							alt=''
						/>
						<div className='conainter__p'>
							<p>
								A PRESTO Ticket is a limited-use paper PRESTO card that can be
								used to pay your fare on the TTC. If you’re an occasional TTC
								rider or just visiting Toronto, a PRESTO Ticket may be perfect
								for you.
							</p>
							<p>
								Learn more: <a href='/'>PRESTO Tickets</a>
							</p>
						</div>
					</div>
				</details>
			</div>
		</div>
	);
}

export default Accordian;
