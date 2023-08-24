import React, { useEffect, useState } from "react";
import { discover } from "../../database/data";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

const News = () => {
  // const navigate = useNavigate();
  const [news, setNews] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/all-news")
      .then((res) => {
        // console.log(res?.data?.news);
        setNews(res?.data?.news);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-white py-[6rem]">
      <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
        <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8 w-[90%] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center md:gap-7 gap-4">
            {news?.length !== 0 ? (
              <div>
                {news?.map((item, index) => (
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item.img})` }}
                    className="bg-cover min-w-[400px] bg-center p-6 rounded-[20px] flex flex-col justify-between gap-10"
                  >
                    <div className="">
                      <div className="bg-white py-2 px-4 rounded-full inline-flex flex-col items-center justify-center">
                        <p className="font-bold text-[#274C5B] lg:text-lg md:text-base text-sm">
                          {item.date}
                        </p>
                        <p className="font-bold text-[#274C5B] lg:text-lg md:text-base text-sm">
                          {item.month}
                        </p>
                      </div>
                    </div>
                    <div className="bg-white rounded-[14px] p-4 flex flex-col justify-center gap-3 shadow-lg">
                      <div className="flex flex-row items-center justify-start gap-2">
                        {/* <img src={} alt="" /> */}
                        <CgProfile />
                        <p className="text-[#274C5B] font-semibold lg:text-lg text-base">
                          By kjehsgdvxbn
                        </p>
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <h1 className="lg:text-xl md:text-lg text-base text-[#274C5B] font-bold ">
                          {item.title}
                        </h1>
                        <p className="text-[#525C60] font-normal lg:text-base text-sm md:leading-3 leading-5">
                          {item.about}
                        </p>
                      </div>
                      {/* <div>
                    <button
                      className="px-4 py-3 bg-[#EFD372] rounded-[14px] text-[#274C5B] font-bold lg:text-lg md:text-base text-sm shadow-md hover:scale-[1.05] transition ease-in-out duration-300 hover:shadow-lg"
                      //   onClick={() => navigate("/blog-single")}
                    >
                      {item.btn}
                    </button>
                  </div> */}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h1 className="lg:text-4xl font-semibold md:text-3xl sm:text-2xl text-xl text-[#274C5B]">
                  No News Added Yet
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
