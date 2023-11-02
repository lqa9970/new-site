import { TypeAnimation } from "react-type-animation";
import { HashLink } from "react-router-hash-link";

import laptopImage from "../images/laptop2.jpg";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import ContactForm from "../components/ContactForm";

//icons
import { BookUser, Mail, Smartphone } from "lucide-react";
import { useImageStore } from "../store/store";

const Home = () => {
  const stacks = useImageStore((state) => state.images);

  const handleEmailClick = () => {
    window.location.href = `mailto:${"anhlequang1998@gmail.com"}`;
  };
  return (
    <div className="flex flex-col min-h-screen text-xl transition-all duration-1000 bg-slate-50 text-slate-700 dark:text-slate-50 dark:bg-slate-900">
      <section id="home" className="relative h-screen bg-fixed bg-cover">
        <div className="flex flex-col items-center p-4 h-5/6">
          <div className="z-10 flex items-start justify-between w-full h-auto my-auto ml-3 md:pl-8 md:px-10">
            <div className="flex flex-col justify-start w-1/2 min-h-[300px] md:h-full">
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
            <div className="w-2/5 overflow-hidden svg-container animate-bounce">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto fill-current lg:w-96 animate-blob moving-blob"
              >
                <path
                  d="M43.1,-22.6C55.7,-3,65.8,20.4,58.1,33.2C50.5,45.9,25.3,48,-0.6,48.4C-26.5,48.8,-53.1,47.4,-61.2,34.3C-69.3,21.3,-59,-3.4,-45.7,-23.4C-32.4,-43.4,-16.2,-58.8,-0.5,-58.5C15.2,-58.2,30.4,-42.3,43.1,-22.6Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          <HashLink to="/#about" className="justify-center">
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
          </HashLink>
        </div>
      </section>

      <section
        id="about"
        className="relative pt-32 h-auto w-full md:min-h-[60vh]"
      >
        <div className="max-w-screen-xl px-4 mx-auto about">
          <h2 className="text-3xl font-semibold text-center">About me</h2>
          <div className="flex flex-wrap items-center justify-between mt-8">
            <div className="w-full md:w-5/12 lg:w-4/12 xl:w-5/12">
              <img
                src={laptopImage}
                alt="Laptop"
                className="object-cover w-full h-64 rounded-md"
              />
            </div>
            <div className="w-full mt-6 md:w-6/12 lg:w-7/12 xl:w-6/12 md:mt-0">
              <div className="font-semibold">
                <span className="italic text-sky-400">
                  "Friendly neighborhood Developer-Man" :)
                </span>
              </div>
              <p className="mt-2 text-base text-justify lg:text-xl">
                As a full-stack developer with a primary focus on frontend
                technologies, my proficiency lies in crafting user-friendly
                applications and websites that are both visually appealing and
                functionally robust. I specialize in writing efficient,
                code-heavy applications while ensuring seamless user
                experiences. My expertise extends beyond initial development; I
                excel in maintaining codebases and optimizing frontend
                performance, enhancing the overall quality of digital
                interactions.
                <br />
                <br />
                Challenges serve as my driving force, igniting my passion for
                problem-solving in the ever-evolving landscape of web
                development. Continually striving for improvement, I remain
                dedicated to refining my skills and knowledge in this dynamic
                field, ensuring that I stay ahead of the curve and deliver
                exceptional results in every project I undertake.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="stacks"
        className="relative pt-32 bg-fixed md:min-h-[45vh] bg-cover"
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center">Stacks</h2>
          <div className="flex justify-center w-full">
            <div className="flex flex-wrap items-center justify-around w-full mt-6 md:flex-row xl:w-2/3">
              {stacks.map((stack) => (
                <div
                  key={stack.id}
                  className="flex flex-col items-center w-1/4 h-40 my-2 mr-2 text-base font-medium border-4 max md:w-1/6 rounded-xl border-slate-900 dark:border-slate-50"
                >
                  {stack.title}
                  <img
                    className="object-cover w-auto border-4 rounded-full border-slate-900 dark:border-slate-50 h-2/3"
                    src={stack.img}
                    alt={stack.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="relative bg-fixed pt-32 bg-cover min-h-[60vh]"
      >
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold text-center delay-0">
            Projects
          </h2>
          <Timeline />
        </div>
      </section>

      <section id="contact" className="relative bg-fixed bg-cover min-h-[60vh]">
        <h2 className="text-3xl font-semibold text-center delay-0">Contact</h2>
        <div className="flex flex-col w-3/4 m-auto mt-10 md:justify-around md:flex-row">
          <div className="w-2/3 md:w-[40%] flex justify-center h-full m-auto py-6">
            <div className="items-start">
              <h2 className="text-lg font-bold">Come and say hi!</h2>
              <p>My contact: </p>
              <div className="mt-10">
                <div className="flex items-center mt-5">
                  <BookUser />
                  <div className="ml-10">
                    <div className="font-semibold">Address:</div>
                    <div className="sub-title">Helsinki, Finland</div>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <Mail />
                  <div className="ml-10">
                    <div className="font-semibold">Email:</div>
                    <div
                      onClick={handleEmailClick}
                      className="transition-all duration-300 cursor-pointer hover:animate-pulse hover:scale-110 hover:text-sky-400"
                    >
                      anhlequang1998@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <Smartphone />
                  <div className="ml-10">
                    <div className="font-semibold">Phone number:</div>
                    <div className="sub-title">+358 46 9666394</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 md:w-[40%] mt-5 md:mt-0">
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="flex-col items-center hidden md:flex">
        <p className="animate-pulse z-0 fixed left-[-70px] lg:left-[-20px] bottom-64 uppercase after:content-[''] text-xs font-thin transform rotate-90">
          anhlequang1998@gmail.com
          <span className="after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:right-0 after:bottom-0"></span>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
