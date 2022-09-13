import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import logo from "../../assets/images/mozacoin.png";

const Header = ({ siteTitle }) => {
	return (
		<header>
			<div className="hidden sm:flex flex justify-center items-center bg-green-600 h-16">
				<div className="flex">
					<div className="text-white text-base">
						Hi you can join our community right now on Telegram{" "}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://t.me/mozacoin"
							className="mt-2 sm:mt-0 sm:ml-4 inline-block text-green-500 bg-white text-white text-sm font-medium rounded-md px-3 py-2 hover:bg-gray-200"
						>
							Join Our Community{" "}
							<span className="hidden sm:inline">→</span>
						</a>{" "}
					</div>
					<div></div>
				</div>
			</div> 
			<div className="relative bg-transparent	 border-b h-16 flex justify-center items-center">
				<div className="container mx-3 sm:px-12 mx-auto">
					<div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
						<div className="relative flex items-center justify-between">
							<Link to="/" className="flex">
								<img src={logo} width="150px" alt="" />
							</Link>
							<ul className="flex items-center hidden space-x-10 lg:flex leading-6 font-medium text-gray-700 text-sm">
								<li>
									<a target="_blank" rel="noreferrer" href="https://medium.com/mozacoin">
										Blog
									</a>
								</li>
								<li>
									<span className="inline-flex rounded-md shadow-sm">
										<a
											href="https://web.mozacoin.com/auth/signup"
											className="whitespace-no-wrap inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm leading-6 font-medium rounded text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline-none transition ease-in-out duration-150"
										>
											Join waitlist
										</a>
									</span>
								</li>
							</ul>
						</div>
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
