import React from "react";
import HomePic from "../assets/home_picture.png";
import "../App.css";

const Home = () => {
  return (
    <section className="text-white relative">
      <div className="lg:flex    h-screen justify-center lg:justify-between">
        <div className="lg:flex-1 flex-grow  flex flex-col justify-end ">
          <div className="flex-col flex justify-center items-center lg:hidden">
            <div>
              <p className="font-bold text-4xl  sm:text-5xl mt-20">Focus</p>
              <p className="font-bold text-4xl  sm:text-5xl ml-6">
                Photography
              </p>
            </div>
          </div>
          <div className=" lg:pl-28 flex flex-col lg:gap-10 lg:pb-36 items-center lg:items-start pt-20 lg:pt-0 gap-10 px-14 sm:px-40 lg:px-0">
            <p className="lg:w-auto">
              Capturing life's most precious moments, one frame at a time. Your
              story, our lens - where memories come to life.
            </p>
            <div className="flex uppercase text-2xl font-semibold cursor-pointer ">
              <p>Explore Pages</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
              >
                <path
                  d="M1.37726 0V3.8H16.2856L0 16.2857L3.15323 19L19.4755 6.479V19H24V0H1.37726Z"
                  fill="#591A06"
                />
              </svg>
            </div>
            <div className="flex uppercase text-2xl font-semibold cursor-pointer ">
              <p>Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
              >
                <path
                  d="M1.37726 0V3.8H16.2856L0 16.2857L3.15323 19L19.4755 6.479V19H24V0H1.37726Z"
                  fill="#591A06"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1b hidden lg:flex flex-1">
          <img
            src={HomePic}
            className="h-screen grayscale w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute hidden lg:block top-28 lg:left-52 xl:left-52 lg:text-7xl xl:text-8xl font-bold uppercase">
        <p>Focus</p>
        <p className="ml-16">Photography</p>
      </div>
    </section>
  );
};

export default Home;
