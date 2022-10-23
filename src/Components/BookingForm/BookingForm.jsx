import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { BookingContext } from './../../Context/DestinationContext';

const BookingForm = () => {
	const { selectedCart } = useContext(BookingContext);

	return (
		<div className="h-[80%] w-[90%] mx-auto lg:h-[470px] lg:w-[470px] rounded-[5px]  p-[24px] bg-white text-black space-y-5">
			{selectedCart.length === 0 ? <Navigate to={'/'}></Navigate> : ''}
			<div className="space-y-2">
				<label htmlFor="firstname" className="text-md">
					First name
				</label>
				<input
					id="firstname"
					type="text"
					placeholder="First name"
					className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-[#F2F2F2] "
				/>
			</div>
			<div className="space-y-2">
				<label htmlFor="destination" className="text-md">
					Destination
				</label>
				<input
					id="firstname"
					type="text"
					// placeholder="First name"
					readOnly
					className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-[#F2F2F2] "
					value={selectedCart?.title}
				/>
			</div>

			<div className="flex justify-between gap-4">
				<div className="space-y-2">
					<label htmlFor="date" className="text-md">
						From
					</label>
					<input
						id="firstname"
						type="Date"
						// placeholder="First name"
						className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-[#F2F2F2] "
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="toDate" className="text-md">
						to
					</label>
					<input
						id="firstname"
						type="Date"
						// placeholder="First name"
						className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-[#F2F2F2] "
					/>
				</div>
			</div>

			<div>
				<Link to={'/room-details'}>
					<button className="rounded-lg text-white bg-blue-600 py-3 block w-full mt-4">
						Start Booking
					</button>
				</Link>
			</div>
		</div>
	);
};

export default BookingForm;
