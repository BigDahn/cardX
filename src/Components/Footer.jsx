

const Footer = () => {
  return (
    <footer className=" mt-10 font-Fira ">
      <section className="align-element grid ">
        <article className="md:flex md:justify-between gap-10 items-center md:h-80">
          <div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-2xl flex items-center ">
                Card<span className="text-3xl text-[#51cd97] italic">X</span>
              </h3>
              <p className="w-80 text-[14px] mb-2">
                Qonto is a Payment Institution (registration number 16958),
                supervised by the ACPR (Banque de France).
              </p>
              <h4 className="font-semibold mb-3">Download Now</h4>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 border rounded-lg pl-5 pr-5 bg-white">
                <img
                  src="/public/images/apple-black-logo-svgrepo-com.svg"
                  alt="apple"
                  className="w-3 md:w-7"
                />
                <div>
                  <h3 className="text-[10px] font-semibold md:text-[11px]">
                    Download on the
                  </h3>
                  <p>App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-2  border rounded-lg pl-5 pr-5 pt-2 pb-1.5 bg-white">
                <img
                  src="/public/images/google-play-store-logo-svgrepo-com.svg"
                  alt="google"
                  className="w-3 md:w-7"
                />
                <div>
                  <h3 className="text-[10px] font-semibold md:text-[11px]">
                    
                    ANDROID App On
                  </h3>
                  <p>Google Play</p>
                </div>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4  m-4  md:flex md:justify-evenly md:gap-10 md:m-0">
            <ul className="text-sm">
              <h1 className="font-semibold">About</h1>
              <li className="pb-1 pt-1">Our story</li>
              <li className="pb-1">Our customers</li>
              <li className="pb-1">Blog</li>
              <li className="pb-1">Legal documents</li>
              <li className="pb-1">Cookies</li>
              <li> Privacy policy</li>
            </ul>
            <ul className="text-sm">
              <h1 className="font-semibold">Useful Links</h1>
              <li className="pb-1 pt-1">Media kit </li>
              <li className="pb-1">Newsroom</li>
              <li className="pb-1">Become a partner</li>
              <li className="pb-1">Affiliate program</li>
              <li>Careers</li>
            </ul>
            <ul className="text-sm">
              <h1 className="font-semibold">Help</h1>
              <li className="pb-1 pt-1">Banking</li>
              <li className="pb-1">comparators</li>
              <li className="pb-1">Customer</li>
              <li className="pb-1">support</li>
              <li>Security</li>
            </ul>
            <ul className="text-sm">
              <h1 className="font-semibold">Product</h1>
              <li className="pb-1 pt-1">Pricing</li>
              <li className="pb-1">Changelog</li>
              <li>API</li>
            </ul>
          </div>
        </article>
        <div className="border-t-2 border-[#d5f7e6]">
          <div className="flex justify-between pt-3 pb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              Copyright 2010 - 2021{' '}
             <div>
               <h2 className="flex ">
                Card<span className="text-[25px] text-[#51cd97] italic">X</span>
              </h2>
             </div>
            </h3>
            <div
              className="
            flex gap-3"
            >
              <img
                src="/public/images/facebook-2-logo-svgrepo-com.svg"
                alt="fb"
                className="w-4"
              />
              <img
                src="/public/images/11053970_x_logo_twitter_new_brand_icon.svg"
                alt="twitter"
                className="w-3"
              />
              <img
                src="/public/images/instagram-2-1-logo-svgrepo-com.svg"
                alt="instagram"
                className="w-3"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
