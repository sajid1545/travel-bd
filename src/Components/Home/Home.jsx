import React, { useContext } from 'react';
import DestinationCard from '../DestinationCard/DestinationCard';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import { BookingContext } from './../../Context/DestinationContext';

const Home = () => {
	const { destinations, selectedCart, handleCard } = useContext(BookingContext);

	return (
		<div
			className={`grid grid-cols-12 mt-5 text-white place-items-center bg-no-repeat bg-cover min-h-screen backdrop-blur-sm bg-white/30`}
			style={{ backgroundImage: `url(${selectedCart.picture})` }}>
			<div className="right-side  h-[30%] w-[80%] mx-auto space-y-4 lg:col-span-5">
				<DestinationDetails selectedCart={selectedCart} />
			</div>

			<div className="left-side lg:col-span-7">
				<div className="grid grid-cols-3 ">
					{destinations.map((destination) => (
						<DestinationCard
							key={destination.id}
							destination={destination}
							handleCard={handleCard}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
