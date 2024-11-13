import React from 'react'

const MidSection = () => {
  return (
    <main className="align-element font-Fira pt-10 mb-10 mt-20">
      <h2 className="text-3xl mb-5">Manage Your Finances With Ease </h2>

      <div>
        <div className="grid place-items-center md:grid-cols-2 gap-4 ">
          <div className=" grid place-items-center w-[300px] p-8 border bg-white rounded-md shadow-lg md:flex md:justify-between md:items-center md:gap-2 lg:p-5 lg:w-[530px] md:w-[450px]  md:p-5">
            <div>
              <img
                src="/images/part1.png"
                alt="picture"
                className=" w-[220px]  pt-2   md:rotate-[-28deg] md:w-[500.48px]"
              />
            </div>
            <img
              src="/images/part1b.png"
              alt="picture"
              className="w-24 relative right-[70px] top-[-100px] lg:top-[-26px] md:top-[-30px] md:right-[150px]
              lg:right-[180px] rotate-[-30deg] md:w-16"
            />
            <div>
              <h1 className="capitalize font-semibold">Micro Business</h1>
              <p className="pb-2 lg:pb-3">
                Stay Focused on your core business by managing your finances and
                accounting from one place
              </p>
              <button className="capitalize flex items-center gap-1">
                find out more
                <span>
                  <img
                    src="/images/arrow_right_alt_24dp_0A4C3E_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="more"
                  />
                </span>
              </button>
            </div>
          </div>
          <div className=" grid place-items-center w-[300px] p-8 border bg-white rounded-md shadow-lg md:flex md:justify-between md:items-center md:gap-2 lg:p-8 lg:w-[530px] md:w-[450px] md:p-9 ">
            <div>
              <img
                src="/images/part2.png"
                alt="p1"
                className=" w-[220px]  pt-2   md:rotate-[-28deg] md:w-[400.48px]"
              />
            </div>
            <div className="border rounded-md p-0  shadow-md  bg-white  text-[10px] relative right-[60px] top-[-100px] md:top-[-30px] lg:top-[-26px] lg:right-[170px] md:right-[130px] rotate-[-30deg] md:text-[6px]">
              <div className="grid h-[72px]  p-2">
                <p className="flex gap-2 justify-between text-nowrap h-5">
                  Cash Withdrawal
                  <span>
                    <label className="relative flex items-center mb-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked
                      />
                      <div className="w-8 h-4 bg-gray-200 hover:bg-gray-300 peer-focus:outline-none  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700 md:w-6 md:h-3 md:after:h-2 md:after:w-2 "></div>
                    </label>
                  </span>
                </p>
                <p className="flex gap-2 justify-between h-5 text-nowrap ">
                  Contactiess Payment
                  <span>
                    <label className="relative flex items-center mb-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked
                      />
                      <div className="w-8 h-4 bg-gray-200 hover:bg-gray-300 peer-focus:outline-none  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700 md:w-6 md:h-3 md:after:h-2 md:after:w-2 "></div>
                    </label>
                  </span>
                </p>
                <p className="flex justify-between gap-2 ">
                  Online Payment
                  <span>
                    <label className="relative flex items-center mb-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        disabled
                      />
                      <div className="w-8 h-4 bg-gray-200 hover:bg-gray-300 peer-focus:outline-none  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700 md:w-6 md:h-3 md:after:h-2 md:after:w-2 "></div>
                    </label>
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h1 className="capitalize font-semibold">SMBs & Startup</h1>
              <p className="pb-2 lg:pb-3">
                Optimize and reduce your team’s expenses by always staying in
                control.
              </p>
              <button className="capitalize flex items-center gap-1">
                find out more
                <span>
                  <img
                    src="/images/arrow_right_alt_24dp_0A4C3E_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="more"
                  />
                </span>
              </button>
            </div>
          </div>
          <div className=" grid place-items-center w-[300px] p-8 border bg-white rounded-md shadow-lg md:flex md:justify-evenly md:items-center md:gap-1 lg:p-6 lg:w-[530px]  md:w-[450px] md:p-5 ">
            <div>
              <img
                src="/public/images/part3.png"
                alt="p3"
                className=" w-[200px]  pt-2   md:rotate-[-28deg] lg:w-[400px] md:w-[340px] md:pl-0 lg:pl-2"
              />
            </div>
            <div className="border rounded-md flex justify-between bg-gray-200 gap-3 pl-1 pr-1  items-center  h-16 relative right-[60px] top-[-120px] lg:top-[-26px] lg:right-[140px] md:top-[-30px] md:right-[100px] rotate-[-28deg] shadow-lg ">
              <div>
                <div className="border rounded-lg bg-blue-700 h-10 w-10 items-center grid place-items-center">
                  <p className="text-white">X</p>
                </div>
              </div>
              <div className="text-[10px] w-[100px] text-wrap">
                <p>New Incoming Transfer of €4343.00 from Malt Community.</p>
              </div>
            </div>
            <div>
              <h1 className="capitalize font-semibold">Freelancer</h1>
              <p className="pb-2 md:pb-3">
                The best business account to send and receive payment on a daily
                basis.
              </p>
              <button className="capitalize flex items-center gap-1">
                find out more
                <span>
                  <img
                    src="/images/arrow_right_alt_24dp_0A4C3E_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="more"
                  />
                </span>
              </button>
            </div>
          </div>
          <div className=" grid place-items-center w-[300px] p-8 border bg-white rounded-md shadow-lg md:flex md:justify-between lg:items-center md:gap-2 lg:p-4 md:p-9 lg:w-[530px] md:w-[450px] ">
            <div>
              <img
                src="/images/part4.png"
                alt="p4"
                className=" w-[220px]  pt-2   md:rotate-[-1deg] lg:ml-11 md:w-[200px] lg:w-[160px] md:ml-10"
              />
            </div>
            <img
              src="/images/part4b.png"
              alt="pb4"
              className="w-24 relative rotate-[-30deg] right-[70px] top-[-100px] lg:top-[-10px] lg:right-[110px] lg:rotate-[-20deg] lg:w-22 md:w-20 md:top-[-10px] md:right-[100px]"
            />
            <div>
              <h1 className="capitalize font-semibold">Business Founder</h1>
              <p className="pb-2 md:pb-3">
                Open a business account for the online deposit of your share
                capital
              </p>
              <button className="capitalize flex items-center gap-1">
                find out more
                <span>
                  <img
                    src="/images/arrow_right_alt_24dp_0A4C3E_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="more"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MidSection
