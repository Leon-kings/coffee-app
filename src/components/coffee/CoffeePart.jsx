/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { coffeeItems } from "../../assets/data/assets";
const CoffeeSection = () => {
  return (
    <section id="coffee" className="coffee_area pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-12">
              <h4 className="title text-3xl font-bold">Our Specials</h4>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 justify-center">
          {coffeeItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl p-4 text-black"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: item.delay }}
              viewport={{ once: true }}
            >
              <div className="single_coffee text-center mt-8">
                <div className="coffee_image">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="coffee_content mt-6">
                  <h4 className="coffee_title text-2xl font-semibold mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;
