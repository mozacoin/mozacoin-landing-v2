import React from "react";

const GetStartedStep = () => (
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
);

export default GetStartedStep;
