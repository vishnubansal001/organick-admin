import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFrom = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    about: "",
    date: "",
  });

  const [file, setFile] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const onClick = async (e) => {
    // console.log("Hello")
    const data1 = {
      img: file,
      title: data.title,
      about: data.about,
      date: new Date(data.date),
    };
    axios
      .post("http://localhost:8000/admin/add-news", data1, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setData({
          title: "",
          category: "",
          pCost: 0,
          cCost: 0,
        });
        setFile(null);
        navigate("/all-news");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="pt-[6rem] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center md:gap-20 gap-10 py-6 w-full px-6">
        <h1 className="text-[#274C5B] lg:text-4xl font-semibold md:text-3xl sm:text-2xl text-xl">
          New News Details
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
                value={data.title}
                onChange={handleChange}
                name="title"
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                About The News:
              </p>
              <input
                type="text"
                name="about"
                value={data.about}
                onChange={handleChange}
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                Image:
              </p>
              <input
                type="file"
                name="img"
                onChange={handleChangeFile}
                id=""
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                Date:
              </p>
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={handleChange}
                id=""
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
          </form>
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              onClick={onClick}
              className="bg-[#274C5B] text-white lg:text-xl md:text-lg text-base font-bold py-3 px-5 rounded-[14px] hover:scale-[1.05] transition ease-in-out duration-300 shadow-lg hover:shadow-xl"
            >
              Add News
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddFrom;
