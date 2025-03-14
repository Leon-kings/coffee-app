/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup"; // For animated counters

const CounterSection = () => {
  // Counter data
  const counters = [
    {
      id: 1,
      value: 36546,
      label: "Coffee Served",
      delay: 0.2,
    },
    {
      id: 2,
      value: 28,
      label: "Type of Coffees",
      delay: 0.5,
    },
    {
      id: 3,
      value: 12,
      label: "Team Members",
      delay: 0.8,
    },
  ];

  return (
    <section id="counter" className="w-full pt-20 pb-20 rounded-2xl">
      <div className="w-full mx-auto px-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
          {counters.map((counter) => (
            <motion.div
              key={counter.id}
              className=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: counter.delay }}
              viewport={{ once: true }}
            >
              <div className="mt-8">
                <b className="count text-5xl font-bold text-blue-300">
                  <CountUp
                    start={0}
                    end={counter.value}
                    duration={3}
                    delay={counter.delay}
                  />
                </b>
                <p className="text-white text-lg mt-4">{counter.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
