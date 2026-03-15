// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup"; // For animated counters

// const CounterSection = () => {
//   // Counter data
//   const counters = [
//     {
//       id: 1,
//       value: 36546,
//       label: "Coffee Served",
//       delay: 0.2,
//     },
//     {
//       id: 2,
//       value: 28,
//       label: "Type of Coffees",
//       delay: 0.5,
//     },
//     {
//       id: 3,
//       value: 12,
//       label: "Team Members",
//       delay: 0.8,
//     },
//   ];

//   return (
//     <>
//       <div className="w-full pb-4 pt-4">
//         <div className="h2">Counter Section</div>
//         <motion.span
//           className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.span
//             className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//           ></motion.span>
//         </motion.span>
//       </div>
//       <section id="counter" className="w-full pt-30 pb-20 rounded-2xl">
//         <div className="w-full mx-auto px-4">
//           <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
//             {counters.map((counter) => (
//               <motion.div
//                 key={counter.id}
//                 className=""
//                 initial={{ opacity: 0, y: 0 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: counter.delay }}
//                 viewport={{ once: true }}
//               >
//                 <div className="mt-8">
//                   <b className="count text-5xl font-bold text-blue-300">
//                     <CountUp
//                       start={0}
//                       end={counter.value}
//                       duration={3}
//                       delay={counter.delay}
//                     />
//                   </b>
//                   <p className="text-white font-bold text-lg mt-4">{counter.label}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CounterSection;






















/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { AnimatePresence } from "framer-motion";
import {
  LocalCafe,
  Coffee,
  People,
  EmojiEvents,
  Store,
  Public,
  Star,
  Whatshot,
  Timer,
  Agriculture,
  FlightTakeoff,
  Favorite,
  TrendingUp,
  Waves,
  RocketLaunch,
  Forest
} from "@mui/icons-material";

export const CounterSection = () => {
  const [hoveredCounter, setHoveredCounter] = useState(null);
  const [activeCounter, setActiveCounter] = useState(null);

  // Enhanced counter data with more items and details
  const counters = [
    {
      id: 1,
      value: 36546,
      label: "Coffee Served",
      icon: <LocalCafe />,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500",
      delay: 0.2,
      suffix: "+",
      description: "And counting every day",
      subText: "Daily average: 150 cups"
    },
    {
      id: 2,
      value: 28,
      label: "Coffee Varieties",
      icon: <Coffee />,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-500",
      delay: 0.4,
      suffix: "+",
      description: "From 8 countries worldwide",
      subText: "Including limited editions"
    },
    {
      id: 3,
      value: 12,
      label: "Expert Baristas",
      icon: <People />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-500",
      delay: 0.6,
      suffix: "",
      description: "Certified coffee professionals",
      subText: "5+ years experience each"
    },
    {
      id: 4,
      value: 15,
      label: "Awards Won",
      icon: <EmojiEvents />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500",
      delay: 0.8,
      suffix: "+",
      description: "International recognition",
      subText: "Best Coffee 2023"
    },
    {
      id: 5,
      value: 1250,
      label: "Happy Customers",
      icon: <Favorite />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500",
      delay: 1.0,
      suffix: "+",
      description: "Monthly satisfied clients",
      subText: "4.9★ average rating"
    },
    {
      id: 6,
      value: 100,
      label: "Partner Farms",
      icon: <Agriculture />,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500",
      delay: 1.2,
      suffix: "+",
      description: "Sustainable farming network",
      subText: "Fair trade certified"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.5,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.5
      }
    }
  };

  const counterVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: i * 0.1
      }
    }),
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 30px 40px -15px rgba(249, 115, 22, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      rotate: [0, 15, -15, 0],
      scale: 1.2,
      transition: {
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5
        }
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-900">
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={titleVariants}

          >
            Our Impact by Numbers
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            Every cup tells a story of passion, quality, and community
          </motion.p>

          <motion.span
            className="line block w-24 h-1 mx-auto mt-6 relative"
            variants={lineVariants}
        
          >
            <motion.span
              className="box absolute w-3 h-3 rounded-full -top-1"
              variants={dotVariants}
    
            />
          </motion.span>
        </motion.div>

        {/* Counter Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={counter.id}
              className="relative group"
              variants={itemVariants}
              custom={index}
              onHoverStart={() => setHoveredCounter(counter.id)}
              onHoverEnd={() => setHoveredCounter(null)}
              onClick={() => setActiveCounter(activeCounter === counter.id ? null : counter.id)}
            >
              {/* Card with gradient border */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 overflow-hidden cursor-pointer"
                variants={counterVariants}
                whileHover="hover"
                whileTap="tap"
    
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${counter.color}`}
                  animate={pulseAnimation}
                />

                {/* Decorative corner */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className={`absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 ${counter.bgColor} rounded-tr-2xl opacity-30`} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${counter.color} p-4 flex items-center justify-center shadow-xl`}
                    variants={iconVariants}
                    whileHover="hover"
                    animate={{
                      rotate: hoveredCounter === counter.id ? [0, 10, -10, 0] : 0,
                      scale: hoveredCounter === counter.id ? [1, 1.1, 1] : 1
                    }}
                  >
                    <div className="text-white text-4xl">
                      {counter.icon}
                    </div>
                  </motion.div>

                  {/* Counter Value */}
                  <motion.div
                    className="text-center"
                    animate={{
                      scale: hoveredCounter === counter.id ? 1.1 : 1
                    }}
                  >
                    <motion.div
                      className="text-5xl md:text-6xl font-bold mb-2"
                      style={{
                        background: `linear-gradient(135deg, ${counter.color.split(' ')[0].replace('from-', '')}, ${counter.color.split(' ')[1].replace('to-', '')})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      <CountUp
                        start={0}
                        end={counter.value}
                        duration={3}
                        delay={counter.delay}
                        separator=","
                      />
                      <span className="text-3xl ml-1">{counter.suffix}</span>
                    </motion.div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                      {counter.label}
                    </h3>

                    <p className="text-gray-400 text-sm mb-3">
                      {counter.description}
                    </p>

                    {/* Expandable details */}
                    <AnimatePresence>
                      {activeCounter === counter.id && (
                        <motion.div
                          className="mt-4 pt-4 border-t border-gray-700"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-orange-400 text-sm font-semibold">
                            {counter.subText}
                          </p>
                          <motion.div
                            className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.2 }}
                          >
                            <motion.div
                              className={`h-full bg-gradient-to-r ${counter.color}`}
                              initial={{ x: "-100%" }}
                              animate={{ x: "0%" }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 text-orange-500"
                      animate={{
                        x: hoveredCounter === counter.id ? [0, 5, 0] : 0,
                        opacity: hoveredCounter === counter.id ? 1 : 0
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity
                      }}
                    >
                      <TrendingUp />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>



      </div>
    </section>
  );
};

