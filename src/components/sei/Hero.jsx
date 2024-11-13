import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <div class="bg-green-50 relative isolate overflow-hidden">
      <main>
        <div class="relative isolate">
          <div class="overflow-hidden">
            <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 sm:px-8 lg:pb-48 lg:pt-60">
              <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="flex flex-col relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <Fade triggerOnce={true}>
                    {" "}
                    <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl font-display">
                      Sei Network's premier liquid staking and core pillar DeFi
                      protocol
                    </h1>
                  </Fade>

                  <Fade triggerOnce={true} delay={400}>
                    <p class="mt-6 text-lg text-gray-600 sm:max-w-md lg:max-w-none">
                      Unlocking your locked liquidity within the Sei ecosystem
                      using a combination or lous and staelecons
                    </p>
                  </Fade>

                  <Fade triggerOnce={true} delay={800}>
                    <div class="mt-10 flex items-center gap-x-6">
                      <a
                        href="https://app.kryptonite.finance/sei"
                        target="_blank"
                        class="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
                      >
                        Launch app
                      </a>
                      <a
                        class="text-sm font-semibold leading-6 text-gray-900"
                        href="https://www.kryptonite.finance/litepaper"
                        target="_blank"
                      >
                        Litepaper <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <svg
        viewBox="0 0 1024 1024"
        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] opacity-50"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
          fillOpacity="0.7"
        ></circle>
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#22c55e"></stop>
            <stop offset="1" stopColor="#15803d"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
