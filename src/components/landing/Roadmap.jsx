import { Fade } from "react-awesome-reveal";

export default function Roadmap() {
  return (
    <div
      class="bg-gray-900 border-t relative overflow-hidden
     isolate"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div class="text-3xl lg:text-4xl leading-6 text-green-50">
            Roadmap
          </div>
          <Fade cascade damping={0.1}>
            <div>
              <time
                dateTime="2021-12"
                class="flex items-center text-sm text-green-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                Q1 2024
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-green-600 -/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </time>
              <p class="mt-6 text-base leading-7 text-green-100 ">
                - Coming soon..
              </p>
              <p class="mt-1 text-base leading-7 text-green-100 ">
                - Coming soon..
              </p>
            </div>
            <div>
              <time
                dateTime="2022-02"
                class="flex items-center text-sm leading-6 text-green-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                Q2 2024
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-green-600 -/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </time>
              <p class="mt-6 text-base leading-7 text-green-100 ">
                - Coming soon..
              </p>
              <p class="mt-1 text-base leading-7 text-green-100 ">
                - Coming soon..
              </p>
            </div>
            <div>
              <time
                dateTime="2022-12"
                class="flex items-center text-sm leading-6 text-green-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                Q3 2024
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-green-600 -/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </time>
              <p class="mt-6 text-base leading-7 text-green-100">
                - Coming soon..
              </p>
              <p class="mt-1 text-base leading-7 text-green-100 ">
                - Coming soon..
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217"></radialGradient>
        </defs>
      </svg>
    </div>
  );
}
