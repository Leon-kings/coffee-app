// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { LocationCity, TrackChanges } from "@mui/icons-material";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);
  
//     // Basic client-side validation
//     if (!formData.name || !formData.email || !formData.message) {
//       setError("Name, email, and message are required");
//       setLoading(false);
//       return;
//     }
  
//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setError("Please enter a valid email address");
//       setLoading(false);
//       return;
//     }
  
//     try {
//       const response = await fetch("https://coffee-node.onrender.com/api/messages", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // Add any required auth headers if needed
//           // "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           ...formData,
//           // Add any additional metadata
//           timestamp: new Date().toISOString(),
//           source: "website-form"
//         }),
//       });
  
//       const result = await response.json();
  
//       if (!response.ok) {
//         // Handle API error responses
//         throw new Error(result.message || "Failed to send message");
//       }
  
//       // Success handling
//       setSuccess(true);
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
      
//       // Optional: Reset success message after delay
//       setTimeout(() => setSuccess(false), 5000);
  
//     } catch (err) {
//       console.error("Submission error:", err);
      
//       // More specific error messages
//       if (err.message.includes("Failed to fetch")) {
//         setError("Network error. Please check your connection.");
//       } else {
//         setError(err.message || "Something went wrong. Please try again later.");
//       }
      
//       // Optional: Auto-dismiss error after delay
//       setTimeout(() => setError(""), 5000);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <section id="contact" className="w-full dark:text-white">
//       {/* Contact Form */}
//       <div className="contact_form pt-32 pb-32">
//         <div className="container mx-auto px-4">
//           <div className="row justify-center">
//             <div className="col-lg-6">
//               <motion.div
//                 className="section_title text-center pb-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="title text-3xl font-bold text-white">
//                   Get In Touch
//                 </h4>
//                 <span className="line block mt-4">
//                   <motion.span
//                     className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                     initial={{ scaleX: 0 }}
//                     whileInView={{ scaleX: 1 }}
//                     transition={{ duration: 0.8 }}
//                   >
//                     <motion.span
//                       className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       transition={{ delay: 0.5, duration: 0.5 }}
//                     ></motion.span>
//                   </motion.span>
//                 </span>
//               </motion.div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="mt-8 bg-white rounded-2xl text-black p-6"
//           >
//             <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
//               <div className="col-lg-6 px-4">
//                 <motion.div
//                   className="single_form mt-6"
//                   initial={{ opacity: 0, x: 0 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <input
//                     name="name"
//                     type="text"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                     required
//                   />
//                 </motion.div>
//               </div>
//               <div className="col-lg-6 px-4">
//                 <motion.div
//                   className="single_form mt-6"
//                   initial={{ opacity: 0, x: 0 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <input
//                     name="email"
//                     type="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                     required
//                   />
//                 </motion.div>
//               </div>
//               <div className="col-lg-12 px-4">
//                 <motion.div
//                   className="single_form mt-6"
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   <input
//                     name="subject"
//                     type="text"
//                     placeholder="Subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                     required
//                   />
//                 </motion.div>
//               </div>
//               <div className="col-lg-12 px-4">
//                 <motion.div
//                   className="single_form mt-6"
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.6 }}
//                   viewport={{ once: true }}
//                 >
//                   <textarea
//                     name="message"
//                     placeholder="Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                     required
//                   ></textarea>
//                 </motion.div>
//               </div>
//               <div className="col-lg-12 px-4">
//                 <motion.div
//                   className="single_form text-center mt-6"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8, delay: 0.8 }}
//                   viewport={{ once: true }}
//                 >
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="main-btn px-8 py-3 dark:bg-blue-400 dark:text-white text-white font-semibold rounded-lg transition-colors duration-300"
//                   >
//                     {loading ? "Sending..." : "SUBMIT"}
//                   </button>
//                 </motion.div>
//               </div>
//             </div>
//           </form>

//           {/* Success and Error Messages */}
//           {success && (
//             <motion.div
//               className="mt-6 text-center text-green-600"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               Message sent successfully!
//             </motion.div>
//           )}
//           {error && (
//             <motion.div
//               className="mt-6 text-center text-red-600"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               {error}
//             </motion.div>
//           )}
//         </div>
//       </div>

//       {/* Google Map */}
//       <div className="w-full rounded-2xl">
//         <div className="w-full pb-4 pt-4">
//           <h4 className="color">Location</h4>
//           <motion.span
//             className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.span
//               className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             ></motion.span>
//           </motion.span>
//         </div>
//         <div className="h-90 w-full py-5">
//           <iframe
//             id="gmap_canvas"
//             src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
//             className="w-full h-full rounded-3xl border-0"
//             title=""
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
























/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Send,
  CheckCircle,
  ErrorOutline,
  Coffee,
  Place,
  WatchLater,
  Language,
  Map,
  Navigation
} from "@mui/icons-material";
// Add AnimatePresence import
import { AnimatePresence } from "framer-motion";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Axios instance configuration
  const api = axios.create({
    baseURL: "https://coffee-node.onrender.com/api",
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  // Validation function
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    if (formData.message.length < 10) {
      setError("Message must be at least 10 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError("");
    setSuccess(false);
  
    try {
      // Using Axios to send POST request
      const response = await api.post("/messages", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "No Subject",
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: "website-contact-form"
      });

      // Check if request was successful
      if (response.status === 200 || response.status === 201) {
        // Success handling
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        
        // Auto-dismiss success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }
  
    } catch (err) {
      console.error("Submission error:", err);
      
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
          // Something else happened
          setError(err.message || "Failed to send message");
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

  // Business information
  const businessInfo = {
    address: "Mission District, San Francisco, CA 94110, USA",
    phone: "+1 (415) 555-0123",
    email: "hello@coffeekitchen.com",
    hours: {
      monday: "7:00 AM - 8:00 PM",
      tuesday: "7:00 AM - 8:00 PM",
      wednesday: "7:00 AM - 8:00 PM",
      thursday: "7:00 AM - 9:00 PM",
      friday: "7:00 AM - 10:00 PM",
      saturday: "8:00 AM - 10:00 PM",
      sunday: "8:00 AM - 6:00 PM"
    },
    social: {
      instagram: "https://instagram.com/coffee.kitchen",
      facebook: "https://facebook.com/coffee.kitchen",
      twitter: "https://twitter.com/coffee_kitchen"
    }
  };

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

  const formVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-gray-900 py-20 relative overflow-hidden">


      {/* Floating Coffee Beans */}
      {[...Array(8)].map((_, i) => (
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Coffee />
              Contact Us
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Address Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/20 p-3 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <LocationOn className="text-orange-500 group-hover:text-white !text-2xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Visit Us</h3>
                  <p className="text-gray-400 mb-1">{businessInfo.address}</p>
                  <a 
                    href="https://maps.google.com/?q=Mission+District+San+Francisco" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-400 text-sm hover:text-orange-300 flex items-center gap-1 mt-2"
                  >
                    <Navigation className="!text-sm" />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg group-hover:bg-orange-500 transition-colors">
                    <Phone className="text-orange-500 group-hover:text-white !text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
                    <a href={`tel:${businessInfo.phone}`} className="text-gray-400 hover:text-orange-400 block">
                      {businessInfo.phone}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">24/7 support available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg group-hover:bg-orange-500 transition-colors">
                    <Email className="text-orange-500 group-hover:text-white !text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
                    <a href={`mailto:${businessInfo.email}`} className="text-gray-400 hover:text-orange-400 block">
                      {businessInfo.email}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/20 p-3 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <AccessTime className="text-orange-500 group-hover:text-white !text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">Opening Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Monday - Wednesday</span>
                      <span>{businessInfo.hours.monday}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Thursday - Friday</span>
                      <span>{businessInfo.hours.thursday}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Saturday</span>
                      <span>{businessInfo.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sunday</span>
                      <span>{businessInfo.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4"
            >
              <motion.a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-gray-400 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook />
              </motion.a>
              <motion.a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-gray-400 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram />
              </motion.a>
              <motion.a
                href={businessInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-gray-400 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gray-800 text-gray-400 p-3 rounded-full hover:bg-blue-700 hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedIn />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="text-orange-500" />
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      disabled={loading}
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      disabled={loading}
                    />
                  </motion.div>
                </div>

                {/* Subject Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    disabled={loading}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                    disabled={loading}
                  ></textarea>
                </motion.div>

                {/* Submit Button & Messages */}
                <motion.div variants={itemVariants}>
                  {/* Success Message */}
                  <AnimatePresence>
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-2 text-green-400"
                      >
                        <CheckCircle className="!text-lg" />
                        <span>Message sent successfully! We'll get back to you soon.</span>
                      </motion.div>
                    )}

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-2 text-red-400"
                      >
                        <ErrorOutline className="!text-lg" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-amber-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-gray-500 text-xs mt-3 text-center">
                    * Required fields. We'll never share your information.
                  </p>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className=" backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <Map className="text-orange-500" />
              <h3 className="text-xl font-bold text-white">Our Location</h3>
            </div>
            <div className="h-96 w-full rounded-xl overflow-hidden">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                title="Coffee & Kitchen Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};



