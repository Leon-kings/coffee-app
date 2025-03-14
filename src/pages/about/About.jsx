/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
// images
import about from "../../assets/images/waiter-serving-coffee-to-woman-at-table-free-photo.jpg";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
const AboutSection = () => {
  return (
    <section className="w-full justify-center dark:text-white text-white pt-32 pb-32">
      <div className="w-full mx-auto px-4">
        <div className="row justify-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-10">
              <h4 className="title text-3xl font-bold">Our Story</h4>
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

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center">
          <div className="col-lg-6">
            <motion.div
              className="about_image mt-12"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={about}
                alt=""
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="about_content mt-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="about_title text-2xl font-bold mb-6">
                About LD Coffee
              </h4>
              <p className="text-white mb-6">
                We believe that creating a delicious and superior coffee starts
                at the crop and ends in your cup. That's why we serve Rwanda's
                premium specialty coffee. Coffee Promotion, Export and Roasting
                is at the heart of what we do. We are your direct origin of
                Rwanda's speciality coffees. Rwanda Kigali. Our single origin
                offering a fruity, well balanced and sweet drinking experience.
                Our coffee is hulled, graded and hand sorted at the Rwanda
              </p>
              <p className="text-white mb-6">
                Coffee plays a major role in the economy of the country,
                contributing significantly to foreign exchange earnings and to
                the monetisation of the rural economy.
              </p>
              <ul className="social flex space-x-4">
                <li>
                  <button
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition duration-300"
                  >
                    <Facebook className="size-6" />
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition duration-300"
                  >
                    <Twitter className="size-6" />
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition duration-300"
                  >
                    <Instagram className="size-6" />
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition duration-300"
                  >
                    <LinkedIn className="size-6" />
                  </button>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
