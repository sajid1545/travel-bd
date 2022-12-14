import React, { createContext, useEffect, useState } from 'react';

export const BookingContext = createContext();

const DestinationContext = ({ children }) => {
	const [destinations, setDestination] = useState([]);

	const [selectedCart, setSelectedCart] = useState([]);

	useEffect(() => {
		fetch('https://travel-server-alpha.vercel.app/destinations')
			.then((res) => res.json())
			.then((data) => setDestination(data));
	}, []);

	const handleCard = (selectedCard) => {
		setSelectedCart(selectedCard);
	};

	

	const bookingInfo = { destinations, selectedCart, handleCard };

	return <BookingContext.Provider value={bookingInfo}>{children}</BookingContext.Provider>;
};

export default DestinationContext;
