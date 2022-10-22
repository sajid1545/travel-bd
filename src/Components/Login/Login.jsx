import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { AuthContext } from './../../Context/UserContext';
import { toast } from 'react-hot-toast';

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const location = useLocation();
	let navigate = useNavigate();
	let from = location.state?.from?.pathname || '/';

	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		let form = e.target;
		let email = form.email.value;
		let password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				toast.success('Success');
				navigate(from, { replace: true });
			})
			.catch((e) => {
				toast.error(e.message);
				setError(e.message);
			});
	};

	return (
		<div className="mt-3">
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block dark:text-gray-400">
							Email
						</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Email"
							className="w-full px-4 py-3 rounded-md border-b-2  border-[#F2F2F2] dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="password" className="block dark:text-gray-400">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md border-b-2  border-[#F2F2F2] dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
						Sign in
					</button>
					{error && <p className="text-center text-xl text-red-600">{error}</p>}
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
					<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				</div>
				<div className="flex justify-center space-x-4">
					<button aria-label="Log in with Google" className="p-3 rounded-sm">
						<FaGoogle className="w-5 h-5 fill-current" />
					</button>

					<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
						<FaFacebook className="w-5 h-5 fill-current" />
					</button>
				</div>
				<p className="text-xs text-center sm:px-6 dark:text-gray-400">
					Don't have an account?
					<Link to={'/register'} className="underline dark:text-gray-100">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
