/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/images/Lebanese-Coffee.jpeg";
const Testimony = () => {
  // Customer feedback data
  const customers = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/M/MV5BMzA2MTRjMmMtNTViYi00Zjc2LTg5NDUtNWI3ZTZmMDI5N2QwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      name: "Justyna Helen",
      role: "Coffee Lover",
      feedback:
        "My favorite espresso. Anyone who enjoys a good espresso should definitely order their espresso!! And its clean, like all their coffee; no added poisons. Can't beat that. Enjoy!!",
    },
    {
      id: 2,
      image: 'https://assets.teenvogue.com/photos/5ea71ac02d1714000895137a/4:3/w_1440,h_1080,c_limit/James%202.jpg',
      name: "Fajar Siddiq",
      role: "Coffee Enthusiast",
      feedback:
        "Your Komodo Decaf coffee is the best decaf I've ever tasted. I really like the full-bodied, low-acid, espresso type of coffee, and it seems hard to find in a decaf coffee. So glad to have discovered The Coffee Scoop.",
    },
    {
      id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/James_Marsters_%2853319510570%29.jpg/800px-James_Marsters_%2853319510570%29.jpg',
      name: "Rob Hope",
      role: "Enthusiasts",
      feedback:
        "I buy my Komodo Decaf at Frey's and I love it so much, it was on my Christmas list and now in my cup. It is the best organic Swiss water process (only kind I drink) coffee I have ever had! Dark, rich, smooth and delicious. Worth every penny. Thank you!",
    },
  ];

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

        <div className="w-full grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
          {customers.map((customer) => (
            <motion.div
              key={customer.id}
              className="w-full bg-white p-4 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: customer.id * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
                <div className="w-full">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                <div className="w-full p-4">
                  <h5 className="text-amber-300 font-bold">
                    {customer.name}
                  </h5>
                  <span className=" text-gray-600 font-medium">
                    {customer.role}
                  </span>
                  <p className="text-gray-600 mt-4">&ldquo;{customer.feedback}&rdquo;</p>
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
