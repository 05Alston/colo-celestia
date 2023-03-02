import React from 'react';
import backdrop from '../assets/colonite.webp';

const Colonight = () => {
	return (
		<div className='w-full h-screen bg-black'>
			<div className='w-full h-screen bg-colonight absolute bg-center bg-cover blur-[5px]'></div>
			<div className='w-full h-screen bg-black opacity-30 absolute'></div>
		</div>
	)
}

export default Colonight