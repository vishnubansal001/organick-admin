import axios from "axios";
import React, { useState } from "react";
import { postProduct } from "../../api/postProduct";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    category: "",
    pCost: 0,
    cCost: 0,
  });
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const clicked = async (e) => {
    console.log("running");
    // const url = await uploadToCloudinary(file);
    console.log("file uploaded");
    // const formData = new FormData();
    console.log(file);
    const data1 = {
      img: file,
      title: data.title,
      pCost: data.pCost,
      cCost: data.cCost,
      category: data.category,
    };
    // formData.append("img", file);
    // formData.append("title", data.title);
    // formData.append("pCost", data.pCost);
    // formData.append("cCost", data.cCost);
    // formData.append("category", data.category);
    // console.log(formData);
    axios
      .post("http://localhost:8000/admin/add-product", data1, {
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
        navigate("/all-products");
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
          New Product Details
        </h1>
        <div className="flex flex-col justify-center items-center w-full md:gap-16 gap-8">
          <form
            action=""
            className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-16 gap-8 w-[90%] mx-auto"
            encType="multipart/form-data"
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
                Category:
              </p>
              <input
                type="text"
                name="category"
                value={data.category}
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
                // value={}
                onChange={handleChangeFile}
                id="img"
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                Previous Price:
              </p>
              <input
                type="number"
                name="pCost"
                // id=""
                value={data.pCost}
                onChange={handleChange}
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-start items-start">
              <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                Current Price:
              </p>
              <input
                value={data.cCost}
                onChange={handleChange}
                type="number"
                name="cCost"
                // id=""
                className="border-2 border-[#274C5B] px-4 py-2 rounded-[14px] focus:outline-none"
              />
            </div>
          </form>
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              onClick={() => clicked()}
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
