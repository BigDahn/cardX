

const DashboardControl = () => {
  return (
    <main className="align-element font-Fira  mt-20">
      <article className="md:flex md:justify-evenly md:items-center">
        <div className="grid place-items-center text-center md:text-left md:place-items-start">
          <h3 className="font-medium text-3xl pb-3">
            A Dashboard to Keep Control Over Your Account Switch
          </h3>
          <p className="md:w-96">
            This plan is based on an analysis of your transactions, for a
            simple, hassle-free transition. Once you've completed all the steps,
            close your previous account with peace of mind.
          </p>
          <button className="uppercase font-semibold mb-3  pl-3 pr-3 pt-1 pb-1 rounded-md mt-3 bg-[#51cd97]  text-white md:mb-0">
            Learn More
          </button>
        </div>
        <div>
          <img src="/public/images/6029521.jpg" alt="" className="w-[65rem]" />
        </div>
      </article>
    </main>
  )
}

export default DashboardControl
