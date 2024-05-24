import { Fade } from "react-awesome-reveal";

export default function Stats() {
  return (
    <div className="bg-green-50 px-4 sm:px-6 lg:px-8">
      <Fade triggerOnce={true}>
        <div className="max-w-7xl rounded-2xl mx-auto bg-gray-900 py-24 relative isolate overflow-hidden child">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="flex flex-row flex-wrap gap-x-8 gap-y-16 text-center ">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-green-600">
                  Mainnet Users
                </dt>
                <dd className="order-first text-3xl font-semibold  text-white sm:text-4xl">
                  10,000+
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-green-600">
                  Community members
                </dt>
                <dd className="order-first text-3xl font-semibold  text-white sm:text-4xl">
                  170,000+
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-green-600">
                  Assets Staked
                </dt>
                <dd className="order-first text-3xl font-semibold  text-white sm:text-4xl  ">
                  $10,000,000+
                </dd>
              </div>

              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-green-600">
                  Total MEV Market
                </dt>
                <dd className="order-first text-3xl font-semibold  text-white sm:text-4xl  ">
                  $1,000,000,000+
                </dd>
              </div>
            </dl>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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
      </Fade>
    </div>
  );
}
