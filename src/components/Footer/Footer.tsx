import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import logo from "../../assets/images/mozacoin.png";

const Footer = () => (
	<div className="container px-2 sm:px-12 flex mx-auto sm:mt-12">
		<div className="pb-0 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
			<div className="grid gap-16 row-gap-10 mb-4 lg:grid-cols-6">
				<div className="md:max-w-md lg:col-span-2">
					<a
						href="/"
						aria-label="Go home"
						title="Company"
						className="inline-flex items-center"
					>
						<img src={logo} width="150px" alt="mozacoin logo" />
					</a>
					<div className="mt-4 lg:max-w-sm">
						<p className="text-sm text-gray-800 leading-relaxed">
							We are a technology company working to make
							cryptocurrency accessible to Africans, with the aim
							of accelerating financial inclusion.
						</p>
						<p className="mt-4 text-sm text-gray-800 space-y-2">
							<p className="font-semibold tracking-wide text-gray-800">
								Feel free to reach us on
							</p>
							<div className="space-y-1 text-sm">
								<div className="mb-4">
									809, 1007 N Orange St. 4th Floor , Wilmington, DE, New Castle, US, 19801
								</div>
								<a href="mailto:contact@mozacoin.com">contact@mozacoin.com</a>
							</div>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
					<div>
						<p className="text-sm font-semibold tracking-wide text-gray-800">
							Company
						</p>
						<ul className="mt-2 space-y-2">
							{/* <li>
								<Link
									to="/about"
									className="text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									About
								</Link>
							</li> */}
							<li>
								<a
									href="https://medium.com/mozacoin"
									target="_blank"
									rel="noreferrer"
									className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="mailto:contact@mozacoin.com"
									className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold tracking-wide text-gray-800">
							Learn more
						</p>
						<ul className="mt-2 space-y-2">
							<li>
								<Link
									to="/privacy"
									className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									Terms of Use
								</Link>
							</li>
							{/* <li>
                                <Link to="/open"
                                    className="text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Open startup
                                </Link>
                            </li> */}
						</ul>
					</div>
					<div>
						<p className="font-semibold tracking-wide text-gray-800">
							Get involved
						</p>
						<ul className="mt-2 space-y-2">
							<li>
								<a
									href="https://github.com/mozacoin"
									className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									Github
								</a>
							</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold tracking-wide text-gray-800">
							Connect
						</p>
						<ul className="mt-2 space-y-2">
							{/* <li>
								<Link
									to="/faq"
									className="text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									FAQs
								</Link>
							</li> */}
							<li>
								<a
									href="https://twitter.com/MozacoinHQ"
									className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="https://linkedin.com/company/mozacoin"
									className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://facebook.com/MozacoinHQ"
									className="text-sm text-gray-800 transition-colors duration-300 hover:text-deep-purple-accent-400"
								>
									Facebook
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between pt-5 pb-5 border-t sm:flex-row">
				<p className="text-sm text-gray-800">
					© Copyright {new Date().getFullYear()} Mozacoin, Inc. All rights
					reserved.
				</p>
			</div>
		</div>
	</div>
);

Footer.propTypes = {
	siteTitle: PropTypes.string,
};

Footer.defaultProps = {
	siteTitle: ``,
};

export default Footer;
