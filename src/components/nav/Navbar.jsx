// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import logo from "../../assets/images/images.png";
// import close from "../../assets/images/signs-close-icon-png.webp";
// import Menu from "../../assets/images/icon-menu-bar-red-NxJBZd9-600.jpg";
// import { Link } from "react-router-dom";
// import { Home, MenuBook, RoomService, ShoppingBag } from "@mui/icons-material";

// export const navLinks = [
//   { id: "home", title: "/", icon: <Home /> },
//   { id: "features", title: "/Coffee-279237-803/Menu", icon: <RoomService /> },
//   { id: "product", title: "/Product/234-345/list", icon: <MenuBook /> },
//   { id: "clients", title: "/About-73297-839/us", icon: <ShoppingBag /> },
// ];

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <motion.nav
//       className="w-full flex py-6 justify-between items-center navbar"
//       initial={{ opacity: 0, y: 0 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Logo */}
//       <motion.h1
//         className="text-3xl text-white"
//         whileHover={{ scale: 1.1 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Link to={"/"}>
//           <img src={logo} className="w-16 h-[60px] rounded-2xl left-0 " alt="" />
//         </Link>
//       </motion.h1>

//       {/* Desktop Navigation */}
//       <ul className="list-none sm:flex hidden gap-6 justify-end items-center flex-1">
//         {navLinks.map((nav, index) => (
//           <Link to={nav.title} key={index}>
//             <motion.button>{nav.icon}</motion.button>
//           </Link>
//         ))}
//       </ul>

//       {/* Mobile Navigation */}
//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <button>
//           <motion.img
//             src={toggle ? close : Menu}
//             alt="Menu"
//             className="w-full h-[28px] object-cover"
//             onClick={() => setToggle(!toggle)}
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//           />
//         </button>
//         {/* Mobile Sidebar */}
//         <motion.div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-black-gradient absolute top-20 right-0 my-2 min-w-[140px] rounded-xl sidebar`}
//           initial={{ opacity: 0, x: 0 }}
//           animate={{ opacity: toggle ? 1 : 0, x: toggle ? 0 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav, index) => (
//               <Link to={nav.title} key={index}>
//                 <motion.button>{nav.icon}</motion.button>
//               </Link>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


















/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/images.png";
import close from "../../assets/images/signs-close-icon-png.webp";
import Menu from "../../assets/images/icon-menu-bar-red-NxJBZd9-600.jpg";
import { Link } from "react-router-dom";
import { 
  Home, 
  MenuBook, 
  RoomService, 
  ShoppingBag,
  ContactMail,
  Login,
  PersonAdd,
  Close,
  Send,
  Email,
  Lock,
  Person
} from "@mui/icons-material";
import axios from 'axios';

export const navLinks = [
  { id: "home", title: "/", icon: <Home />, name: "Home" },
  { id: "features", title: "/Coffee-279237-803/Menu", icon: <RoomService />, name: "Menu" },
  { id: "product", title: "/Product/234-345/list", icon: <MenuBook />, name: "Products" },
  { id: "clients", title: "/About-73297-839/us", icon: <ShoppingBag />, name: "About" },
];

const API_BASE_URL = 'https://your-api-endpoint.com/api'; // Replace with your actual API endpoint

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      
      if (response.data.success) {
        alert('Message sent successfully!');
        setShowContactModal(false);
        setFormData({ name: '', email: '', message: '', password: '', confirmPassword: '' });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle authentication (login/register) submission
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (authMode === 'register' && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const endpoint = authMode === 'login' ? '/login' : '/register';
      const response = await axios.post(`${API_BASE_URL}${endpoint}`, {
        name: authMode === 'register' ? formData.name : undefined,
        email: formData.email,
        password: formData.password
      });
      
      if (response.data.success) {
        alert(authMode === 'login' ? 'Logged in successfully!' : 'Registered successfully!');
        setShowAuthModal(false);
        setFormData({ name: '', email: '', message: '', password: '', confirmPassword: '' });
        // Store token if needed
        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token);
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || `Failed to ${authMode}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  // Modal animations
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  };

  return (
    <>
      <motion.nav
        className="w-full flex py-6 px-6 justify-between items-center navbar bg-gradient-to-b from-black/90 to-transparent fixed top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.h1
          className="text-3xl text-white"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Link to={"/"}>
            <img src={logo} className="w-16 h-[60px] rounded-2xl left-0 object-cover" alt="Logo" />
          </Link>
        </motion.h1>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden gap-4 justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <Link to={nav.title} key={index}>
              <motion.button
                className="text-white hover:text-gray-300 transition-colors p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {nav.icon}
                <span className="sr-only">{nav.name}</span>
              </motion.button>
            </Link>
          ))}
          
          {/* Contact Button */}
          <motion.button
            className="bg-gradient-to-t from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContactModal(true)}
          >
            <ContactMail />
            <span>Contact</span>
          </motion.button>

          {/* Login/Register Buttons */}
          <motion.button
            className="bg-gradient-to-t from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setAuthMode('login');
              setShowAuthModal(true);
            }}
          >
            <Login />
            <span>Login</span>
          </motion.button>

          <motion.button
            className="bg-gradient-to-t from-green-600 to-teal-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setAuthMode('register');
              setShowAuthModal(true);
            }}
          >
            <PersonAdd />
            <span>Register</span>
          </motion.button>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-2">
          {/* Mobile Contact Button */}
          <motion.button
            className="bg-gradient-to-t from-red-600 to-orange-500 text-white p-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContactModal(true)}
          >
            <ContactMail />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : Menu}
              alt="Menu"
              className="w-8 h-8 object-cover"
            />
          </motion.button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              className="fixed top-20 right-4 my-2 min-w-[200px] rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-700 shadow-2xl z-50"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col p-4">
                {navLinks.map((nav, index) => (
                  <Link to={nav.title} key={index} className="w-full" onClick={() => setToggle(false)}>
                    <motion.button
                      className="text-white hover:text-gray-300 transition-colors p-3 w-full text-left flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      {nav.icon}
                      <span>{nav.name}</span>
                    </motion.button>
                  </Link>
                ))}
                
                {/* Mobile Auth Buttons */}
                <div className="w-full border-t border-gray-700 mt-2 pt-2">
                  <motion.button
                    className="text-white hover:text-gray-300 transition-colors p-3 w-full text-left flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      setAuthMode('login');
                      setShowAuthModal(true);
                      setToggle(false);
                    }}
                  >
                    <Login />
                    <span>Login</span>
                  </motion.button>
                  
                  <motion.button
                    className="text-white hover:text-gray-300 transition-colors p-3 w-full text-left flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      setAuthMode('register');
                      setShowAuthModal(true);
                      setToggle(false);
                    }}
                  >
                    <PersonAdd />
                    <span>Register</span>
                  </motion.button>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              className="bg-gradient-to-t from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <ContactMail className="text-red-500" />
                  Contact Us
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <Close />
                </motion.button>
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-500 p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Person className="text-sm" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Email className="text-sm" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Send className="text-sm" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-t from-red-600 to-orange-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? 'Sending...' : (
                    <>
                      <Send />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal (Login/Register) */}
      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAuthModal(false)}
          >
            <motion.div
              className="bg-gradient-to-t from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  {authMode === 'login' ? <Login className="text-blue-500" /> : <PersonAdd className="text-green-500" />}
                  {authMode === 'login' ? 'Login' : 'Register'}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAuthModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <Close />
                </motion.button>
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-500 p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authMode === 'register' && (
                  <div>
                    <label className="block text-gray-300 mb-2 flex items-center gap-2">
                      <Person />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Email />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Lock />
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your password"
                  />
                </div>

                {authMode === 'register' && (
                  <div>
                    <label className="block text-gray-300 mb-2 flex items-center gap-2">
                      <Lock />
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                    authMode === 'login' 
                      ? 'bg-gradient-to-t from-blue-600 to-purple-600' 
                      : 'bg-gradient-to-t from-green-600 to-teal-500'
                  } text-white`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? 'Processing...' : (
                    <>
                      {authMode === 'login' ? <Login /> : <PersonAdd />}
                      {authMode === 'login' ? 'Login' : 'Register'}
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-400 mt-4">
                  {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                    className="text-blue-500 hover:text-blue-400 font-semibold"
                  >
                    {authMode === 'login' ? 'Register' : 'Login'}
                  </button>
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

