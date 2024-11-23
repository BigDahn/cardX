const Hero = () => {
  return (
    <main className="font-Fira align-element lg:mt-20 lg:mb-0">
      <div className="grid grid-rows-2 items-center gap-3 md:flex lg:justify-between md:items-center  lg:h-96">
        <div className="grid place-items-center order-last md:order-first md:place-items-start">
          <div className=" text-center  md:w-96 lg:w-96  md:text-left ">
            <h3 className="capitalize text-black font-bold text-[2.2rem] text-wrap ">
              we take your money matters seriously
            </h3>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, minus.
            </p>
          </div>
          <button className="flex items-center justify-between  gap-4 rounded-full  pl-3 pr-3 pt-3 pb-3 uppercase font-semibold bg-[#51cd97] text-white ">
            Apply now
            <span className="rounded-full border bg-white">
              <img
                src="/images/arrow_right_alt_24dp_0A4C3E_FILL0_wght400_GRAD0_opsz24.svg"
                alt="hero"
              />
            </span>
          </button>
        </div>
        <img src="/images/4113361.jpg" alt="hero" className="w-screen md:w-[400px] lg:w-[600px]" />
      </div>
    </main>
  )
}

export default Hero
