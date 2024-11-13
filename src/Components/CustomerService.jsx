const CustomerService = () => {
  return (
    <section className="mt-10 align-element font-Fira">
      <article className=" grid md:flex md:justify-evenly md:items-center">
        <img
          src="/images/4441866.jpg"
          alt="picture"
          className="w-[450px] order-last"
        />
        <div className="grid place-items-center md:place-items-start">
          <h3 className="text-3xl mb-3  text-center font-semibold  md:w-96 md:text-left">
            24 HOURS CUSTOMER CARE SERVICE
          </h3>
          <p className=" mb-2 md:w-96">
            We provide 24-hours solution to any problem you might encounter.We
            are here for you!!🥰
          </p>
          <button className="mt-2 border rounded-md pr-3 pl-3 pt-1 pb-1 flex items-center gap-2 font-semibold text-white bg-[#51cd97]">
            Contact Us
            <img
              src="/images/support_agent_22dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              alt="support"
            />
          </button>
        </div>
      </article>
    </section>
  )
}

export default CustomerService
