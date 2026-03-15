// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
// import { Button, Card } from "@mui/material";
// import Time from "../time/Time";
// import { about } from "../../assets/data/assets";
// const FooterSection = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     try {
//       const response = await fetch("https://your-api-endpoint.com/subscribe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to subscribe");
//       }

//       const result = await response.json();
//       setSuccess(true);
//       setEmail("");
//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="footer"
//       className="w-full bg-gray-900 dark:text-white text-white"
//     >
//       {/* Footer Subscribe */}
//       <div className="w-full bg-white text-black rounded-2xl pt-20 pb-20">
//         <div className="container mx-auto px-4">
//           <div className="row flex flex-wrap items-center">
//             <div className="col-lg-6 w-full lg:w-1/2">
//               <motion.div
//                 className="subscribe_title mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="title text-2xl font-bold">
//                   Subscribe Our Newsletter
//                 </h4>
//                 <p className="text-gray-400">To receive monthly updates</p>
//               </motion.div>
//             </div>
//             <div className="col-lg-6 w-full lg:w-1/2">
//               <motion.div
//                 className="subscribe_form mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex text-black border-black bg-gray-500"
//                 >
//                   <input
//                     type="email"
//                     placeholder="Enter Your Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="px-6 py-3 dark:bg-blue-400 dark:text-white text-white rounded-r-lg  transition-colors duration-300"
//                   >
//                     {loading ? "Sending..." : "Subscribe"}
//                   </button>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Widget */}
//       <div className="footer_widget pt-20 pb-20">
//         <div className="container mx-auto px-4">
//           <div className="row flex flex-wrap">
//             {/* About Us */}
//             <div className="col-lg-4 col-md-4 w-full lg:w-1/3">
//               <motion.div
//                 className="footer_about mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="footer_title text-xl font-bold mb-4">
//                   About Us
//                 </h4>
//                 <motion.span
//                   className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.span
//                     className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   ></motion.span>
//                 </motion.span>
//                 <p className="text-gray-400 pt-4">
//                   By drinking this coffee, you are investing in women farmers as
//                   they produce high quality products that increase economic
//                   independence for themselves and their families.
//                 </p>
//                 <ul className="social flex mt-4 space-x-4">
//                   <li>
//                     <Button
//                       href="#"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <Facebook className="size-6" />
//                     </Button>
//                   </li>
//                   <li>
//                     <Button
//                       href="#"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <Twitter className="size-6" />
//                     </Button>
//                   </li>
//                   <li>
//                     <Button
//                       href="#"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <Instagram className="size-6" />
//                     </Button>
//                   </li>
//                   <li>
//                     <Button
//                       href="#"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <LinkedIn className="size-6" />
//                     </Button>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Opening Hours */}
//             <div className="col-lg-4 w-full lg:w-1/3">
//               <motion.div
//                 className="footer_link mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="footer_title text-xl font-bold mb-4">
//                   Opening Hours
//                 </h4>
//                 <motion.span
//                   className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.span
//                     className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   ></motion.span>
//                 </motion.span>
//                 <ul className="text-gray-400 pt-4">
//                   <li>
//                     Mon-Fri: <b> 08.00 A.M - 10.00 P.M</b>
//                   </li>
//                   <li>
//                     Saturday: <b> 08.00 A.M - 02.00 P.M</b>
//                   </li>
//                   <li>
//                     Sunday: <b> Closed</b>
//                   </li>
//                   <li>
//                     Half-Holidays: <b> 08.00 A.M - 02.00 P.M</b>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Instagram Feed */}
//             <div className="col-lg-4 col-md-4 w-full lg:w-1/3">
//               <motion.div
//                 className="footer_instagram mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="footer_title text-xl font-bold mb-4">
//                   Instagram Feed
//                 </h4>
//                 <motion.span
//                   className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.span
//                     className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   ></motion.span>
//                 </motion.span>
//                 <div className="grid grid-cols-4 gap-2 pt-4">
//                   {about.map((image) => (
//                     <Card key={image.id}>
//                       <img
//                         src={image.url}
//                         alt=""
//                         className="w-full h-24 object-cover rounded-lg"
//                       />
//                     </Card>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Copyright */}
//       <div className="footer_copyright pt-8 pb-8 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="copyright text-center">
//             <div className="time">
//               <Time />{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FooterSection;





















/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Send,
  CheckCircle,
  ErrorOutline,
  Coffee,
  Place,
  WatchLater,
  Language,
  Map,
  Navigation,
  Copyright,
  Favorite,
  LocalCafe,
  ArrowUpward
} from "@mui/icons-material";
import { Button, Card, IconButton } from "@mui/material";
import Time from "../time/Time";
import { about } from "../../assets/data/assets";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Axios instance configuration
  const api = axios.create({
    baseURL: "https://your-api-endpoint.com/api",
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  // Handle subscribe form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setTimeout(() => setError(""), 5000);
      return;
    }
    
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Using Axios to send POST request
      const response = await api.post("/subscribe", {
        email: email,
        subscribedAt: new Date().toISOString(),
        source: "website-footer"
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        setEmail("");
        
        // Auto-dismiss success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      console.error("Subscription error:", err);
      
      // Handle Axios specific errors
      if (axios.isAxiosError(err)) {
        if (err.code === 'ECONNABORTED') {
          setError("Request timeout. Please try again.");
        } else if (err.response) {
          // Server responded with error
          setError(err.response.data?.message || `Server error: ${err.response.status}`);
        } else if (err.request) {
          // Request made but no response
          setError("No response from server. Please check your connection.");
        } else {
          setError(err.message || "Failed to subscribe");
        }
      } else {
        setError("An unexpected error occurred");
      }
      
      // Auto-dismiss error after 5 seconds
      setTimeout(() => setError(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to top functionality
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Business information
  const businessInfo = {
    address: "Mission District, San Francisco, CA 94110, USA",
    phone: "+1 (415) 555-0123",
    email: "hello@coffeekitchen.com",
    hours: {
      weekdays: "08:00 AM - 10:00 PM",
      saturday: "08:00 AM - 02:00 PM",
      sunday: "Closed",
      holidays: "08:00 AM - 02:00 PM"
    },
    social: {
      facebook: "https://facebook.com/coffee.kitchen",
      instagram: "https://instagram.com/coffee.kitchen",
      twitter: "https://twitter.com/coffee_kitchen",
      linkedin: "https://linkedin.com/company/coffee-kitchen"
    }
  };

  // Quick links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" }
  ];

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8 }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 }
    }
  };

  return (
    <footer
     
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white mt-10 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/coffee-beans.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "100px"
          }}
        />
      </div>

      {/* Floating Coffee Beans */}
      {[...Array(6)].map((_, i) => (
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
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🫘
        </motion.div>
      ))}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-4 right-4 z-50 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpward />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 mt-22 relative z-10">
        {/* Footer Subscribe */}
        <motion.div
          className="relative -mt-20 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-1">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Subscribe to Our Newsletter
                  </h4>
                  <p className="text-gray-400">
                    Get the latest updates on new products and upcoming events
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <form onSubmit={handleSubmit} className="relative">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 relative">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-r-none text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                          disabled={loading}
                          required
                        />
                        <Email className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg sm:rounded-l-none hover:from-orange-600 hover:to-amber-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send />
                            Subscribe
                          </>
                        )}
                      </button>
                    </div>

                    {/* Success/Error Messages */}
                    <AnimatePresence>
                      {success && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -bottom-12 left-0 right-0 text-center"
                        >
                          <span className="text-green-400 text-sm flex items-center justify-center gap-1">
                            <CheckCircle className="!text-sm" />
                            Successfully subscribed! Check your email.
                          </span>
                        </motion.div>
                      )}

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -bottom-12 left-0 right-0 text-center"
                        >
                          <span className="text-red-400 text-sm flex items-center justify-center gap-1">
                            <ErrorOutline className="!text-sm" />
                            {error}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Widget */}
        <div className="footer_widget pt-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="footer_about">
                <div className="flex items-center gap-2 mb-6">
                  <LocalCafe className="text-orange-500 text-3xl" />
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Coffee & Kitchen
                  </h4>
                </div>

                <motion.span
                  className="line block w-16 h-1 bg-orange-500 relative"
                  variants={lineVariants}
                >
                  <motion.span
                    className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
                    variants={dotVariants}
                  ></motion.span>
                </motion.span>

                <p className="text-gray-400 mt-6 leading-relaxed">
                  By drinking this coffee, you are investing in women farmers as
                  they produce high quality products that increase economic
                  independence for themselves and their families.
                </p>

                {/* Contact Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <LocationOn className="text-orange-500 !text-lg" />
                    <span className="text-sm">{businessInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="text-orange-500 !text-lg" />
                    <a href={`tel:${businessInfo.phone}`} className="text-sm hover:text-orange-400 transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Email className="text-orange-500 !text-lg" />
                    <a href={`mailto:${businessInfo.email}`} className="text-sm hover:text-orange-400 transition-colors">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <ul className="flex mt-6 space-x-3">
                  <motion.li whileHover={{ scale: 1.1, y: -3 }}>
                    <a
                      href={businessInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-gray-400 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all block"
                    >
                      <Facebook className="!text-lg" />
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1, y: -3 }}>
                    <a
                      href={businessInfo.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-gray-400 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-all block"
                    >
                      <Twitter className="!text-lg" />
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1, y: -3 }}>
                    <a
                      href={businessInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-gray-400 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-all block"
                    >
                      <Instagram className="!text-lg" />
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1, y: -3 }}>
                    <a
                      href={businessInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-gray-400 p-3 rounded-full hover:bg-blue-700 hover:text-white transition-all block"
                    >
                      <LinkedIn className="!text-lg" />
                    </a>
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="footer_link">
                <h4 className="footer_title text-xl font-bold mb-6">Quick Links</h4>
                <motion.span
                  className="line block w-16 h-1 bg-orange-500 relative"
                  variants={lineVariants}
                >
                  <motion.span
                    className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
                    variants={dotVariants}
                  ></motion.span>
                </motion.span>

                <ul className="mt-6 space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href={link.path}
                        className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="footer_hours">
                <h4 className="footer_title text-xl font-bold mb-6">Opening Hours</h4>
                <motion.span
                  className="line block w-16 h-1 bg-orange-500 relative"
                  variants={lineVariants}
                >
                  <motion.span
                    className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
                    variants={dotVariants}
                  ></motion.span>
                </motion.span>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Monday - Friday</span>
                    <span className="text-white font-semibold">{businessInfo.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Saturday</span>
                    <span className="text-white font-semibold">{businessInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Sunday</span>
                    <span className="text-red-400 font-semibold">{businessInfo.hours.sunday}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Half-Holidays</span>
                    <span className="text-white font-semibold">{businessInfo.hours.holidays}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center gap-2 text-orange-400">
                    <AccessTime className="!text-lg" />
                    <span className="text-sm">Open now until 10:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Instagram Feed */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="footer_instagram">
                <h4 className="footer_title text-xl font-bold mb-6">Instagram Feed</h4>
                <motion.span
                  className="line block w-16 h-1 bg-orange-500 relative"
                  variants={lineVariants}
                >
                  <motion.span
                    className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
                    variants={dotVariants}
                  ></motion.span>
                </motion.span>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {about.slice(0, 6).map((image, index) => (
                    <motion.div
                      key={image.id}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src={image.url}
                        alt={`Instagram ${index + 1}`}
                        className="w-full h-24 object-cover hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    </motion.div>
                  ))}
                </div>

                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                >
                  <Instagram />
                  Follow us on Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </footer>
  );
};

