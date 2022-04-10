import React, { useState } from 'react';
import './Header.css';
import { FaSearch, FaRegWindowClose } from 'react-icons/fa';
import Modal from 'react-modal/lib/components/Modal';
Modal.setAppElement('#root');

const customStyles = {
	content: {
		display: 'block',
		Width: '100%',
		Height: '100vh',
		borderRadius: '4px',
		background: '#191919',
		opacity: '.6',
		top: '0px',
		left: '0px',
		right: '0px',
		bottom: '0px',
		overflowY: 'hidden',
	},
};
function Header() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleModal() {
		setIsOpen(!isOpen);
	}
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://www.prestocard.ca/~/media/afms/images/presto-logo.ashx?h=41&w=152&la=en&hash=B330DD9D565C950DF58467394DF1D615FEAAFE09'
					alt='presto'
				/>
				<div className='header__links'>
					<ul className='header__link'>
						<li>Learn</li>
						<li>PRESTO Card</li>
						<li>Support</li>
					</ul>
				</div>
			</div>
			<div className='header__right'>
				<button className='header__right__search' onClick={toggleModal}>
					<FaSearch />
				</button>
				<Modal
					isOpen={isOpen}
					onRequestClose={toggleModal}
					style={customStyles}
					contentLabel='search modal'>
					<div className='modal__input'>
						<FaSearch className='modal__button' />
						<input type='search' placeholder='Search' className='input'></input>
						<button onClick={toggleModal} className='modal__button'>
							<FaRegWindowClose />
						</button>
					</div>
				</Modal>
				<p className='header__right__text'>FR</p>
				<p className='header__right__text'>Sign in / Sign Up</p>
			</div>
		</div>
	);
}

export default Header;
