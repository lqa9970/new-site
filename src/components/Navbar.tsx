import { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-center w-full py-8 text-center transition-all duration-1000 h-1/5 bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-50">
      <div className="container flex items-center justify-between ">
        <div className="ml-2 text-3xl font-semibold lg:text-4xl">
          <NavHashLink to="/#home"> Quang Anh</NavHashLink>
        </div>
        <ul className="items-center justify-between hidden w-1/2 space-x-8 text-xl lg:flex ">
          <li className="hover:text-sky-400">
            <NavHashLink to="/#home" className="">
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#about" className="hover:text-sky-400">
              About me
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#stacks" className="hover:text-sky-400">
              Stacks
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#timeline" className="hover:text-sky-400">
              Projects
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#contact" className="hover:text-sky-400">
              Contact
            </NavHashLink>
          </li>
        </ul>
      </div>
      <button onClick={openModal} className="mr-2 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 flex items-center justify-center h-screen">
            <div
              onClick={closeModal}
              className={`fixed inset-0 flex items-center bg-black bg-opacity-50 z-[999] backdrop-blur-sm transition-transform ${
                showModal
                  ? "transform translateX(0)"
                  : "transform translateX(100%)"
              }`}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 w-1/2 h-full py-8 bg-slate-50 dark:bg-slate-900"
              >
                <ul className="flex flex-col w-2/3 m-auto text-lg h-1/3">
                  <li className="w-full hover:text-sky-400 min-h-[40px] h-[14%]">
                    <NavHashLink to="/#home" className="flex justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Home
                    </NavHashLink>
                  </li>
                  <li className="hover:text-sky-400 min-h-[40px] h-[14%]">
                    <NavHashLink to="/#home" className="flex justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                      About me
                    </NavHashLink>
                  </li>
                  <li className="hover:text-sky-400 min-h-[40px] h-[14%]">
                    <NavHashLink to="/#home" className="flex justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                        />
                      </svg>
                      Stacks
                    </NavHashLink>
                  </li>
                  <li className="hover:text-sky-400 min-h-[40px] h-[14%]">
                    <NavHashLink to="/#timeline" className="flex justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                        />
                      </svg>
                      Projects
                    </NavHashLink>
                  </li>
                  <li className="hover:text-sky-400 min-h-[40px] h-[14%]">
                    <NavHashLink to="/#contact" className="flex justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                        />
                      </svg>
                      Contact
                    </NavHashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
