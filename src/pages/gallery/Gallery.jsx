/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../assets/data/assets";

const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const imagesPerPage = 3;

  const nextImages = () => {
    setStartIndex((prevIndex) => (prevIndex + imagesPerPage) % images.length);
  };
  const prevImages = () => {
    setStartIndex((prevIndex) => (prevIndex - imagesPerPage) % images.length);
  };

  return (
    <>
      {" "}
      <div className="w-full pb-4 pt-4">
        <div className="h2">Gallery Box</div>
        <motion.span
          className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.span>
        </motion.span>
      </div>
      <div className="w-full dark:text-white p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.slice(startIndex, startIndex + imagesPerPage).map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={image.image}
                alt=""
                className="w-full h-56 object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prevImages}
            className=" dark:bg-blue-400 dark:text-white text-white font-bold px-6 py-2 rounded-lg shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={nextImages}
            className="dark:bg-blue-400 dark:text-white  text-white font-bold px-6 py-2 rounded-lg shadow-md"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
