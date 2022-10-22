import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Components/Header/Header';

const Main = () => {
	return (
		<div>
			<div className="mb-[280px] lg:mb-0">
				<Header />
			</div>
			<Outlet />
		</div>
	);
};

export default Main;
