import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import logo from "../../assets/images/mozacoin.png";

const Header = ({ siteTitle }) => {
	return (
		<header>
			<div className="hidden sm:flex flex justify-center items-center bg-green-500 h-16">
				<div className="flex">
					<div className="text-white font-normal text-small">
						Hi you can join our community right now on Telegram{" "}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://t.me/mozacoin"
							className="mt-2 sm:mt-0 sm:ml-4 inline-block text-green-500 bg-white text-white text-sm font-semibold rounded-md px-3 py-2 hover:bg-gray-200"
						>
							Join Our Community{" "}
							<span className="hidden sm:inline">→</span>
						</a>{" "}
					</div>
					<div></div>
				</div>
			</div>
			<div className="relative bg-transparent my-2 border-b pb-2 h-16 flex justify-center items-center">
				<div className="container max-auto mx-auto px-4">
					<div className="relative flex items-center justify-between">
						<Link to="/" className="flex">
							<img src={logo} width="180px" alt="" />
						</Link>
						<ul className="flex items-center hidden space-x-10 lg:flex leading-6 font-normal text-gray-700">
							<li>
								<Link to="/faq" className="flex">
									FAQ
								</Link>
							</li>

							<li>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://medium.com/mozacoin"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://web.mozacoin.com/auth/signin"
								>
									Sign in
								</a>
							</li>
							<li>
								<span className="inline-flex rounded-md shadow-sm">
									<a
										href="https://web.mozacoin.com/auth/signup"
										className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline-none transition ease-in-out duration-150"
									>
										Sign Up
									</a>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
