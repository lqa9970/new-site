import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <nav className="z-50 flex justify-center w-full py-8 text-center transition-all duration-1000 h-1/5 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
        <div className="container flex items-center justify-between ">
          <div className="text-3xl font-semibold lg:text-4xl">
            <Link to="/"> Quang Anh</Link>
          </div>
          <ul className="items-center justify-between hidden w-1/2 space-x-8 text-xl lg:flex">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="#About" className="">
                About me
              </Link>
            </li>
            <li>
              <Link to="/tech/#stack" className="">
                Stacks
              </Link>
            </li>
            <li>
              <Link to="/tech#projects" className="">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="">
                Contact
              </Link>
            </li>
          </ul>
          {/* <button className="hidden text-base lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            anhlequang1998@gmail.com
          </button> */}
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
    </div>
  );
};

export default Navbar;
