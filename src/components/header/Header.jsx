/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div id="home" className="w-full min-h-screen dark:text-white items-center">
      <div className=" bg-cover flex items-center">
        <div className="container mx-auto">
          <div className="row">
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
                <motion.p
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Coffee plays a major role in the economy of the country,
                  contributing significantly to foreign exchange earnings and to
                  the monetisation of the rural economy.
                </motion.p>
                <button className=" text-white px-6 py-2 rounded-lg transition duration-300">
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
