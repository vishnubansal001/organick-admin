import React, { useState } from "react";

const Hero = ({ img, number, title, isLeft }) => {
  //   const [number, setNumber] = useState(10);
  return (
    <section className="flex flex-col justify-center items-center pt-[6rem]">
      <div
        className={`flex ${
          isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } md:flex-col-reverse gap-10 px-6 w-full items-center justify-between py-8`}
      >
        <div className="lg:w-[50%] w-[90%] flex flex-col justify-start items-center py-6">
          <div className="flex flex-col justify-start items-start gap-5">
            <h1 className="lg:text-4xl font-semibold md:text-3xl sm:text-2xl text-xl">
              {title}
            </h1>
            <p className="lg:text-3xl font-semibold md:text-2xl sm:text-xl text-lg">
              {number}
            </p>
          </div>
        </div>
        <div className="lg:w-[30%] w-[90%] flex flex-col justify-center items-center">
          <img src={img} alt="img/users" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
