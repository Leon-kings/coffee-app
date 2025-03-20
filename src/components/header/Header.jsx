/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        id="home"
        className="w-full min-h-screen dark:text-white bg-cover text-center items-center"
      >
        <div className="w-full bg-cover flex items-center">
          <div className="w-full mx-auto">
            <div className="row w-full">
              <div className="w-full">
                <motion.div className="py-28">
                  <h2 className="w-full pt-36 block text-4xl font-bold mb-4">
                    Royalty-free Black Coffee Honey,Coffee <br />
                    & Tea ..
                  </h2>
                  <motion.p className="w-full">
                    My favorite espresso. Anyone who enjoys a good espresso
                    should definitely <br />
                    order their espresso!! And its clean, like all their coffee;
                    no added poisons. <br /> Can't beat that. Enjoy!!
                  </motion.p>
                  <motion.p className="pt-6 justify-items-center justify-center items-center">
                    Coffee plays a major role in the economy of the country,
                    <br />
                    contributing significantly to foreign exchange earnings{" "}
                    <br /> and to the monetisation of the rural economy.
                  </motion.p>
                  <motion.div className="py-6">
                    <Link to={"/Product/234-345/list"}>
                      <button className=" text-white py-6 rounded-lg transition duration-300">
                        Purchase Now
                      </button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
