import React from 'react';
import { Link } from 'react-router-dom';

const DestinationDetails = ({ selectedCart }) => {

	const {details,title} = selectedCart
	return (
		<div >
			{selectedCart.length !== 0 ? (
				<div className='space-y-4'>
					<h1 className="text-5xl font-extrabold text-center">{title}</h1>
					<p className="text-xl font-semibold">{details.length > 80 ? details.slice(0,80)+'...' : details}</p>
					<Link to={'/booking-details'}>
						<button
							className="group flex items-center justify-between rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring mt-5 mx-auto"
							href="/download">
							<span className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
								Book Now
							</span>

							<span className="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
								<svg
									className="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</span>
						</button>
					</Link>
				</div>
			) : (
				<h1 className="text-3xl text-center text-red-700 mt-3 font-semibold">
					Destination not selected yet
				</h1>
			)}
		</div>
	);
};

export default DestinationDetails;
