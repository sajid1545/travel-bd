import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../Context/UserContext';

const Register = () => {
	const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

	const [errors, setErrors] = useState({
		password: '',
		general: '',
	});

	const handlePasswordChange = (e) => {
		const password = e.target.value;
		if (password.length < 6) {
			setErrors({ ...errors, password: 'Must be at least 6 characters' });
		} else {
			setErrors('');
		}
	};

	const handleSumbit = (e) => {
		e.preventDefault();
		let form = e.target;
		let name = form.name.value;
		let email = form.email.value;
		let password = form.password.value;
		let confirm = form.confirm.value;

		console.log(name, email, password, confirm);

		if (password !== confirm) {
			return;
		}

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				handleUpdateProfile(name);
				form.reset();
				// toast.success('Successfully registered');
				verifyEmail().then(() => {
					toast.success('Verify your email address');
				});
			})
			.catch((e) => {
				setErrors({ ...errors, general: e.message });
				toast.error(e.message);
			});
	};

	const handleUpdateProfile = (name) => {
		const profile = {
			displayName: name,
		};

		updateUserProfile(profile)
			.then(() => {})
			.catch((e) => toast.error(e.message));
	};

	// const handleVerifyEmail = () => {
	// 	verifyEmail().then(() => {});
	// };

	return (
		<div className="mt-3">
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100  ">
				<h1 className="text-2xl font-bold text-center">Register</h1>
				<form onSubmit={handleSumbit} className="space-y-6 ">
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block dark:text-gray-400">
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Name"
							className="w-full px-4 py-3 rounded-md border-b-2  border-[#F2F2F2] dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="useremail" className="block dark:text-gray-400">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							required
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
							onChange={handlePasswordChange}
							placeholder="Password"
							required
							className="w-full px-4 py-3 rounded-md border-b-2  border-[#F2F2F2] dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					{errors.password && <p className="text-red-600">{errors.password}</p>}
					<div className="space-y-1 text-sm">
						<label htmlFor="password" className="block dark:text-gray-400">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirm"
							id="confirm"
							placeholder="Confirm password"
							className="w-full px-4 py-3 rounded-md border-b-2  border-[#F2F2F2] dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
						Register
					</button>
					{errors.general && <p className="text-center text-red-600">{errors.general}</p>}
				</form>

				<p className="text-xs text-center sm:px-6 dark:text-gray-400">
					Already have an account?
					<Link to={'/login'} className="underline dark:text-gray-100">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
