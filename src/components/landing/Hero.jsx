import { scroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  const [scaleX, setScaleX] = useState();
  const [isScrollUp, setIsScrollUp] = useState(true);

  useEffect(() => {
    scroll((progress) => {
      setScaleX((prev) => {
        if (prev) setIsScrollUp(!!(prev > progress));

        return progress;
      });
    });
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-400/20 to-green-50 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-green-50  shadow-xl shadow-green-700/10 ring-1 ring-green-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl lg:col-span-2 xl:col-auto">
            <Fade triggerOnce={true} delay={1600}>
              <div className="flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 mb-8 w-min">
                <span className="font-semibold text-grey-600 whitespace-nowrap">
                  Powered by
                </span>
                <span
                  className="h-4 w-px bg-gray-900/10"
                  aria-hidden="true"
                ></span>
                <a
                  href="/sei"
                  className="flex items-center gap-x-1 hover:text-green-800"
                >
                  Sei
                </a>
              </div>
            </Fade>

            <Fade triggerOnce={true}>
              <div className="text-4xl font-bold text-gray-900 sm:text-6xl font-display">
                Unlock the <span className="">full earning potential</span> of
                your LSDs
              </div>
            </Fade>
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <Fade triggerOnce={true} delay={400}>
              <p className="text-lg   text-gray-600">
                Maximize your staking strategies with the premier MEV
                platform offering unmatched leverage.
              </p>
            </Fade>

            <Fade triggerOnce={true} delay={800}>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://app.kryptonite.finance/"
                  target="_blank"
                  className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
                >
                  Launch app
                </a>
                <a
                  href="https://www.kryptonite.finance/litepaper"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  target="_blank"
                >
                  Litepaper <span aria-hidden="true">→</span>
                </a>
              </div>
            </Fade>
          </div>
          <Fade triggerOnce={true} className="mt-10 xl:row-span-2 xl:row-end-2">
            <img
              src="/hero_dark.png"
              alt=""
              className="aspect-[6/5] w-full max-w-lg rounded-2xl object-contain sm:mt-16 lg:mt-0 lg:max-w-none xl:mt-36"
            />
          </Fade>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-green-50 sm:h-32" />
    </div>
  );
}
