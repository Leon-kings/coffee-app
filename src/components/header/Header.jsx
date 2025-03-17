/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="home" className="w-full min-h-screen dark:text-white items-center">
      <div className="w-full bg-cover flex items-center">
        <div className="w-full mx-auto">
          <div className="row w-full">
            <div className="col-md-9">
              <motion.div
                className="py-50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="slider_title text-4xl font-bold mb-4">
                  Royalty-free Black Coffee Honey, Coffee &Tea
                </h2>
                <motion.span
                  className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  ></motion.span>
                </motion.span>
                <motion.p
                  className="mb-6 mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Coffee plays a major role in the economy of the country,
                  contributing significantly to foreign exchange earnings and to
                  the monetisation of the rural economy.
                </motion.p>
                <Link to={"/Product/234-345/list"}>
                  <button className=" text-white px-6 py-2 rounded-lg transition duration-300">
                    Purchase Now
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
