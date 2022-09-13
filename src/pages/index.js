import * as React from "react"
import Layout from "../components/Layout/Layout"
import depositScreenshot from "../assets/images/deposit.png"
import Item from "../components/Item/Item"

const IndexPage = () => (
  <Layout>
    <div className="space-y-8">
      <div className="container sm:px-12 flex mx-auto">
        <div className="pb-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-full">
          <section>
            <div className="pt-12 lg:pt-20 pb-20 radius-for-skewed">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                    <div className="w-full text-center lg:text-left">
                      <div className="max-w-lg mx-auto lg:mx-0 mb-8">
                        <h2 className="mt-2 mb-4 text-3xl leading-8 font-black tracking-tight sm:text-5xl sm:leading-relaxed">
                          The only wallet that you need for you crypto experience.
                        </h2>
                        <h2 className="font-semibold text-medium leading-6 lg:leading-8 mb-4">
                          Mozacoin offers you several flexible options to manage your crypto porfolio.
                        </h2>
                        <p
                          className="text-base font-normal w-full mb-6"
                        >
                          Fund emerging, high growth, promising innovations at a
                          click of the button, invest alongside mission driven
                          individuals like you, changing the future today.
                        </p>
                        <a
                          href="https://web.mozacoin.com/auth/signup"
                          className="whitespace-no-wrap inline-flex items-center justify-center px-6 py-2 border border-transparent text-medium leading-6 font-medium rounded text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline-none transition ease-in-out duration-150"
                        >
                          Join waitlist
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                    <div className="relative" style={{ zIndex: 0 }}>
                      <img
                        className="rounded-3xl md:rounded-br-none w-64"
                        src={depositScreenshot}
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

      <div className="mx-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="max-w-xxl sm:pr-16 mx-auto flex flex-col items-center align-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 p-3 text-center">
            Join one of Africa's leading digital asset platforms
          </h2>
          <h2 className="text-2xl font-extrabold tracking-tight mb-4 p-3 text-center">
            Explore Mozacoin and discover new ways to use money.
          </h2>
          <p
            className="mb-6 text-gray-900 text-center text-base"
            style={{ maxWidth: "577px" }}
          >
            The Mozacoin Wallet enables users to have a multi-asset digital
            application with access to all of its features upon verification.
          </p>
        </div>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-10">
          <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
            <Item
              title="We work from Africa"
              description="We use Internet as our headquarter from Africa and we work all around the world."
            />
            <Item
              title="Encryption at every step"
              description="We take security in our DNA that is why we process to encrypt all information."
            />
            <Item
              title="100% Cold wallet"
              description="Dont worry about your cryptocurrency, it's store totaly offline in the cold wallet."
            />
          </div>
        </div>
      </div>
      <div className="container sm:px-12 flex mx-auto">
        <div className="pb-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-full">
          <section>
            <div className="radius-for-skewed">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                    <div className="w-full text-center lg:text-left">
                      <div className="max-w-md mx-auto lg:mx-0 mb-8 ">
                        <h2 className="mb-3 text-3xl leading-10 font-black tracking-tight sm:text-5xl sm:leading-relaxed">
                          Trading made easy
                        </h2>
                        <h2 className="font-semibold text-2xl leading-8 lg:leading-10 mb-6">
                          Mozacoin offers you several flexible options to buy
                          and sell your crypto.
                        </h2>
                        <p
                          className="text-base lg:text-lg font-normal w-full mb-10"
                          data-v-0981a4ae=""
                        >
                          Fund emerging, high growth, promising innovations at a
                          click of the button, invest alongside mission driven
                          individuals like you, changing the future today.
                        </p>
                        <div className="bg-grey-lightest border border-dashed border-primary py-6 pl-8 pr-8 lg:pr-0 mb-10 lg:mb-0">
                          <ul>
                            <li className="flex items-start mb-8">
                              <div className="mr-4" data-v-0981a4ae="">
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
                              <div data-v-0981a4ae="" className="text-left">
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
                                  Buy & Sell instantly with your bank accounts
                                  or debit cards
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start mb-8">
                              <div className="mr-4" data-v-0981a4ae="">
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
                              <div data-v-0981a4ae="" className="text-left">
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
                                  Withdraw cash directly to your bank account(s)
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start mb-8">
                              <div className="mr-4" data-v-0981a4ae="">
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
                              <div data-v-0981a4ae="" className="text-left">
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
                                  Send Bitcoin, Ethereum, Litecoin and others
                                  fast and secure on your mobile device
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
                        className="rounded-3xl md:rounded-br-none w-64"
                        src={depositScreenshot}
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
    </div>
  </Layout>
)

export default IndexPage
