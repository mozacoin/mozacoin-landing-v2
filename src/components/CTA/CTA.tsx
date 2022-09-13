import React from "react";

const CTA = () => (
	<div className="min-w-full">
		<div className="mx-auto px-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
			<div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row min-w-full">
				<div className="relative lg:w-1/2">
					<img
						src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
						alt=""
						className="object-cover w-full lg:absolute h-80 lg:h-full"
					/>
					<svg
						className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
						viewBox="0 0 20 104"
						fill="currentColor"
					>
						<polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
					</svg>
				</div>
				<div className="flex flex-col justify-center p-3 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
					<div className="text-left text-teal-900 text-md font-normal mb-4">
						Save it, spend it, send it. It’s up to you.
					</div>
					<h5 className="mb-3 text-2xl font-extrabold leading-none sm:text-4xl space-y-3 sm:leading-relaxed">
						What are you waiting for? Get started today!
					</h5>
					<p className="mb-5 text-gray-800">
						<span className="font-bold">Whatever you </span> want to
						do with your money, you can do it from Mozacoin. We’ll
						make sure it’s done better and hassle-free.
					</p>

					<div className="mb-6 max-w-sm mx-auto lg:mx-0 flex space-x-4">
						<a href="/android">
							<span className="inline-flex rounded-md shadow-sm">
							<a
								href="https://web.mozacoin.com/auth/signup"
								className="whitespace-no-wrap inline-flex items-center justify-center px-6 py-2 border border-transparent text-medium leading-6 font-medium rounded text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline-none transition ease-in-out duration-150"
								>
								Join waitlist
							</a>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default CTA;
