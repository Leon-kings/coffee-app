// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// // images
// import about from "../../assets/images/waiter-serving-coffee-to-woman-at-table-free-photo.jpg";
// import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
// import About1 from "./Main";
// const AboutSection = () => {
//   return (
//     <section className="w-full justify-center dark:text-white text-white pt-32 pb-32">
//       <div className="w-full mx-auto px-4">
//         <div className="row justify-center">
//           <div className="col-lg-6">
//             <div className="section_title text-center pb-10">
//               <h4 className="title text-3xl font-bold">Our Story</h4>
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

//         <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center">
//           <div className="w-full">
//             <motion.div
//               className="about_image mt-12"
//               initial={{ opacity: 0, x: 0 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={about}
//                 alt=""
//                 className="w-full h-auto object-cover rounded-lg shadow-lg"
//               />
//             </motion.div>
//           </div>

//           <div className="w-full bg-gray-900 rounded-2xl p-4">
//             <motion.div
//               className="about_content mt-12"
//               initial={{ opacity: 0, x: 0 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="about_title text-2xl font-bold mb-6">
//                 About LD Coffee
//               </h4>
//               <p className="text-white mb-6">
//                 We believe that creating a delicious and superior coffee starts
//                 at the crop and ends in your cup. That's why we serve Rwanda's
//                 premium specialty coffee. Coffee Promotion, Export and Roasting
//                 is at the heart of what we do. We are your direct origin of
//                 Rwanda's speciality coffees. Rwanda Kigali. Our single origin
//                 offering a fruity, well balanced and sweet drinking experience.
//                 Our coffee is hulled, graded and hand sorted at the Rwanda
//               </p>
//               <p className="text-white mb-6">
//                 Coffee plays a major role in the economy of the country,
//                 contributing significantly to foreign exchange earnings and to
//                 the monetisation of the rural economy.
//               </p>
//               <ul className="social flex space-x-4">
//                 <li>
//                   <button
//                     href="#"
//                     className="text-gray-600 hover:text-orange-500 transition duration-300"
//                   >
//                     <Twitter className="size-6" />
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     href="#"
//                     className="text-gray-600 hover:text-orange-500 transition duration-300"
//                   >
//                     <Instagram className="size-6" />
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     href="#"
//                     className="text-gray-600 hover:text-orange-500 transition duration-300"
//                   >
//                     <LinkedIn className="size-6" />
//                   </button>
//                 </li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//       <About1 />
//     </section>
//   );
// };

// export default AboutSection;




















/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  LocalCafe,
  EmojiEvents,
  People,
  Public,
  Agriculture,
  Whatshot,
  Spa,
  Timer,
  LocationOn,
  Phone,
  Email,
  ArrowForward,
  PlayArrow,
  Close,
  Favorite,
  Star,
  Verified,
  Speed,
  ShoppingBag,
  Restaurant,
  FreeBreakfast,
  Coffee,
  Place,
  Schedule,
  RestaurantMenu,
  TrendingUp,
  Group,
  Forest,
  PrecisionManufacturing,
  Psychology,
  RocketLaunch,
  Waves,

  AcUnit,
  FlightTakeoff
} from "@mui/icons-material";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [statsHovered, setStatsHovered] = useState(null);
  const [activeMilestone, setActiveMilestone] = useState(null);

  // Online Images
  const images = {
    hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
    about1: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
    about2: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800",
    about3: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800",
    barista: "https://images.unsplash.com/photo-1579113800032-f38bd8e4e9b6?w=800",
    farm: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
    roasting: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    team1: "https://images.unsplash.com/photo-1577210879023-bfaf9d1b7d7f?w=400",
    team2: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400",
    team3: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400",
    cafe: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    beans: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800",
    pour: "https://images.unsplash.com/photo-1559525836-283c40b8f4a3?w=800"
  };

  // Company milestones with icons
  const milestones = [
    { year: "2010", event: "Founded in Kigali", icon: <LocalCafe />, desc: "Started with a single shop in Kigali, Rwanda" },
    { year: "2013", event: "First Export", icon: <FlightTakeoff />, desc: "Exported to 5 countries in Europe" },
    { year: "2016", event: "Roasting Facility", icon: <Whatshot />, desc: "Opened state-of-the-art roasting plant" },
    { year: "2019", event: "Award Winner", icon: <EmojiEvents />, desc: "Best African Coffee at Paris Expo" },
    { year: "2022", event: "Global Expansion", icon: <Public />, desc: "Present in 15+ countries worldwide" },
    { year: "2024", event: "Sustainable Future", icon: <Forest />, desc: "100% carbon neutral certification" }
  ];

  // Statistics with colors
  const statistics = [
    { label: "Years of Excellence", value: "14+", icon: <Timer />, color: "from-orange-500 to-amber-500", bg: "bg-orange-500" },
    { label: "Happy Customers", value: "50K+", icon: <Group />, color: "from-green-500 to-teal-500", bg: "bg-green-500" },
    { label: "Coffee Farms", value: "120+", icon: <Forest />, color: "from-emerald-500 to-green-500", bg: "bg-emerald-500" },
    { label: "Awards Won", value: "25", icon: <EmojiEvents />, color: "from-yellow-500 to-orange-500", bg: "bg-yellow-500" },
    { label: "Countries", value: "15+", icon: <Public />, color: "from-blue-500 to-indigo-500", bg: "bg-blue-500" },
    { label: "Employees", value: "200+", icon: <People />, color: "from-purple-500 to-pink-500", bg: "bg-purple-500" }
  ];

  // Team members
  const teamMembers = [
    { 
      name: "Jean Paul", 
      role: "Master Roaster", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "15 years of roasting expertise",
      expertise: ["Dark Roasts", "Blending"],
      social: { twitter: "#", linkedin: "#" }
    },
    { 
      name: "Marie Claire", 
      role: "Head Taster", 
      image: "https://images.unsplash.com/photo-1494790108777-466d5e3d5e3b?w=400",
      bio: "Certified Q-Grader",
      expertise: ["Cupping", "Quality Control"],
      social: { instagram: "#", linkedin: "#" }
    },
    { 
      name: "Peter Niyonsaba", 
      role: "Farm Relations", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      bio: "Connecting with 100+ farmers",
      expertise: ["Sustainability", "Fair Trade"],
      social: { twitter: "#", facebook: "#" }
    }
  ];

  // Gallery images
  const galleryImages = [
    { src: images.cafe, title: "Our Café", desc: "Cozy atmosphere in Kigali", category: "Café" },
    { src: images.beans, title: "Premium Beans", desc: "Hand-selected Arabica", category: "Product" },
    { src: images.farm, title: "Our Farms", desc: "Sustainable growth", category: "Farm" },
    { src: images.roasting, title: "Roasting", desc: "Perfect temperature control", category: "Process" },
    { src: images.barista, title: "Our Baristas", desc: "Expert craftsmanship", category: "Team" },
    { src: images.pour, title: "Pour Over", desc: "Art of brewing", category: "Service" }
  ];

  // Values
  const values = [
    { icon: <Agriculture />, title: "Sustainable", desc: "Eco-friendly farming practices" },
    { icon: <Star />, title: "Quality", desc: "Premium grade beans only" },
    { icon: <People />, title: "Community", desc: "Supporting local farmers" },
    { icon: <RocketLaunch />, title: "Innovation", desc: "Modern roasting techniques" }
  ];

  // Testimonials
  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "Coffee Enthusiast",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
      comment: "Best coffee I've ever tasted! The rich flavor and aroma are unmatched.",
      rating: 5
    },
    { 
      name: "Michael Chen", 
      role: "Café Owner",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200",
      comment: "LD Coffee transformed our menu. Customers keep coming back for more.",
      rating: 5
    },
    { 
      name: "Emma Watson", 
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200",
      comment: "The attention to detail and commitment to quality is impressive.",
      rating: 5
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 }
    }
  };

  const statVariants = {
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
      scale: 1.1,
      y: -10,
      boxShadow: "0 30px 40px -15px rgba(249, 115, 22, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  const timelineVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1
      }
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-24 pb-32 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/coffee-beans.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px"
        }} />
      </div>

      {/* Floating Elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-orange-500/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${30 + Math.random() * 50}px`,
            rotate: `${Math.random() * 360}deg`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <LocalCafe />
        </motion.div>
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-orange-500/20 blur-[100px]"
        animate={pulseAnimation}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-amber-500/20 blur-[100px]"
        animate={pulseAnimation}
        transition={{ delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="relative h-[500px] rounded-3xl overflow-hidden mb-20 group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={images.hero}
            alt="Coffee Shop"
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-12 text-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{
                background: "linear-gradient(135deg, #fbbf24, #f97316, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              animate={floatingAnimation}
            >
              LD Coffee
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Crafting Rwanda's Finest Coffee Since 2010
            </p>
          </motion.div>
        </motion.div>

        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
            style={{
              background: "linear-gradient(135deg, #fbbf24, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            From the hills of Rwanda to your cup - a journey of passion and excellence
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full"
            variants={itemVariants}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image Gallery */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-[400px]"
              variants={imageVariants}
              whileHover="hover"
              onClick={() => setSelectedImage(galleryImages[0])}
            >
              <motion.img
                src={images.about1}
                alt="Coffee Shop"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.button
                  className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PlayArrow />
                  Watch Our Story
                </motion.button>
              </motion.div>

              {/* Badge */}
              <motion.div
                className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 border border-orange-500"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Verified className="text-orange-500" />
                <span>Est. 2010</span>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Star className="!text-sm" />
                <span>4.9 (2.5k reviews)</span>
              </motion.div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {galleryImages.slice(1, 4).map((img, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-lg overflow-hidden cursor-pointer group h-24"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-orange-500/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-white text-xs font-semibold">View</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-6"
              variants={containerVariants}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-orange-500 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-orange-500 text-3xl mb-2">{value.icon}</div>
                  <h4 className="font-bold text-lg">{value.title}</h4>
                  <p className="text-xs text-gray-400">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Tabs */}
            <motion.div
              className="flex gap-2 mb-8"
              variants={itemVariants}
            >
              {["Our Story", "Mission", "Vision"].map((tab, index) => (
                <motion.button
                  key={index}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all relative overflow-hidden ${
                    activeTab === index 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTab === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {activeTab === 0 && (
                  <>
                    <motion.h3
                      className="text-3xl font-bold text-orange-400 flex items-center gap-3"
                      variants={itemVariants}
                    >
                      <LocalCafe />
                      From Rwanda With Love
                    </motion.h3>

                    <motion.div className="space-y-4 text-gray-300" variants={containerVariants}>
                      <motion.p variants={itemVariants} className="leading-relaxed">
                        We believe that creating a delicious and superior coffee starts
                        at the crop and ends in your cup. That's why we serve Rwanda's
                        premium specialty coffee directly from the source.
                      </motion.p>

                      <motion.p variants={itemVariants} className="leading-relaxed">
                        Based in <span className="text-orange-400 font-semibold">Kigali, Rwanda</span>, 
                        we work directly with over 120 local farmers to bring you the 
                        finest single-origin coffees. Our beans are carefully selected, 
                        hand-sorted, and roasted to perfection.
                      </motion.p>

                      <motion.p variants={itemVariants} className="leading-relaxed">
                        Coffee plays a vital role in Rwanda's economy, supporting thousands 
                        of families. By choosing LD Coffee, you're not just getting great 
                        coffee – you're supporting sustainable farming communities.
                      </motion.p>
                    </motion.div>

                    {/* Quick Facts */}
                    <motion.div
                      className="grid grid-cols-2 gap-4 mt-6"
                      variants={containerVariants}
                    >
                      {[
                        { label: "Altitude", value: "1500-2000m" },
                        { label: "Varietals", value: "Arabica" },
                        { label: "Processing", value: "Washed/Natural" },
                        { label: "Harvest", value: "March-May" }
                      ].map((fact, i) => (
                        <motion.div
                          key={i}
                          className="bg-gray-800 p-3 rounded-lg"
                          variants={itemVariants}
                        >
                          <p className="text-xs text-gray-400">{fact.label}</p>
                          <p className="font-semibold text-orange-400">{fact.value}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                )}

                {activeTab === 1 && (
                  <>
                    <motion.h3
                      className="text-3xl font-bold text-orange-400 flex items-center gap-3"
                      variants={itemVariants}
                    >
                      <RocketLaunch />
                      Our Mission
                    </motion.h3>

                    <motion.p className="text-gray-300 text-lg leading-relaxed" variants={itemVariants}>
                      To bring the authentic taste of Rwandan coffee to the world 
                      while empowering local farming communities through fair trade 
                      practices and sustainable agriculture.
                    </motion.p>

                    <motion.div className="space-y-4" variants={containerVariants}>
                      {[
                        { icon: <Group />, text: "Support 1000+ local farmers with fair wages", progress: 65 },
                        { icon: <Forest />, text: "Achieve carbon-neutral coffee production by 2025", progress: 40 },
                        { icon: <Public />, text: "Open 50+ coffee shops worldwide", progress: 30 },
                        { icon: <Psychology />, text: "Train 500+ master baristas", progress: 55 }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="bg-gray-800 p-4 rounded-xl"
                          variants={itemVariants}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-orange-500">{item.icon}</span>
                            <span className="text-sm">{item.text}</span>
                          </div>
                          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.progress}%` }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                )}

                {activeTab === 2 && (
                  <>
                    <motion.h3
                      className="text-3xl font-bold text-orange-400 flex items-center gap-3"
                      variants={itemVariants}
                    >
                      <Waves />
                      Our Vision 2030
                    </motion.h3>

                    <motion.p className="text-gray-300 text-lg leading-relaxed" variants={itemVariants}>
                      To become Africa's most recognized coffee brand, celebrated 
                      for excellence in quality, sustainability, and community 
                      impact.
                    </motion.p>

                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      variants={containerVariants}
                    >
                      {[
                        { year: "2025", target: "30 countries", icon: <Public />, color: "from-blue-500 to-cyan-500" },
                        { year: "2027", target: "Zero waste", icon: <Forest />, color: "from-green-500 to-emerald-500" },
                        { year: "2029", target: "1M farmers", icon: <Group />, color: "from-purple-500 to-pink-500" },
                        { year: "2030", target: "Global leader", icon: <EmojiEvents />, color: "from-yellow-500 to-orange-500" }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className={`bg-gradient-to-br ${item.color} p-4 rounded-xl text-center`}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div className="text-3xl mb-2">{item.icon}</div>
                          <p className="text-sm opacity-90">{item.year}</p>
                          <p className="font-bold text-lg">{item.target}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            By the <span className="text-orange-500">Numbers</span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl text-center cursor-pointer relative overflow-hidden group`}
                variants={statVariants}
                custom={index}
                whileHover="hover"
                onHoverStart={() => setStatsHovered(index)}
                onHoverEnd={() => setStatsHovered(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{
                    scale: statsHovered === index ? [1, 1.5, 2] : 1,
                    opacity: statsHovered === index ? [0, 0.3, 0] : 0
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div
                  className="text-4xl mb-3"
                  animate={{
                    rotate: statsHovered === index ? [0, 15, -15, 0] : 0,
                    scale: statsHovered === index ? [1, 1.2, 1] : 1
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.p
                  className="text-3xl font-bold"
                  animate={{
                    scale: statsHovered === index ? [1, 1.1, 1] : 1
                  }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm opacity-90 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Our <span className="text-orange-500">Journey</span>
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 transform -translate-y-1/2 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  variants={timelineVariants}
                  custom={index}
                  onHoverStart={() => setActiveMilestone(index)}
                  onHoverEnd={() => setActiveMilestone(null)}
                >
                  <motion.div
                    className={`bg-gradient-to-br from-orange-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 cursor-pointer transition-all ${
                      activeMilestone === index ? 'scale-125 shadow-xl shadow-orange-500/50' : ''
                    }`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <motion.p
                    className="font-bold text-orange-400 text-xl"
                    animate={{
                      scale: activeMilestone === index ? 1.1 : 1,
                      color: activeMilestone === index ? '#f97316' : '#fb923c'
                    }}
                  >
                    {item.year}
                  </motion.p>
                  
                  <p className="text-sm font-semibold mb-1">{item.event}</p>
                  
                  <AnimatePresence>
                    {activeMilestone === index && (
                      <motion.p
                        className="text-xs text-gray-400 bg-gray-800 p-2 rounded-lg mt-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            What Our <span className="text-orange-500">Customers Say</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 relative"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* Quote mark */}
                <div className="absolute -top-3 left-6 text-6xl text-orange-500 opacity-30">"</div>
                
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 !text-sm" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 }
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              variants={{
                hidden: { scale: 0.8 },
                visible: { scale: 1 },
                exit: { scale: 0.8 }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Coffee Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <motion.button
                className="absolute top-4 right-4 bg-white/20 p-3 rounded-full hover:bg-white/40"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowVideo(false)}
              >
                <Close />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 }
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              variants={{
                hidden: { scale: 0.8 },
                visible: { scale: 1 },
                exit: { scale: 0.8 }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-2xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.desc}</p>
                <span className="inline-block mt-2 text-xs bg-orange-500 px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
              </motion.div>

              <motion.button
                className="absolute top-4 right-4 bg-white/20 p-3 rounded-full hover:bg-white/40"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <Close />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

