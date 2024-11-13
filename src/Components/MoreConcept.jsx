const MoreConcept = () => {
  return (
    <section className="align-element mt-10 lg:mt-20 font-Fira">
      <div className="grid place-items-center gap-4 md:flex md:justify-evenly md:gap-1">
        <div className="rounded-md shadow-md pl-6 pt-2 pr-6 h-44 w-72">
          <div>
            <img
              src="/images/encrypted_60dp_000000_FILL0_wght400_GRAD0_opsz48.svg"
              alt="24enc"
              className="pb-2 w-9"
            />
            <h3 className="font-medium capitalize text-lg">
              256 bit encryption
            </h3>
          </div>

          <p className="w-40 text-sm pt-4">
            Your data secure with 256 bit encryption
          </p>
        </div>
        <div className="rounded-md shadow-md pl-8 pt-2 pr-8 w-72 h-44 ">
          <div>
            <img
              src="/images/no-credit-card_3408793.png"
              alt="sec"
              className="w-9 pb-2"
            />
            <h3 className="font-medium capitalize text-lg">No hidden Fees</h3>
          </div>

          <div className="w-40 text-sm pt-4">
            <p>No joining Fees</p>
            <p>No annual fees</p>
            <p>No hidden fees ever</p>
          </div>
        </div>
        <div className="rounded-md shadow-md pl-8 pt-2 pr-8 w-72 h-44 ">
          <div>
            <img src="/images/football.png" alt="pics" className="w-9 pb-2" />
            <h3 className="font-medium capitalize text-lg">
              5X rewards on top spend
            </h3>
          </div>
          <div className="w-40 text-sm pt-4">
            <p>Points are credited instantly and never expire</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreConcept
