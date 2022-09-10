import * as React from "react"
import Layout from "../components/Layout/Layout";

const IndexPage = () => (
  <Layout>
			<section className="h-screen">
				<div className="lg:pt-20 pb-20 radius-for-skewed">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap -mx-4">
							<div className="w-full px-4 mb-12 md:mb-20 lg:mb-0 flex flex-col items-center content-center text-center">
								<h2 className="text-6xl font-extrabold mb-8">
									Jump to the Crypto prosperity with Mozacoin
									& Embrance Endless{" "}
									<span className="text-green-600">
										possibilities.
									</span>
								</h2>
								<p
									className="max-w-sm text-base text-xl md:text-md leading-8 text-center font-normal text-gray-600 mb-6"
									style={{ maxWidth: "777px" }}
								>
									Buy, sell, and manage your cryptocurrency
									portfolio on the simplest, safest and the
									most trusted platform for all types of
									users. use Mozacoin and invite your friend
									to join for all your Crypto experience.
								</p>
								<div className="mb-6 font-extrabold uppercase ">
									Your gateway to the global economy
								</div>
								<form className="flex flex-row space-x-6">
									<button
										type="submit"
										className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline-none transition ease-in-out duration-150"
									>
										Get Start Today
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="container px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
				<div className="flex flex-col">
					<div className="max-w-xl sm:pr-16  mx-auto mb-10 flex flex-col items-center align-center">
						<h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 p-3 text-center">
							Evolve your money. Explore Mozacoin and discover new
							ways to use money.
						</h2>
						<p
							className="mb-6 text-gray-900 text-center text-xl"
							style={{ maxWidth: "577px" }}
						>
							The Mozacoin Wallet enables users to have a
							multi-asset digital application with access to all
							of its features upon verification.
						</p>
					</div>
					<div className="grid gap-3 row-gap-3 sm:grid-cols-3 ">
						<div className="max-w-md border p-5 bg-gray-100 rounded">
							<img
								className="mb-4 h-20"
								src={require("../assets/images/0.svg")}
								alt=""
							/>
							<h6 className="mb-2 font-semibold leading-5">
								Operate within seconds around the world
							</h6>
							<p className="text-sm text-gray-700">
								Send and receive cryptocurrencies between
								friends from all over the globe.
							</p>
						</div>
						<div className="max-w-md border p-5 bg-gray-100 rounded">
							<img
								className="mb-4 h-20"
								src={require("../assets/images/1.svg")}
								alt=""
							/>
							<h6 className="mb-2 font-semibold leading-5">
								Buy and Sell currencies with ease
							</h6>
							<p className="text-sm text-gray-700">
								Mozacoin offers you several flexible options to
								buy and sell your crypto instantly.
							</p>
						</div>
						<div className="max-w-md border p-5 bg-gray-100 rounded">
							<img
								className="mb-4 h-20"
								src={require("../assets/images/2.svg")}
								alt=""
							/>
							<h6 className="mb-2 font-semibold leading-5">
								Make deposits with your local currency
							</h6>
							<p className="text-sm text-gray-700">
								Deposit your fiat or crypto into your secure
								wallet on Mozacoin and instantly buy and sell.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container flex flex-col space-y-4 justify-center items-center px-4 sm:px-12 mx-auto">
				<div className="sm:px-4 sm:max-w-1/2 space-y-4">
					<h3 className="mt-2 text-3xl sm:text-lg text-center leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
						<h2 className="mt-2 mb-10 text-3xl leading-10 font-black tracking-tight sm:text-5xl sm:leading-relaxed">
							Join one of Africa's leading digital asset platforms
						</h2>
					</h3>
					<div className="text-center test-base text-xl text-bold text-gray-700">
						Here are a few reasons why we are unbeatable on the
						continent
					</div>
				</div>
				<div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl   lg:py-10">
					<div className="grid gap-8 row-gap-5 lg:grid-cols-3">
						<div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
							<div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
							<div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
							<div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
							<div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
							<div className="relative p-5 bg-white rounded-sm">
								<div className="flex flex-col mb-2 lg:items-center lg:flex-row">
									<div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
										<svg
											className="w-8 h-8 text-deep-purple-accent-400"
											stroke="currentColor"
											viewBox="0 0 52 52"
										>
											<polygon
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
												points="29 13 14 29 25 29 23 39 38 23 27 23"
											/>
										</svg>
									</div>
									<h6 className="font-semibold leading-5">
										We work from Africa
									</h6>
								</div>
								<p className="mb-2 text-sm text-gray-900">
									We use Internet as our headquarter from
									Africa and we work all around the world.
								</p>
							</div>
						</div>
						<div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
							<div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
							<div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
							<div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
							<div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
							<div className="relative p-5 bg-white rounded-sm">
								<div className="flex flex-col mb-2 lg:items-center lg:flex-row">
									<div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
										<svg
											className="w-8 h-8 text-deep-purple-accent-400"
											stroke="currentColor"
											viewBox="0 0 52 52"
										>
											<polygon
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
												points="29 13 14 29 25 29 23 39 38 23 27 23"
											/>
										</svg>
									</div>
									<h6 className="font-semibold leading-5">
										Encryption at every step
									</h6>
								</div>
								<p className="mb-2 text-sm text-gray-900">
									We take security in our DNA that is why we
									process to encrypt all information.
								</p>
							</div>
						</div>
						<div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
							<div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
							<div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
							<div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
							<div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
							<div className="relative p-5 bg-white rounded-sm">
								<div className="flex flex-col mb-2 lg:items-center lg:flex-row">
									<div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
										<svg
											className="w-8 h-8 text-deep-purple-accent-400"
											stroke="currentColor"
											viewBox="0 0 52 52"
										>
											<polygon
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
												points="29 13 14 29 25 29 23 39 38 23 27 23"
											/>
										</svg>
									</div>
									<h6 className="font-semibold leading-5">
										100% Cold wallet
									</h6>
								</div>
								<p className="mb-2 text-sm text-gray-900">
									Dont worry about your cryptocurrency, it's
									store totaly offline in the cold wallet.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
      <div className="container px-4 sm:px-12 flex mx-auto sm:mt-12">
        <div className="pb-0 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl border w-full">
        <section>
				<div className="bg-gray-50 pt-12 lg:pt-20 pb-20 radius-for-skewed">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap -mx-4">
							<div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
								<div className="w-full text-center lg:text-left">
									<div className="max-w-md mx-auto lg:mx-0 mb-8 ">
										<h2 className="mt-2 mb-10 text-3xl leading-10 font-black tracking-tight sm:text-5xl sm:leading-relaxed">
											Trading made easy
										</h2>
										<h2 className="font-semibold text-2xl leading-4 lg:leading-10 mb-6">
											Mozacoin offers you several flexible options to buy and sell your crypto. 
										</h2>
										<p
											className="text-base lg:text-lg font-normal w-full mb-10"
											data-v-0981a4ae=""
										>
											Fund emerging, high growth,
											promising innovations at a click of
											the button, invest alongside mission
											driven individuals like you,
											changing the future today.
										</p>
										<div className="bg-grey-lightest border border-dashed border-primary py-6 pl-8 pr-8 lg:pr-0 mb-10 lg:mb-0">
											<ul>
												<li className="flex items-start mb-8">
													<div
														className="mr-4"
														data-v-0981a4ae=""
													>
														<svg
															width="24"
															height="24"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															data-v-0981a4ae=""
														>
															<path
																d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
																fill="#27AE60"
															></path>
														</svg>
													</div>{" "}
													<div data-v-0981a4ae="">
														<h5
															className="text-base font-semibold mb-1"
															data-v-0981a4ae=""
														>
															Easy Funding
														</h5>{" "}
														<p
															className="text-sm text-black-lighter"
															data-v-0981a4ae=""
														>
															Buy & Sell instantly
															with your bank
															accounts or debit
															cards
														</p>
													</div>
												</li>
												<li className="flex items-start mb-8">
													<div
														className="mr-4"
														data-v-0981a4ae=""
													>
														<svg
															width="24"
															height="24"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															data-v-0981a4ae=""
														>
															<path
																d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
																fill="#27AE60"
															></path>
														</svg>
													</div>{" "}
													<div data-v-0981a4ae="">
														<h5
															className="text-base font-semibold mb-1"
															data-v-0981a4ae=""
														>
															Easy Funding
														</h5>{" "}
														<p
															className="text-sm text-black-lighter"
															data-v-0981a4ae=""
														>
															Withdraw cash
															directly to your
															bank account(s)
														</p>
													</div>
												</li>
												<li className="flex items-start mb-8">
													<div
														className="mr-4"
														data-v-0981a4ae=""
													>
														<svg
															width="24"
															height="24"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															data-v-0981a4ae=""
														>
															<path
																d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
																fill="#27AE60"
															></path>
														</svg>
													</div>{" "}
													<div data-v-0981a4ae="">
														<h5
															className="text-base font-semibold mb-1"
															data-v-0981a4ae=""
														>
															Easy Funding
														</h5>{" "}
														<p
															className="text-sm text-black-lighter"
															data-v-0981a4ae=""
														>
															Send Bitcoin,
															Ethereum, Litecoin
															and others fast and
															secure on your
															mobile device
														</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
								<div className="relative" style={{ zIndex: 0 }}>
									<img
										className="rounded-3xl md:rounded-br-none"
										width="325px"
										src={require("../assets/images/deposit.png")}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
      </div>

			<section className="container px-4 sm:px-12 flex flex-col space-y-4 justify-center items-center px-4 mx-auto">
				<div className="my-6 sm:px-4 sm:max-w-1/2 space-y-4">
					<h3 className="mt-2 text-3xl sm:text-lg text-center leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
						<h2 className="mt-2 mb-10 text-3xl leading-10 font-black tracking-tight sm:text-5xl sm:leading-relaxed">
							<span className="text-green-500">Get </span>
							started in 3 easy steps
						</h2>
					</h3>
					<div className="text-center test-base text-xl text-bold text-gray-700">
						Getting started with Mozacoin is simple and can be done
						in just a few steps.
					</div>
				</div>
				<div className="grid gap-8 row-gap-0 lg:grid-cols-3">
					<div className="flex items-center flex-col justify-center text-center relative text-center">
						<div className="flex items-center justify-center text-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-white bg-green-500 sm:mx-auto">
							<p>1</p>
						</div>
						<h6 className="mb-2 text-2xl font-extrabold">
							Create an Account
						</h6>
						<p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
							Sign up for free on our website or download our
							apps(coming soon)
						</p>
						<div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
							<svg
								className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								viewBox="0 0 24 24"
							>
								<line
									fill="none"
									strokeMiterlimit="10"
									x1="2"
									y1="12"
									x2="22"
									y2="12"
								/>
								<polyline
									fill="none"
									strokeMiterlimit="10"
									points="15,5 22,12 15,19 "
								/>
							</svg>
						</div>
					</div>
					<div className="flex items-center flex-col justify-center relative text-center">
						<div className="flex items-center justify-center text-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-white bg-green-500 sm:mx-auto">
							2
						</div>
						<h6 className="mb-2 text-2xl font-extrabold">
							Make deposit
						</h6>
						<p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
							Once your account is setup, you can deposit funds
							into your wallet and start trading.
						</p>
						<div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
							<svg
								className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								viewBox="0 0 24 24"
							>
								<line
									fill="none"
									strokeMiterlimit="10"
									x1="2"
									y1="12"
									x2="22"
									y2="12"
								/>
								<polyline
									fill="none"
									strokeMiterlimit="10"
									points="15,5 22,12 15,19 "
								/>
							</svg>
						</div>
					</div>
					<div className="flex items-center flex-col justify-center relative text-center">
						<div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-white bg-green-500 sm:mx-auto">
							3
						</div>
						<h6 className="mb-2 text-2xl font-extrabold">
							Start buying & selling
						</h6>
						<p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
							Fund your account with FCFA and start trading all
							your favourite assets!
						</p>
					</div>
				</div>
			</section>
		</Layout>
)

export default IndexPage
