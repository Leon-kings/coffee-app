/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CoffeeMenu = () => {
  return (
    <>
      <div className="w-full pb-4 pt-4">
        <div className="h2">New Features</div>
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
      <section
        id="menu"
        className="w-full pt-32 pb-32 dark:text-white bg-cover bg-center"
      >
        <div className="container mx-auto px-4">
          <div className="row flex justify-center">
            <div className="col-md-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  Roasted Coffee
                </h2>
                <motion.p
                  className="text-lg text-gray-200 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Rwanda Farmers Coffee Company and Gorilla’s Coffee products
                  offer specialty-grade, 100% Arabica coffee sourced from
                  Rwandan farmers’ cooperatives, grown in the highlands within
                  the fertile volcanic soil by the shores of the painstaking
                  Lake Kivu.
                </motion.p>
                <Link to={"/Product/234-345/list"}>
                  <motion.button
                    href="/Product/234-345/list"
                    rel="nofollow"
                    className="main-btn inline-block px-8 py-3 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Purchase Now
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoffeeMenu;
