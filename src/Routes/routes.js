import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from './../Components/Home/Home';
import BookingDetails from './../Components/BookingDetails/BookingDetails';
import Login from './../Components/Login/Login';
import Register from './../Components/Register/Register';
import RoomDetails from './../Components/RoomDetails/RoomDetails';
import PrivateRoute from './PrivateRoute';
import UserProfile from '../Components/UserProfile/UserProfile';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/booking-details',
				element: <BookingDetails />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/room-details',
				element: (
					<PrivateRoute>
						<RoomDetails />
					</PrivateRoute>
				),
			},
			{
				path: '/user-profile',
				element: (
					<PrivateRoute>
						<UserProfile />
					</PrivateRoute>
				),
			},
		],
	},
]);
