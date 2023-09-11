import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar";

import bgImage from "../images/code2.jpg";
import bgBlob from "../images/blob.svg";
import laptopImage from "../images/laptop2.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen transition-all duration-200 bg-slate-50 text-slate-900 dark:text-slate-50 dark:bg-slate-900">
      <Navbar />

      <section id="#Home" className="relative h-screen bg-fixed bg-cover">
        <div className="flex items-center h-screen p-4">
          {/* <img
            draggable="false"
            src={bgBlob}
            alt="Background Image"
            className="absolute inset-0 left-0 w-2/5 h-auto user-drag-none"
          /> */}
          <div className="z-10 flex flex-col items-start w-full h-auto px-4 my-auto ml-3 md:px-10 xl:ml-16 ">
            <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Hi, my name is
            </div>
            <div className="text-4xl font-semibold md:text-5xl xl:text-7xl">
              Quang Anh Le
            </div>
            <div className="mt-3 text-lg md:mt-5 xl:text-xl">
              And I am a{" "}
              <span>
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
        </div>
      </section>

      <section id="About" className="relative w-full mt-5">
        <div className="max-w-screen-xl px-4 mx-auto about">
          <h2 className="text-3xl font-semibold">About me</h2>
          <div className="flex flex-wrap items-center justify-between mt-6 about-content">
            <div className="w-full md:w-5/12 lg:w-4/12 xl:w-5/12">
              <img
                src={laptopImage}
                alt="Laptop"
                className="object-cover w-full h-64 rounded-md"
              />
            </div>
            <div className="w-full mt-6 md:w-6/12 lg:w-7/12 xl:w-6/12 md:mt-0">
              <div className="text-xl font-semibold text">
                A <span className="text-yellow-500">Full-Stack Developer</span>
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

      <section className="contact" id="contact">
        {/* Contact section content */}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
