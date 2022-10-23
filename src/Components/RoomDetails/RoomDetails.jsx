import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { BookingContext } from './../../Context/DestinationContext';
import { AuthContext } from './../../Context/UserContext';

const RoomDetails = () => {
	const { selectedCart } = useContext(BookingContext);
	const { user } = useContext(AuthContext);

	const { roomC, roomB, roomA } = selectedCart;

	// if (!selectedCart) {
	// }

	return (
		<div>
			<div className="text-center text-xl mt-10 font-bold">
				{selectedCart.length !== 0 ? (
					<p className="text-green-600">{user?.displayName} Chooose Your Desired Room</p>
				) : (
					<p className="text-red-700">
						You have to select a destination First{' '}
						<Link to={'/'} className="text-blue-700 underline  ml-4">
							Select a Destination
						</Link>
					</p>
				)}
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div className="space-y-5 p-10">
					<div className="card card-side bg-base-100 shadow-xl p-7">
						<figure>
							<img src={roomA} alt="Movie" className="w-[270px] h-[180px]" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">New movie is released!</h2>
							<p>Click the button to watch on Jetflix app.</p>
						</div>
					</div>
					<div className="card card-side bg-base-100 shadow-xl p-7">
						<figure>
							<img src={roomB} alt="Movie" className="w-[270px] h-[180px]" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">New movie is released!</h2>
							<p>Click the button to watch on Jetflix app.</p>
						</div>
					</div>
					<div className="card card-side bg-base-100 shadow-xl p-7">
						<figure>
							<img src={roomC} alt="Movie" className="w-[270px] h-[180px]" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">New movie is released!</h2>
							<p>Click the button to watch on Jetflix app.</p>
						</div>
					</div>
				</div>

				<div>
					<div>
						<GoogleMaps />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomDetails;
