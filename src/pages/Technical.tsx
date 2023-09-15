import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
// images
import reactImg2 from "../images/react-1-logo-svg-vector.svg";
import vueImg from "../images/vue3.png";
import angularImg from "../images/angular.png";
import nextImg from "../images/next.png";

const Technical = () => {
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
    <>
      <div className="flex flex-col min-h-screen transition-all duration-1000 bg-slate-50 text-slate-900 dark:text-slate-50 dark:bg-slate-900">
        <Navbar />

        <section className="relative bg-fixed bg-cover">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-center">Stacks</h2>
            <div className="flex justify-center w-full">
              <div className="flex flex-wrap items-center justify-around w-full mt-6 xl:w-2/3">
                {stacks.map((stack, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-1/2 h-40 my-2 mr-2 font-medium border-4 md:w-1/5 rounded-xl border-slate-900 bg-slate-50 dark:bg-slate-900 dark:border-slate-50"
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

        <section className="relative bg-fixed bg-cover">
          <div className="flex flex-col mt-10">
            <h2 className="text-3xl font-semibold text-center delay-0">
              Experiences
            </h2>
            <Timeline />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Technical;
