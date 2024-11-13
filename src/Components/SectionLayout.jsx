

const SectionLayout = () => {
  return (
    <section className="align-element mt-20 font-Fira">
      <div className="md:flex md:justify-evenly md:items-center">
        <div>
          <img
            src="/public/images/6204100.jpg"
            alt=""
            className="w-[400px] lg:w-[500px]"
          />
        </div>
        <div className="grid place-items-center md:place-items-start">
          <h3 className="font-medium pb-2 text-3xl text-center mt-2 md:w-96 md:text-left md:mt-0">
            Get Access to all the Best Payment Methods for Your Company
          </h3>
          <ul>
            <li className="flex gap-2 items-center">
              <img
                src="/public/images/icons8-checkmark-32.png"
                alt="icon"
                className="w-4"
              />
              Mastercard for you and all your team.
            </li>
            <li className="flex gap-2 items-center">
              <img
                src="/public/images/icons8-checkmark-32.png"
                alt="icon"
                className="w-4"
              />
              Apple pay and google pay for simple and fast payments.
            </li>
            <li className="flex gap-2 items-center">
              <img
                src="/public/images/icons8-checkmark-32.png"
                alt="icon"
                className="w-4"
              />
              Send and receive transfer in france and globally.
            </li>
            <li className="flex gap-2 items-center">
              <img
                src="/public/images/icons8-checkmark-32.png"
                alt="icon"
                className="w-4"
              />
              Get access to check deposit, a payment terminal, etc.
            </li>
          </ul>
          <button className="capitalize text-white pl-3 pr-3 pt-1 pb-1 rounded-md font-bold mt-2 bg-[#51cd97] ">
            Read more
          </button>
        </div>
      </div>
    </section>
  )
}

export default SectionLayout


