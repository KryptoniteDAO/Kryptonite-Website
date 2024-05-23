import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <div class="bg-green-50 relative isolate overflow-hidden">
      <section
        id="secondary-features"
        aria-label="Features for building a portfolio"
        class="max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 mx-auto"
      >
        <div class="child2">
          <div class="flex flex-row justify-between">
            <div class="max-w-2xl sm:text-left">
              <h2 class="text-3xl lg:text-3xl font-semibold text-gray-900 font-display">
                On-chain value
              </h2>
              <p class="mt-5 text-lg text-gray-500">
                SEILOR tokens offer a variety of utilities to holders and
                stakers. These collectively make it among the most high-utility
                LSD tokens ever.
              </p>
            </div>
          </div>
          <ul
            role="list"
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 lg:grid-cols-4 sm:grid-cols-2 md:gap-y-10 lg:max-w-7xl"
          >
              <div class="bg-white shadow-2xl shadow-green-700/30 ring-1 ring-green-50 rounded-2xl transition ease-in-out hover:scale-[1.01] hover:opacity-95 duration-300 cursor-default relative">
                <li class="p-8 bg-cover flex flex-row space-x-12">
                  <div>
                    <div class="font-display text-2xl text-green-950 mb-4 font-medium">
                      Nodes
                    </div>
                    <p class="mt-2 text-gray-700/90 max-w-80 text-base">
                      Stakers of SEILOR can assign DAO-vetted node operators,
                      bringing additional value locked to the protocol.
                    </p>
                  </div>
                </li>
              </div>

            <div class="bg-white shadow-2xl shadow-green-700/30 ring-1 ring-green-50 rounded-2xl transition ease-in-out hover:scale-[1.01] hover:opacity-95 duration-300 cursor-default relative">
              <li class="p-8 bg-cover flex flex-row space-x-12">
                <div>
                  <div class="font-display text-2xl text-green-950 mb-4 font-medium">
                    Incentives
                  </div>
                  <p class="mt-2 text-gray-700/90 max-w-80 text-base">
                    SEILOR holders vote to approve incentives & rewards for
                    contributors towards the utility of the protocol.
                  </p>
                </div>
              </li>
            </div>
            <div class="bg-white shadow-2xl shadow-green-700/30 ring-1 ring-green-50 rounded-2xl transition ease-in-out hover:scale-[1.01] hover:opacity-95 duration-300 cursor-default relative">
              <li class="p-8 bg-cover flex flex-row space-x-12">
                <div>
                  <div class="font-display text-2xl text-green-950 mb-4 font-medium">
                    Fees
                  </div>
                  <p class="mt-2 text-gray-700/90 max-w-80 text-base">
                    SEILOR stakers receive reduced fees across the money markets
                    products for liquid staked SEI.
                  </p>
                </div>
              </li>
            </div>
            <div class="bg-white shadow-2xl shadow-green-700/30 ring-1 ring-green-50 rounded-2xl transition ease-in-out hover:scale-[1.01] hover:opacity-95 duration-300 cursor-default relative">
              <li class="p-8 bg-cover flex flex-row space-x-12">
                <div>
                  <div class="font-display text-2xl text-green-950 mb-4 font-medium">
                    Premium Features
                  </div>
                  <p class="mt-2 text-gray-700/90 max-w-80 text-base">
                    Based on the amount staked, SEILOR stakers unlock higher
                    leverage, better lending rates, are first to get new LSD
                    utilities and other features.
                  </p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}
