import { Fade } from "react-awesome-reveal";

export default function Features() {
  return (
    <div className="bg-green-50 parent2">
      <section
        id="secondary-features"
        aria-label="Features for building a portfolio"
        className="max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 mx-auto"
      >
        <div className="mx-auto child2">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl lg:text-3xl font-semibold text-gray-900 font-display">
              The community-first MEV platform built to enable{" "}
              <span className="text-green-700">
                flexible capital deployment
              </span>{" "}
              for you
            </h2>
            <p className="mt-5 text-lg text-gray-500">
              Kryptonite pairs liquid staking with both a feeless stablecoin and
              a deflationary mechanism.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-6xl"
          >
            <Fade cascade triggerOnce={true} damping={0.1}>
              <div className="bg-white shadow-2xl shadow-green-700/30 ring-1 ring-green-50 rounded-2xl transition ease-in-out hover:scale-[1.01] hover:opacity-95 duration-300 cursor-default relative">
                <li className="p-8 bg-cover flex flex-row space-x-12">
                  <img className="h-24" src="/card_dark.png" alt="Kryptonite" />
                  <div>
                    <div className="font-display text-2xl text-green-950 mb-4 font-medium">
                      Stake
                    </div>
                    <p className="mt-2 text-gray-700/90 max-w-80 text-base ">
                      Stake your favorite assets and receive incentives and
                      rewards
                    </p>
                  </div>
                </li>
              </div>{" "}
              <div className="bg-white shadow-2xl shadow-green-700/30 ring-1 ring-green-50 rounded-2xl transition ease-in-out hover:scale-[1.01] hover:opacity-95 duration-300 cursor-default relative">
                <li className="p-8 bg-cover flex flex-row space-x-12">
                  <img
                    className="h-24"
                    src="/card_dark_5.png"
                    alt="Kryptonite"
                  />
                  <div>
                    <div className="font-display text-2xl text-green-950 mb-4 font-medium">
                      Community First
                    </div>
                    <p className="mt-2 text-gray-700/90 max-w-80 text-base">
                      Built to enable more flexible capital deployment for you
                    </p>
                  </div>
                </li>
              </div>{" "}
              <div className="bg-white shadow-2xl shadow-green-700/30 ring-1 ring-green-50 rounded-2xl transition ease-in-out hover:scale-[1.01] hover:opacity-95 duration-300 cursor-default relative">
                <li className="p-8 bg-cover flex flex-row space-x-12">
                  <img
                    className="h-24"
                    src="/card_dark_4.png"
                    alt="Kryptonite"
                  />
                  <div>
                    <div className="font-display text-2xl text-green-950 mb-4 font-medium">
                      Feeless
                    </div>
                    <p className="mt-2 text-gray-700/90 max-w-80 text-base ">
                      Feeless stablecoin that's built for capital efficiency
                    </p>
                  </div>
                </li>
              </div>{" "}
              <div className="bg-white  shadow-2xl shadow-green-700/30 ring-1 ring-green-50 rounded-2xl transition ease-in-out hover:scale-[1.01] hover:opacity-95 duration-300 cursor-default relative">
                <li className="p-8 bg-cover flex flex-row space-x-12">
                  <img
                    className="h-20"
                    src="/card_dark_2.png"
                    alt="Kryptonite"
                  />
                  <div>
                    <div className="font-display text-2xl text-green-950 mb-4 font-medium">
                      Deflationary
                    </div>
                    <p className="mt-2 text-gray-700/90 max-w-80 text-base">
                      A unique burning mechanism that makes the native token
                      deflationary
                    </p>
                  </div>
                </li>
              </div>
            </Fade>
          </ul>
        </div>
      </section>
    </div>
  );
}
