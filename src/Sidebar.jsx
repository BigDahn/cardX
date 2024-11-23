const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <main
      className={`${
        sidebar
          ? ` bg-[#d5f7e6]  h-full w-[68%] overflow-x-hidden fixed top-0 right-0 z-50  -translate-x-30 ease-linear transition-all duration-300 delay-100  `
          : ` bg-[#d5f7e6]  h-full w-full overflow-x-hidden fixed top-0 right-0 z-50  translate-x-full ease-linear transition-all duration-300  delay-100   `
      }`}
    >
      <section className="grid grid-rows-3 gap-10 align-element">
        <div>
          <div className="flex justify-between mt-6 ">
            <div>
              <h3 className="flex items-center font-Fira">
                Card
                <span className="font-bold text-3xl text-[#51cd97] italic">
                  X
                </span>
              </h3>
            </div>
            <button onClick={() => setSidebar(false)}>
              <img
                src="/images/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                alt="close"
              />
            </button>
          </div>
        </div>
        <div>
          <ul className="grid gap-4 place-items-center font-Fira text-black font-semibold">
            <li className="">Send & Receive</li>

            <li className="">About Us </li>
            <li className="">Offers</li>
            <li className="">Contact Us</li>
          </ul>
        </div>
        <div>
          <div className="grid place-items-center gap-3 font-Fira font-semibold ">
            <button>Login</button>
            <button className="rounded-md text-white bg-[#51cd97] pl-3 pr-3 pt-1.5 pb-1.5">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Sidebar
