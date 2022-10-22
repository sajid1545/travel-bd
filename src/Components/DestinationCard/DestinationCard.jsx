import React from 'react';

const DestinationCard = ({ destination, handleCard }) => {
	const { title, id, picture } = destination;

	

	return (
		<div>
				<div
					onClick={() => handleCard(destination)}
					className="card w-[90%] mx-auto mb-5 h-[400px] bg-base-100 shadow-xl image-full   cursor-pointer">
					<figure>
						<img src={picture} alt="nature" />
					</figure>
					<div className="card-body flex justify-end">
						<h2 className="text-4xl font-extrabold">{title}</h2>
						
					</div>
				</div>
		</div>
	);
};

export default DestinationCard;
