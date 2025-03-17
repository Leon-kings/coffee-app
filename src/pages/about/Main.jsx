/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/images/cover-image-low-sugar-cocktails.webp";
import img1 from "../../assets/images/Coffee.webp";
import img2 from "../../assets/images/coffee1.webp";
import { Link } from "react-router-dom";

const About1 = () => {
  return (
    <motion.section
      className="overflow-hidden w-full pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] text-white dark:bg-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          {/* Image Grid */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              {/* Left Column */}
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <motion.div
                  className="py-3 sm:py-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img src={img} alt="" className="w-full rounded-2xl" />
                </motion.div>
                <motion.div
                  className="py-3 sm:py-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img src={img1} alt="" className="w-full rounded-2xl" />
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <motion.div
                  className="relative z-10 my-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <img src={img2} alt="" className="w-full rounded-2xl" />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Circles */}
                      <circle
                        cx="1.66667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="#3056D3"
                      />
                      {/* Add remaining circles here */}
                    </svg>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <motion.div
              className="mt-10 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="block mb-4 text-lg font-semibold text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Why Choose Us
              </motion.span>
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
              <motion.h2
                className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                Make your customers happy by giving services.
              </motion.h2>
              <motion.p
                className="mb-5 text-base text-body-color dark:text-dark-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                Firstly, coffee shops offer a space for people to connect with
                one another. They are a meeting point for friends, colleagues,
                and even strangers. It is common to see people engaging in
                conversations over a cup of coffee, discussing current events,
                or just catching up with each other's lives.
              </motion.p>
              <motion.p
                className="mb-8 text-base text-body-color dark:text-dark-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
              >
                A domain name is one of the first steps to establishing your
                brand. Secure a consistent brand image with a domain name that
                matches your business.
              </motion.p>
              <Link to={"/Product/234-345/list"}>
                <motion.button
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  viewport={{ once: true }}
                >
                  Get Your Coffee
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About1;
