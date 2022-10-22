import React, { useContext } from 'react';
import BookingForm from '../BookingForm/BookingForm';
import { BookingContext } from './../../Context/DestinationContext';

const BookingDetails = () => {
	const { selectedCart } = useContext(BookingContext);

	const { details, title } = selectedCart;

	return (
		<div
			className="bg-no-repeat bg-cover min-h-screen backdrop-blur-sm bg-white/30 p-10"
			style={{ backgroundImage: `url(${selectedCart.picture})` }}>
			<div className="grid grid-cols-2 gap-10 mt-5 text-white place-items-center ">
				<div className="info-container p-5 space-y-4">
					<h1 className="text-5xl font-extrabold text-center">{title}</h1>
					<p className="text-xl font-semibold">{details}</p>
				</div>

				<div className="booking-date-container">
					<BookingForm />
				</div>
			</div>
		</div>
	);
};

export default BookingDetails;
