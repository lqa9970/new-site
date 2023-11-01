import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
// images
import reactImg2 from "../images/react-1-logo-svg-vector.svg";
import vueImg from "../images/vue3.png";
import angularImg from "../images/angular.png";
import nextImg from "../images/next.png";
import { useImageStore } from "../store/store";

const Technical = () => {
  const images = useImageStore((state) => state.images);

  return (
    <>
      <div className="flex flex-col min-h-screen transition-all duration-1000 bg-slate-50 text-slate-900 dark:text-slate-50 dark:bg-slate-900">
        <Navbar />

        <section className="relative mt-5 bg-fixed md:min-h-[45vh] bg-cover">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-center">Stacks</h2>
            <div className="flex justify-center w-full">
              <div className="flex flex-wrap items-center justify-around w-full mt-6 md:flex-row xl:w-2/3">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="flex flex-col items-center w-1/4 h-40 my-2 mr-2 text-base font-medium border-4 max md:w-1/6 rounded-xl border-slate-900 dark:border-slate-50"
                  >
                    {image.title}
                    <img
                      className="object-cover w-auto border-4 rounded-full border-slate-900 dark:border-slate-50 h-2/3"
                      src={image.img}
                      alt={image.title}
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
