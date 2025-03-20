/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { customers } from "../../assets/data/assets";
const Testimony = () => {
  // Customer feedback data

  return (
    <section id="customer" className="w-full pt-32 pb-32">
      <div className="w-full mx-auto px-4">
        <div className="w-full justify-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-12">
              <h4 className="title text-3xl font-bold">Customers Feedback</h4>
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
          </div>
        </div>

        <div className="w-full grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
          {customers.map((customer) => (
            <motion.div
              key={customer.id}
              className="w-full bg-white p-4 rounded-2xl"
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: customer.id * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full ">
                <div className="w-full rounded-full">
                  <img
                    src={customer.image}
                    alt=""
                    className="w-full h-[250px] rounded-full object-cover"
                  />
                </div>
                <div className="w-full p-4">
                  <h5 className="text-amber-300 font-bold">{customer.name}</h5>
                  <span className=" text-gray-600 font-medium">
                    {customer.role}
                  </span>
                  <p className="text-gray-600 mt-4">
                    &ldquo;{customer.feedback}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
