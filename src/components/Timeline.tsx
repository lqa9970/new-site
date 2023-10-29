import { useState } from "react";
import { Chrono } from "react-chrono";

import img1 from "../images/next.png";
import img2 from "../images/vue.png";
import img3 from "../images/angular.png";
import Modal from "./Modal";

type Project = {
  id: number;
  title: string;
  description: string;
  date: string;
  techs: string[];
  images: string[];
  latest: boolean;
};

const Timeline = () => {
  const [showModal, setShowModal] = useState(false);
  const [chosenProject, setChosenProject] = useState({
    id: 0,
    title: "Default",
    description: "React is a JavaScript library for building user interfaces.",
    date: "0-0-0000",
    techs: ["Python", "Django REST Framework", "API"],
    images: [img1],
    latest: false,
  });

  const Projects = [
    {
      id: 1,
      title: "Attractive.ai",
      date: "April 2021 - July 2021",
      description:
        "React is a JavaScript library for building user interfaces.",
      techs: ["Python", "Django REST Framework", "API"],
      images: [img1],
      latest: false,
    },
    {
      id: 2,
      title: "Integrify Crypto Tracker",
      date: "April 2022 - May 2023",
      description:
        "React is a JavaScript library for building user interfaces.",
      techs: ["Python", "Django REST Framework", "API"],
      images: [img1],
      latest: false,
    },
    {
      id: 3,
      title: "Integrify e-commerce site",
      date: "June 2022 - July 2022",
      description:
        "React is a JavaScript library for building user interfaces.",
      techs: ["Python", "Django REST Framework", "API"],
      images: [img1],
      latest: false,
    },
    {
      id: 4,
      title: "HY's GIDPROvis",
      date: "September 2022 - March 2023",
      description:
        "React is a JavaScript library for building user interfaces.",
      techs: ["Python", "Django REST Framework", "API"],
      images: [img1],
      latest: false,
    },
    {
      id: 5,
      title: "Orion's DevOps Foundation",
      date: "April 2023 - June 2023",

      description:
        "React is a JavaScript library for building user interfaces.",
      techs: ["React", "TypeScript", "Material UI", "API"],
      images: [img2],
      latest: false,
    },
    {
      id: 6,
      title: "Nordcloud's CVHub",
      date: "April 2023 - September 2023",
      description:
        "React is a JavaScript library for building user interfaces.",
      techs: ["Python", "Django REST Framework", "API"],
      images: [img3],
      latest: true,
    },
  ];

  const openModal = (project: Project) => {
    setChosenProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderChosenModal = (chosen: Project) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center h-screen">
        <div
          onClick={closeModal}
          className="fixed inset-0 flex items-center bg-opacity-50 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-2/3 p-8 m-auto bg-slate-900 dark:bg-slate-50"
          >
            <Modal images={chosen.images || []} />
            <h1 className="text-2xl text-red-600">{chosen.title}</h1>
            <button onClick={closeModal}>X</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center w-full h-full text-red-600 transition-all duration-1000">
      <ol className="relative w-4/5 mx-auto my-12 border-l border-gray-200 lg:w-2/3 xl:w-2/5 dark:border-gray-700">
        {Projects.map((project) => (
          <div
            onClick={() => openModal(project)}
            className="transition duration-300 rounded-xl transform cursor-pointer hover:translate-y-[-20px] hover:shadow-lg hover:dark:shadow-slate-600"
          >
            <li className="pb-2 mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-slate-50 dark:ring-slate-900 dark:bg-blue-900">
                <svg
                  className=" duration-1000 w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 font-semibold text-gray-900 dark:text-white">
                {project.title}{" "}
                {project.latest && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    Latest
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {project.date}
              </time>
              <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
            </li>
          </div>
        ))}
        {/* <div
          onClick={() => openModal(Projects[1])}
          className="transition duration-300 rounded-xl transform cursor-pointer hover:translate-y-[-20px] hover:shadow-lg hover:dark:shadow-slate-600 "
        >
          <li className="pb-2 mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-slate-50 dark:ring-slate-900 dark:bg-blue-900">
              <svg
                className=" duration-1000 w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Application UI v2.0.0{" "}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on January 13th, 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="w-3.5 h-3.5 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              Download ZIP
            </a>
          </li>
        </div>

        <div
          onClick={() => openModal(Projects[2])}
          className="transition duration-300 rounded-xl transform cursor-pointer hover:translate-y-[-20px] hover:shadow-lg hover:dark:shadow-slate-600"
        >
          <li className="pb-2 mb-10 ml-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Library v1.2.2
            </h3>
            <time className="flex mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 2nd, 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </div> */}
        {showModal && <>{renderChosenModal(chosenProject)}</>}
      </ol>
    </div>
  );
};

export default Timeline;
