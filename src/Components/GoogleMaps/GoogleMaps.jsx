import React from 'react';

const GoogleMaps = () => {
	return (
		<div className="mt-14">
			<iframe
				title="maps"
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14759.685105850636!2d91.86133818439333!3d22.356601172967423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1666538533666!5m2!1sen!2sbd"
				width="600"
				height="450"
				frameBorder="0"
				style={{ border: 0 }}
				allowFullScreen=""
				aria-hidden="false"
				tabIndex="0"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	);
};

export default GoogleMaps;
