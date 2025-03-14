/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/favicon.png";
import close from "../../assets/images/signs-close-icon-png.webp";
import Menu from "../../assets/images/icon-menu-bar-red-NxJBZd9-600.jpg";
import { Link } from "react-router-dom";
import { AbcOutlined, Home, MenuBook, RoomService } from "@mui/icons-material";

export const navLinks = [
  { id: "home", title: "/", icon: <Home /> },
  { id: "features", title: "/", icon: <RoomService /> },
  { id: "product", title: "/Menu-7937-83/list", icon: <MenuBook /> },
  { id: "clients", title: "/About-73297-839/us", icon: <AbcOutlined /> },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      className="w-full flex py-6 justify-between items-center navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.h1
        className="text-3xl text-white"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img src={logo} className="w-10" alt="" />
      </motion.h1>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden gap-6 justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <Link to={nav.title} key={index}>
            <motion.button>{nav.icon}</motion.button>
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button>
          <motion.img
            src={toggle ? close : Menu}
            alt="Menu"
            className="w-full h-[28px] object-cover"
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </button>
        {/* Mobile Sidebar */}
        <motion.div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: toggle ? 1 : 0, x: toggle ? 0 : 50 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <Link to={nav.title} key={index}>
                <motion.button>{nav.icon}</motion.button>
              </Link>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
