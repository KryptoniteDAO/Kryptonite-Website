import { Slide, Fade } from "react-awesome-reveal";

export default function GetStarted() {
  return (
    <div class="px-6 py-24 lg:px-8 bg-gradient-to-b from-green-950 to-green-950 relative isolate overflow-hidden">
      <div class="lg:mx-auto text-center flex flex-row items-start lg:items-center lg:justify-center">
        <img
          class="h-64 mr-32 hidden lg:flex"
          src="/rocket_dark.png"
          alt="Kryptonite"
        />

        <div class="flex flex-col text-start">
          <h2 class="text-3xl  text-white sm:text-4xl font-display">
            Ready to get started?
          </h2>
          <div class="mt-10 flex items-start justify-strat gap-x-6">
            <a
              href="https://app.kryptonite.finance/"
              target="_blank"
              class="rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Stake now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
