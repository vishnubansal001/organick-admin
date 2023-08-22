import React from "react";

const AddProduct = () => {
  return (
    <section className="pt-[6rem] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center md:gap-20 gap-10 py-6 w-full px-6">
        <h1 className="text-[#274C5B] lg:text-4xl font-semibold md:text-3xl sm:text-2xl text-xl">
          New Product Details
        </h1>
        <div className="flex flex-col justify-center items-center w-full md:gap-16 gap-8">
          <form
            action=""
            className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-16 gap-8 w-[90%] mx-auto"
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                Title:
              </p>
              <input
                type="text"
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                Category:
              </p>
              <input
                type="text"
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                Image:
              </p>
              <input
                type="file"
                name=""
                id=""
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                Previous Price:
              </p>
              <input
                type="number"
                name=""
                id=""
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                Current Price:
              </p>
              <input
                type="number"
                name=""
                id=""
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
          </form>
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className="bg-[#274C5B] text-white lg:text-xl md:text-lg text-base font-bold py-3 px-5 rounded-[14px] hover:scale-[1.05] transition ease-in-out duration-300 shadow-lg hover:shadow-xl"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
