import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar";

import laptopImage from "../images/laptop2.jpg";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

import reactImg2 from "../images/react-1-logo-svg-vector.svg";
import vueImg from "../images/vue3.png";
import angularImg from "../images/angular.png";
import nextImg from "../images/next.png";
import blobImg from "../images/blob.svg";

const Home = () => {
  const stacks = [
    { name: "React", img: reactImg2 },
    { name: "Vue", img: vueImg },
    { name: "Angular", img: angularImg },
    { name: "Next", img: nextImg },
    { name: "Next", img: nextImg },
    { name: "Next", img: nextImg },
    { name: "Next", img: nextImg },
    { name: "Next", img: nextImg },
  ];
  return (
    <div className="flex flex-col min-h-screen transition-all duration-1000 bg-slate-50 text-slate-900 dark:text-slate-50 dark:bg-slate-900">
      <Navbar />

      <section id="#Home" className="relative h-screen bg-fixed bg-cover">
        <div className="flex flex-col items-center p-4 h-5/6">
          <div className="z-10 flex items-start justify-between w-full h-auto pl-8 my-auto ml-3 md:px-10">
            <div className="flex flex-col justify-center h-full">
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Hi, my name is
              </div>
              <div className="text-4xl font-semibold md:text-5xl xl:text-7xl">
                Quang Anh Le
              </div>
              <div className="mt-3 text-lg md:mt-5 xl:text-x">
                And I am a{" "}
                <span className="text-sky-400">
                  <TypeAnimation
                    sequence={[
                      "Full-Stack Developer",
                      1500,
                      "Software Engineer",
                      1500,
                      "Dog lover",
                      1500,
                      "Cloud Engineer",
                      1500,
                      "Passionate Cook",
                      1500,
                    ]}
                    speed={50}
                    style={{ fontSize: "1.5rem" }}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </div>
            <div className="w-2/5 svg-container">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-72 md:w-96 animate-blob moving-blob text-sky-50"
              >
                <path
                  fill="#1E293B"
                  d="M43.1,-22.6C55.7,-3,65.8,20.4,58.1,33.2C50.5,45.9,25.3,48,-0.6,48.4C-26.5,48.8,-53.1,47.4,-61.2,34.3C-69.3,21.3,-59,-3.4,-45.7,-23.4C-32.4,-43.4,-16.2,-58.8,-0.5,-58.5C15.2,-58.2,30.4,-42.3,43.1,-22.6Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          <a href="#About" className="justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="About" className="relative w-full mt-5">
        <div className="max-w-screen-xl px-4 mx-auto about">
          <h2 className="text-3xl font-semibold text-center">About me</h2>
          <div className="flex flex-wrap items-center justify-between mt-6">
            <div className="w-full md:w-5/12 lg:w-4/12 xl:w-5/12">
              <img
                src={laptopImage}
                alt="Laptop"
                className="object-cover w-full h-64 rounded-md"
              />
            </div>
            <div className="w-full mt-6 md:w-6/12 lg:w-7/12 xl:w-6/12 md:mt-0">
              <div className="text-xl font-semibold text">
                A <span className="text-sky-400">Full-Stack Developer</span>
              </div>
              <p className="mt-2 text-justify">
                For me, challenges are what define who we are. Stepping out of
                the comfort zone can be tough, but that is exactly what
                strengthens us. Therefore, I always try my best to become a
                better version of myself throughout every day, every journey I
                take.
                <br />
                <br />
                As a cook, my passion and imagination help me bring every corner
                of the whole world to my kitchen. From a noisy, crowded street
                of Hong Kong, Taiwan, to a classy, elegant evening in a French
                restaurant, with champagne and slow music.
                <br />
                <br />
                As a developer, I explore new frameworks and libraries every day
                to improve my skill pool. I am highly familiar with:
                <br />
                JavaScript | TypeScript | React | Vue | Angular | mySQL |
                RESTful APIs | Git | Docker ... and more
                <br />
                <br />
                Hmm, who said you can't have the best of both worlds?{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-5 bg-fixed bg-cover">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center">Stacks</h2>
          <div className="flex justify-center w-full">
            <div className="flex flex-wrap items-center justify-around w-full mt-6 xl:w-2/3">
              {stacks.map((stack, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-1/2 h-40 my-2 mr-2 font-medium border-4 md:w-1/5 rounded-xl border-slate-900 dark:border-slate-50"
                >
                  {stack.name}
                  <img
                    className="object-cover w-auto border-4 rounded-full border-slate-900 dark:border-slate-50 h-2/3"
                    src={stack.img}
                    alt={stack.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-fixed bg-cover mt-">
        <div className="flex flex-col mt-10x">
          <h2 className="text-3xl font-semibold text-center delay-0">
            Experiences
          </h2>
          <Timeline />
        </div>
      </section>

      <section className="contact" id="contact">
        {/* Contact section content */}
      </section>

      <div className="flex flex-col items-center">
        <p className="fixed left-1 bottom-20 z-[9999] after:content-[''] text-xs font-thin transform rotate-90">
          anhlequang1998@gmail.com
          <span className="after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-gray-400 after:right-0 after:bottom-0"></span>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
