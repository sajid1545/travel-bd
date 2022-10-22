import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../Context/UserContext';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div>
			<div className="px-4 py-5   md:px-24 lg:px-22 bg-white rounded-xl shadow-2xl shadow-slate-500">
				<div className="relative flex items-center justify-between">
					<Link to={'/'}>
						<img src={logo} alt="" className="w-[120px] h-[50px] text-deep-purple-accent-400" />
					</Link>

					<ul className="items-center hidden space-x-8 lg:flex">
						<li>
							<a
								href="/"
								aria-label="Our product"
								title="Our product"
								className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
								Product
							</a>
						</li>
						<li>
							<a
								href="/"
								aria-label="Our product"
								title="Our product"
								className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
								Features
							</a>
						</li>
						<li>
							<a
								href="/"
								aria-label="Product pricing"
								title="Product pricing"
								className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
								Pricing
							</a>
						</li>
						<li>
							<a
								href="/"
								aria-label="About us"
								title="About us"
								className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
								About us
							</a>
						</li>

						<li>
							{user?.email ? (
								<>
									<span className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
										{user && user?.displayName}
									</span>

									<button onClick={logOut} className="btn btn-primary ml-3">
										LogOut
									</button>
								</>
							) : (
								<Link
									to={'/login'}
									className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
									aria-label="Sign up"
									title="Sign up">
									Login
								</Link>
							)}
						</li>
						<li>{user?.photoURL ? <img src={user.photoURL} alt="" /> : <FaUserAlt />}</li>
					</ul>
					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
							onClick={() => setIsMenuOpen(true)}>
							<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="p-5 bg-white border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<Link to={'/'}>
												<img
													src={logo}
													alt=""
													className="w-[120px] h-[50px] text-deep-purple-accent-400"
												/>
											</Link>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}>
												<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-4">
											<li>
												<a
													href="/"
													aria-label="Our product"
													title="Our product"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													Product
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="Our product"
													title="Our product"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													Features
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="Product pricing"
													title="Product pricing"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													Pricing
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="About us"
													title="About us"
													className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
													About us
												</a>
											</li>

											<li>{user?.photoURL ? <img src={user.photoURL} alt="" /> : <FaUserAlt />}</li>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
