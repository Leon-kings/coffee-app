// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// import { customers } from "../../assets/data/assets";
// const Testimony = () => {
//   // Customer feedback data

//   return (
//     <section id="customer" className="w-full pt-32 pb-32">
//       <div className="w-full mx-auto px-4">
//         <div className="w-full justify-center">
//           <div className="col-lg-6">
//             <div className="section_title text-center pb-12">
//               <h4 className="title text-3xl font-bold">Customers Feedback</h4>
//               <motion.span
//                 className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <motion.span
//                   className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ delay: 0.5, duration: 0.5 }}
//                 ></motion.span>
//               </motion.span>
//             </div>
//           </div>
//         </div>

//         <div className="w-full grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
//           {customers.map((customer) => (
//             <motion.div
//               key={customer.id}
//               className="w-full bg-white p-4 rounded-2xl"
//               initial={{ opacity: 0, y: 0 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: customer.id * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="w-full ">
//                 <div className="w-full rounded-full">
//                   <img
//                     src={customer.image}
//                     alt=""
//                     className="w-full h-[250px] rounded-full object-cover"
//                   />
//                 </div>
//                 <div className="w-full p-4">
//                   <h5 className="text-amber-300 font-bold">{customer.name}</h5>
//                   <span className=" text-gray-600 font-medium">
//                     {customer.role}
//                   </span>
//                   <p className="text-gray-600 mt-4">
//                     &ldquo;{customer.feedback}&rdquo;
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimony;



















/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  StarHalf,
  FormatQuote,
  Verified,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  ArrowForward,
  ArrowBack,
  LocationOn,
  CalendarToday,
  ThumbUp,
  Pause,
  PlayArrow
} from "@mui/icons-material";

// Customer feedback data
export const customers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Coffee Enthusiast",
    feedback: "The best coffee I've ever tasted! The Espresso Romano is absolutely perfect. Great atmosphere and friendly staff. I've been coming here every morning for the past year.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    location: "Kigali, Rwanda",
    since: "2022",
    verified: true,
    social: { instagram: "#", twitter: "#" }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Coffee Shop Owner",
    feedback: "I've been in the coffee industry for 15 years, and LD Coffee's beans are exceptional. The consistency in quality and roast profile is remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    location: "Nairobi, Kenya",
    since: "2021",
    verified: true,
    social: { linkedin: "#", twitter: "#" }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    feedback: "The attention to detail and commitment to quality is impressive. Their single-origin offerings are a journey through Rwandan coffee culture.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1494790108777-466d5e3d5e3b?w=400",
    location: "Cape Town, SA",
    since: "2023",
    verified: true,
    social: { instagram: "#" }
  },
  {
    id: 4,
    name: "David Musoni",
    role: "Local Farmer",
    feedback: "As a coffee farmer, I appreciate their commitment to fair trade and supporting local communities. They're making a real difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    location: "Musanze, Rwanda",
    since: "2020",
    verified: true,
    social: { facebook: "#" }
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Travel Blogger",
    feedback: "Found this gem while traveling through Kigali. The cold brew is refreshing, and the staff is incredibly knowledgeable about their craft.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
    location: "Singapore",
    since: "2023",
    verified: true,
    social: { instagram: "#" }
  },
  {
    id: 6,
    name: "James Omondi",
    role: "Barista Champion",
    feedback: "Their beans are a dream to work with. The flavor profiles are consistent, and the crema development is perfect. My customers love it!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400",
    location: "Nairobi, Kenya",
    since: "2022",
    verified: true,
    social: { instagram: "#", twitter: "#" }
  },
  {
    id: 7,
    name: "Anna Petrova",
    role: "Coffee Roaster",
    feedback: "I've sourced beans from around the world, and LD Coffee's offerings stand out. The attention to detail in processing is evident.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
    location: "Moscow, Russia",
    since: "2021",
    verified: true,
    social: { linkedin: "#" }
  },
  {
    id: 8,
    name: "Carlos Mendez",
    role: "Restaurant Owner",
    feedback: "We serve LD Coffee exclusively at our restaurant. Our customers consistently compliment the quality. Great partnership!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    location: "Mexico City",
    since: "2022",
    verified: true,
    social: { instagram: "#", facebook: "#" }
  },
  {
    id: 9,
    name: "Grace Uwase",
    role: "Local Artist",
    feedback: "The cozy atmosphere and perfect latte art inspire my creativity. My favorite spot to sketch and enjoy amazing coffee.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
    location: "Kigali, Rwanda",
    since: "2023",
    verified: true,
    social: { instagram: "#" }
  },
  {
    id: 10,
    name: "Thomas Schmidt",
    role: "Coffee Importer",
    feedback: "Their quality control is exceptional. Every batch meets the highest standards. A trusted partner for years.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    location: "Berlin, Germany",
    since: "2020",
    verified: true,
    social: { linkedin: "#" }
  },
  {
    id: 11,
    name: "Fatima Hassan",
    role: "Chef",
    feedback: "Their coffee pairs perfectly with our desserts. The rich flavor profile enhances the entire dining experience.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400",
    location: "Dubai, UAE",
    since: "2022",
    verified: true,
    social: { instagram: "#" }
  },
  {
    id: 12,
    name: "John Mwangi",
    role: "Tech Entrepreneur",
    feedback: "The perfect place for meetings. Great coffee, fast WiFi, and an ambiance that sparks creativity.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400",
    location: "Nairobi, Kenya",
    since: "2021",
    verified: true,
    social: { twitter: "#", linkedin: "#" }
  }
];

export const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  const itemsPerPage = 4;
  const totalSlides = Math.ceil(customers.length / itemsPerPage);

  // Auto-slide effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return customers.slice(start, start + itemsPerPage);
  };

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="text-yellow-400 !text-sm" />);
    }
    if (hasHalf) {
      stars.push(<StarHalf key="half" className="text-yellow-400 !text-sm" />);
    }
    return stars;
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
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

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-900 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={titleVariants}
            style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            What Our Customers Say
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            Real stories from coffee lovers around the world
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full"
            variants={titleVariants}
          />
        </motion.div>

 

        {/* Sliding Testimonials */}
        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {getCurrentTestimonials().map((customer) => (
                <motion.div
                  key={customer.id}
                  className="relative group"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredId(customer.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => setSelectedCustomer(customer)}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all cursor-pointer h-full">
                    {/* Verified Badge */}
                    {customer.verified && (
                      <motion.div
                        className="absolute top-4 right-4 bg-blue-500 text-white p-1 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <Verified fontSize="small" />
                      </motion.div>
                    )}

                    {/* Quote Icon */}
                    <motion.div
                      className="absolute top-4 left-4 text-orange-500/20"
                      animate={{
                        rotate: hoveredId === customer.id ? [0, 10, -10, 0] : 0,
                      }}
                    >
                      <FormatQuote className="!text-4xl" />
                    </motion.div>

                    {/* Customer Image */}
                    <div className="relative mb-4">
                      <div className="w-24 h-24 mx-auto relative">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                          animate={{
                            scale: hoveredId === customer.id ? [1, 1.1, 1] : 1,
                          }}
                        />
                        <img
                          src={customer.image}
                          alt={customer.name}
                          className="relative w-full h-full object-cover rounded-full border-4 border-gray-700 group-hover:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h5 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                        {customer.name}
                      </h5>
                      
                      <p className="text-sm text-gray-400 mb-2">{customer.role}</p>

                      <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-3">
                        <LocationOn fontSize="small" />
                        <span>{customer.location}</span>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center gap-1 mb-3">
                        {renderStars(customer.rating)}
                      </div>

                      {/* Feedback Preview */}
                      <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                        &ldquo;{customer.feedback.substring(0, 80)}...&rdquo;
                      </p>

                      {/* Read More */}
                      <motion.button
                        className="text-orange-400 text-xs font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        Read Full Story
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Counter */}
        <motion.div
          className="text-center mt-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-orange-400 font-bold">{currentIndex + 1}</span>
          <span> / {totalSlides}</span>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: "Total Reviews", value: customers.length, icon: <FormatQuote /> },
            { label: "5-Star Ratings", value: customers.filter(c => c.rating === 5).length, icon: <Star /> },
            { label: "Verified Buyers", value: customers.filter(c => c.verified).length, icon: <Verified /> },
            { label: "Happy Customers", value: customers.length * 150, icon: <ThumbUp /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center border border-gray-700"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-orange-500 text-2xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Customer Modal */}
      <AnimatePresence>
        {selectedCustomer && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCustomer(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full border border-gray-700 overflow-hidden"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={selectedCustomer.image}
                        alt={selectedCustomer.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-orange-500"
                      />
                      {selectedCustomer.verified && (
                        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-1 rounded-full">
                          <Verified fontSize="small" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedCustomer.name}</h3>
                      <p className="text-orange-400">{selectedCustomer.role}</p>
                    </div>
                  </div>
                  <motion.button
                    className="text-gray-400 hover:text-white p-2 hover:bg-gray-700 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCustomer(null)}
                  >
                    ✕
                  </motion.button>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="flex gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <LocationOn fontSize="small" className="text-orange-400" />
                      {selectedCustomer.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarToday fontSize="small" className="text-orange-400" />
                      Customer since {selectedCustomer.since}
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {renderStars(selectedCustomer.rating)}
                  </div>

                  <div className="bg-gray-700/30 p-4 rounded-xl">
                    <FormatQuote className="text-orange-500 !text-3xl mb-2" />
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {selectedCustomer.feedback}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    {selectedCustomer.social?.facebook && (
                      <motion.a
                        href={selectedCustomer.social.facebook}
                        className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Facebook fontSize="small" />
                      </motion.a>
                    )}
                    {selectedCustomer.social?.instagram && (
                      <motion.a
                        href={selectedCustomer.social.instagram}
                        className="bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Instagram fontSize="small" />
                      </motion.a>
                    )}
                    {selectedCustomer.social?.twitter && (
                      <motion.a
                        href={selectedCustomer.social.twitter}
                        className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Twitter fontSize="small" />
                      </motion.a>
                    )}
                    {selectedCustomer.social?.linkedin && (
                      <motion.a
                        href={selectedCustomer.social.linkedin}
                        className="bg-gray-700 p-2 rounded-full hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <LinkedIn fontSize="small" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
