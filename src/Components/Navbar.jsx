const Navbar = ({sidebar,setSidebar}) => {
  return (
    <div className="text-black font-Fira pb-20 pt-4">
      <div className="flex items-center h-[46px] justify-between align-element">
        <div>
          {sidebar || (
            <h3 className="flex items-center">
              Card
              <span className="font-bold text-3xl text-[#51cd97] italic">
                X
              </span>
            </h3>
          )}
        </div>
        <ul className="hidden lg:flex gap-6">
          <li className="flex">
            Send & Receive
            <img
              src="/images/arrow_drop_down_24dp_0A4C3E_FILL0_wght400_GRAD0_opsz24.svg"
              alt="drop"
            />
          </li>

          <li className="flex">About Us </li>
          <li className="flex">
            Offers
            <img
              src="/images/arrow_drop_down_24dp_0A4C3E_FILL0_wght400_GRAD0_opsz24.svg"
              alt="drop"
            />
          </li>
          <li className="flex">Contact Us</li>
        </ul>

        <div className=" hidden lg:flex gap-6">
          <button>Login</button>
          <button className="rounded-md text-white bg-[#51cd97] pl-3 pr-3 pt-1.5 pb-1.5">
            Sign Up
          </button>
        </div>
        <button className="lg:hidden" onClick={()=>setSidebar(true)}>
          <img src="/images/menu.png" alt="hamburger" className="w-6" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
