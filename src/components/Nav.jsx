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
    <div className="">
      <div className="">
        <Disclosure
          as="nav"
          className={`font-light fixed w-screen z-50  ${
            isScrollUp ? "" : "hidden"
          }  ${scaleX > 0.1 ? " bg-green-50" : ""}`}
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="h-14 flex sm:block justify-between items-center">
                  <div className="flex flex-row justify-between mt-4">
                    <div className="flex flex-shrink-0 items-center">
                      <a href="/" aria-current="page">
                        <img
                          className="h-6 w-auto"
                          src="/logo-black.png"
                          alt="Kryptonite"
                        />
                      </a>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                      <a
                        href="/sei"
                        className="px-4 py-2 text-md"
                        aria-current="page"
                      >
                        Sei
                      </a>
                      <a
                        href="/nibiru"
                        className="px-4 py-2 text-md"
                        aria-current="page"
                      >
                        Nibiru
                      </a>
                      <a
                        href="https://discord.com/invite/kryptonite-fi"
                        target="_blank"
                        className="px-4 py-2 text-md"
                      >
                        Community
                      </a>
                      <a
                        href="https://docs.kryptonite.finance/"
                        target="_blank"
                        className="px-4 py-2 text-md"
                      >
                        Document
                      </a>
                      <div className="md:flex hidden items-center pl-4">
                        <a
                          href="https://app.kryptonite.finance/"
                          target="_blank"
                          className="rounded-lg bg-gray-900 w-[160px] py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
                        >
                          Stake now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2  items-center hidden mt-4">
                    <Disclosure.Button
                        className="relative inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 256 256"
                          className="text-blue"
                        >
                          <path
                            fill="currentColor"
                            d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="text-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 17h18M3 12h18M3 7h18"
                          />
                        </svg>
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
