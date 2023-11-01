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
        <div className="text-3xl font-semibold lg:text-4xl">
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
      <button onClick={openModal} className="lg:hidden">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
            <div
              onClick={closeModal}
              className="fixed inset-0 flex items-center bg-black bg-opacity-50 z-1 backdrop-blur-sm"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-2/3 p-8 m-auto bg-white z-3"
              >
                <p className="text-red-700">ABC</p>
                <button onClick={closeModal} className="text-red-500">
                  X
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
