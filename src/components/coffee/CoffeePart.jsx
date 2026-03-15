// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";
// import { coffeeItems } from "../../assets/data/assets";
// const CoffeeSection = () => {
//   return (
//     <section id="coffee" className="coffee_area pt-32 pb-20">
//       <div className="container mx-auto px-4">
//         <div className="row justify-content-center">
//           <div className="col-lg-6">
//             <div className="section_title text-center pb-12">
//               <h4 className="title text-3xl font-bold">Our Specials</h4>
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

//         <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 justify-center">
//           {coffeeItems.map((item) => (
//             <motion.div
//               key={item.id}
//               className="bg-white rounded-2xl p-4 text-black"
//               initial={{ opacity: 0, y: 0 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: item.delay }}
//               viewport={{ once: true }}
//             >
//               <div className="single_coffee text-center mt-8">
//                 <div className="coffee_image">
//                   <img
//                     src={item.image}
//                     alt=""
//                     className="w-full h-64 object-cover rounded-lg"
//                   />
//                 </div>
//                 <div className="coffee_content mt-6">
//                   <h4 className="coffee_title text-2xl font-semibold mb-4">
//                     {item.title}
//                   </h4>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoffeeSection;
















/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import OpacityIcon from '@mui/icons-material/Opacity';
import GrassIcon from '@mui/icons-material/Grass';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import GrainIcon from '@mui/icons-material/Grain';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import CoffeeIcon from '@mui/icons-material/Coffee';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpaIcon from '@mui/icons-material/Spa';
import TimerIcon from '@mui/icons-material/Timer';

// Coffee data with images and details
export const coffeeItems = [
  {
    id: 1,
    title: "Espresso Romano",
    description: "Rich espresso with a twist of lemon, creating a perfect balance of bitterness and citrus. A traditional Italian favorite that awakens the senses.",
    longDescription: "Our signature Espresso Romano is a tribute to Italian coffee culture. Made from premium Arabica beans, this intense shot of espresso is served with a twist of fresh lemon peel, which cuts through the richness and adds a bright, citrusy note. The result is a harmonious balance of bold coffee flavor and refreshing zest that awakens the senses.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
    category: "Espresso",
    origin: "Italy",
    roast: "Dark",
    inStock: true,
    aroma: "Intense with citrus notes",
    brewingMethod: "Espresso Machine",
    bestTime: "Morning",
    calories: 5,
    caffeine: "High",
    intensity: "Bold"
  },
  {
    id: 2,
    title: "Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and topped with caramel drizzle.",
    longDescription: "Indulge in our signature Caramel Macchiato, a beautifully layered beverage that's as stunning as it is delicious. We start with creamy vanilla syrup, add steamed milk, and then 'mark' it with a shot of our rich espresso. The final touch is a crosshatch of buttery caramel drizzle that slowly sinks through the layers, creating a sweet, velvety experience in every sip.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600",
    category: "Specialty",
    origin: "Colombia",
    roast: "Medium",
    inStock: true,
    aroma: "Sweet caramel with coffee notes",
    brewingMethod: "Espresso Machine",
    bestTime: "Afternoon",
    calories: 250,
    caffeine: "Medium",
    intensity: "Medium"
  },
  {
    id: 3,
    title: "Mocha Deluxe",
    description: "Rich chocolate and espresso combined with steamed milk, topped with whipped cream and chocolate shavings.",
    longDescription: "For chocolate and coffee lovers alike, our Mocha Deluxe is pure bliss. We combine our signature espresso with rich, velvety chocolate syrup and steamed milk, creating a perfect harmony of bitter and sweet. Topped with a generous swirl of whipped cream and a dusting of cocoa powder, this indulgent drink is like a dessert in a cup.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    category: "Chocolate",
    origin: "Brazil",
    roast: "Medium-Dark",
    inStock: true,
    aroma: "Rich chocolate and roasted coffee",
    brewingMethod: "Espresso Machine",
    bestTime: "Evening dessert",
    calories: 320,
    caffeine: "Medium",
    intensity: "Rich"
  },
  {
    id: 4,
    title: "Cold Brew Black",
    description: "Smooth, cold-brewed coffee served over ice for a refreshing experience with zero bitterness.",
    longDescription: "Our Cold Brew Black is crafted through a 16-hour slow-steeping process that extracts the coffee's natural sweetness and reduces acidity. The result is an incredibly smooth, full-bodied coffee concentrate that we serve over ice. Unlike traditional iced coffee, our cold brew never tastes bitter or watered down – just pure, refreshing coffee flavor.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    category: "Cold",
    origin: "Ethiopia",
    roast: "Light",
    inStock: true,
    aroma: "Fruity and floral",
    brewingMethod: "Cold Brew",
    bestTime: "Afternoon refreshment",
    calories: 10,
    caffeine: "High",
    intensity: "Smooth"
  },
  {
    id: 5,
    title: "French Vanilla Latte",
    description: "Smooth espresso with creamy vanilla and steamed milk, creating a comforting and aromatic experience.",
    longDescription: "Experience the classic comfort of our French Vanilla Latte. We start with a smooth shot of espresso, add rich vanilla syrup, and finish with perfectly steamed milk for a creamy, dreamy texture. The vanilla flavor is warm and authentic – not too sweet, with hints of caramel and hazelnut that complement rather than mask the quality of our espresso.",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600",
    category: "Latte",
    origin: "Guatemala",
    roast: "Medium",
    inStock: true,
    aroma: "Sweet vanilla and roasted nuts",
    brewingMethod: "Espresso Machine",
    bestTime: "All day",
    calories: 190,
    caffeine: "Medium",
    intensity: "Creamy"
  },
  {
    id: 6,
    title: "Yemeni Specialty",
    description: "Exclusive premium coffee from the ancient mountains of Yemen, with notes of wine and dark chocolate.",
    longDescription: "Our Yemeni Specialty is a rare and exclusive coffee that takes you on a journey through coffee history. Grown in the terraced mountains of Yemen at high altitudes, these beans are naturally processed and sun-dried, resulting in a complex flavor profile with notes of wine, dark chocolate, and dried fruits. This is not just coffee – it's an experience that connects you to the origins of coffee cultivation. Due to its rarity and exceptional quality, this special coffee requires its own dedicated page to fully appreciate its story.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
    category: "Specialty Reserve",
    origin: "Yemen",
    roast: "Medium-Light",
    inStock: true,
    aroma: "Wine, chocolate, dried fruits",
    brewingMethod: "Pour Over / Siphon",
    bestTime: "Special occasions",
    calories: 5,
    caffeine: "Medium",
    intensity: "Complex"
  }
];

export const CoffeeSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  // Enhanced coffee data with additional details
  const enhancedCoffeeItems = coffeeItems.map((item, index) => ({
    ...item,
    rating: (4.5 + (index * 0.1)).toFixed(1),
    reviews: Math.floor(120 + index * 30),
    price: (4.99 + index * 0.5).toFixed(2),
    badge: index === 0 ? "Bestseller" : 
           index === 1 ? "New Arrival" : 
           index === 2 ? "Popular" : 
           index === 4 ? "Customer Favorite" :
           index === 5 ? "Limited Edition" : "Signature",
    badgeIcon: index === 0 ? <EmojiEventsIcon className="text-xs" /> : 
               index === 1 ? <NewReleasesIcon className="text-xs" /> : 
               index === 2 ? <TrendingUpIcon className="text-xs" /> :
               index === 4 ? <FreeBreakfastIcon className="text-xs" /> :
               index === 5 ? <LocalFireDepartmentIcon className="text-xs" /> :
               <CoffeeIcon className="text-xs" />,
    notes: ["Chocolate", "Caramel", "Berry", "Nutty", "Floral", "Citrus", "Spice", "Honey"][index % 8]
  }));

  // Handle view details click
  const handleViewDetails = (item) => {
    if (item.id === 6) {
      // Navigate to new page when id is 6 (Yemeni Specialty)
      navigate('/special-coffee', { state: { coffee: item } });
    } else {
      // Show modal for other items
      setSelectedItem(item);
    }
  };

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
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
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

  const badgeVariants = {
    initial: { x: -50, opacity: 0, rotate: -45 },
    animate: { 
      x: 0, 
      opacity: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5
        }
      }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.1,
      rotate: 2,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    hover: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    tap: { scale: 0.95 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  const overlayModalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  const specialButtonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: { scale: 0.95 }
  };

  // Render stars for rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} className="text-yellow-400 !text-base sm:!text-lg" />);
    }
    if (hasHalf) {
      stars.push(<StarHalfIcon key="half" className="text-yellow-400 !text-base sm:!text-lg" />);
    }
    return stars;
  };

  return (
    <section 
      id="coffee" 
      className="coffee_area pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0f0a 0%, #2d1a12 50%, #1a0f0a 100%)"
      }}
    >
      {/* Animated Background Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-orange-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${i % 2 === 0 ? 20 : 40}px`,
            display: i > 5 ? 'none' : 'block',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <LocalCafeIcon style={{ fontSize: 'inherit' }} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 xs:px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <motion.div 
              className="section_title text-center pb-8 sm:pb-10 md:pb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h4 
                className="title text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4"
                variants={titleVariants}
                style={{
                  background: "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #fbbf24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%"
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Our Specials
              </motion.h4>
              
              <motion.p 
                className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
                variants={titleVariants}
                transition={{ delay: 0.2 }}
              >
                Discover our handcrafted selection of premium coffees, 
                roasted to perfection for an unforgettable experience
              </motion.p>
              
              <motion.span
                className="line block w-16 xs:w-20 sm:w-24 h-1 mx-auto mt-4 sm:mt-5 md:mt-6 relative"
                variants={lineVariants}
                style={{
                  background: "linear-gradient(90deg, transparent, #f97316, #fbbf24, #f97316, transparent)"
                }}
              >
                <motion.span
                  className="box absolute w-2 xs:w-2.5 sm:w-3 h-2 xs:h-2.5 sm:h-3 rounded-full -top-1"
                  variants={dotVariants}
                  style={{
                    background: "radial-gradient(circle, #fbbf24, #f97316)",
                    left: "calc(50% - 4px)",
                    boxShadow: "0 0 15px #f97316"
                  }}
                />
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Coffee Items Grid */}
        <motion.div 
          className="w-full grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {enhancedCoffeeItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative w-full"
              variants={itemVariants}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {/* Card Container */}
              <motion.div
                className={`bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 text-gray-800 shadow-2xl relative overflow-hidden group cursor-pointer ${
                  item.id === 6 ? 'ring-2 ring-orange-500 ring-opacity-50' : ''
                }`}
                whileHover={{
                  y: -10,
                  boxShadow: "0 30px 40px -15px rgba(249, 115, 22, 0.5)",
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }
                }}
                onClick={() => handleViewDetails(item)}
              >
                {/* Special Badge for Yemeni Coffee */}
                {item.id === 6 && (
                  <motion.div
                    className="absolute -top-1 -right-1 z-30"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.5
                    }}
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg flex items-center gap-1 shadow-lg">
                      <MenuBookIcon className="!text-xs" />
                      <span>Special Edition</span>
                    </div>
                  </motion.div>
                )}

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -right-10 -top-10 w-20 xs:w-24 sm:w-32 md:w-40 h-20 xs:h-24 sm:h-32 md:h-40 rounded-full opacity-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: "radial-gradient(circle, #f97316, transparent)"
                  }}
                />

                {/* Badge */}
                <motion.div
                  className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 z-20"
                  variants={badgeVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] xs:text-xs font-bold px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full shadow-lg flex items-center gap-0.5 xs:gap-1">
                    <span className="text-xs xs:text-sm">{item.badgeIcon}</span>
                    <span className="hidden xs:inline">{item.badge}</span>
                    <span className="xs:hidden">{item.badge.slice(0, 3)}</span>
                  </span>
                </motion.div>

                {/* Image Container */}
                <motion.div
                  className="relative h-40 xs:h-48 sm:h-56 md:h-64 mb-3 xs:mb-4 sm:mb-5 md:mb-6 overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl"
                  whileHover="hover"
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                  />
                  
                  {/* Image Overlay with Quick View */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-2 xs:pb-3 sm:pb-4 md:pb-6"
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="hover"
                  >
                    <motion.button
                      className={`${
                        item.id === 6 
                          ? 'bg-gradient-to-r from-purple-600 to-orange-600' 
                          : 'bg-orange-500'
                      } text-white p-2 xs:p-2.5 sm:p-3 rounded-full shadow-lg`}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(item);
                      }}
                    >
                      {item.id === 6 ? (
                        <MenuBookIcon className="!text-sm xs:!text-base sm:!text-lg md:!text-xl" />
                      ) : (
                        <VisibilityIcon className="!text-sm xs:!text-base sm:!text-lg md:!text-xl" />
                      )}
                    </motion.button>
                  </motion.div>

                  {/* Special Indicator for Yemeni Coffee */}
                  {item.id === 6 && (
                    <motion.div
                      className="absolute top-2 left-2 bg-purple-600 text-white p-1 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <MenuBookIcon className="!text-xs" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="coffee_content relative z-10"
                  animate={{
                    y: hoveredItem === item.id ? -5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1 xs:gap-2 mb-2 xs:mb-3">
                    <motion.h4 
                      className="coffee_title text-base xs:text-lg sm:text-xl md:text-2xl font-bold"
                      whileHover={{ x: 5 }}
                      style={{
                        background: "linear-gradient(135deg, #7c2d12, #9a3412)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      {item.title}
                    </motion.h4>
                    
                    {/* Price */}
                    <motion.div
                      className="text-left xs:text-right"
                      animate={{
                        scale: hoveredItem === item.id ? 1.1 : 1
                      }}
                    >
                      <span className="text-[10px] xs:text-xs text-gray-500">from</span>
                      <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-orange-600">
                        ${item.price}
                      </p>
                    </motion.div>
                  </div>

                  {/* Rating */}
                  <div className="flex flex-wrap items-center gap-1 xs:gap-2 mb-2 xs:mb-3">
                    <div className="flex gap-0.5 xs:gap-1">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-[10px] xs:text-xs sm:text-sm text-gray-600">
                      ({item.reviews})
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs xs:text-sm mb-2 xs:mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Coffee Details Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mb-2 xs:mb-3 sm:mb-4"
                    animate={{
                      y: hoveredItem === item.id ? -3 : 0
                    }}
                  >
                    <motion.span
                      className="text-[8px] xs:text-[10px] sm:text-xs px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full bg-orange-100 text-orange-800 flex items-center gap-0.5 xs:gap-1"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#f97316",
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <LocationOnIcon className="!text-[10px] xs:!text-xs" />
                      <span className="hidden xs:inline">{item.origin}</span>
                      <span className="xs:hidden">{item.origin.slice(0, 3)}</span>
                    </motion.span>
                    
                    <motion.span
                      className="text-[8px] xs:text-[10px] sm:text-xs px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full bg-orange-100 text-orange-800 flex items-center gap-0.5 xs:gap-1"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#f97316",
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <LocalFireDepartmentIcon className="!text-[10px] xs:!text-xs" />
                      <span className="hidden xs:inline">{item.roast}</span>
                      <span className="xs:hidden">{item.roast.slice(0, 3)}</span>
                    </motion.span>
                    
                    <motion.span
                      className="text-[8px] xs:text-[10px] sm:text-xs px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full bg-orange-100 text-orange-800 flex items-center gap-0.5 xs:gap-1"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#f97316",
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <GrassIcon className="!text-[10px] xs:!text-xs" />
                      <span className="hidden xs:inline">{item.notes}</span>
                      <span className="xs:hidden">{item.notes.slice(0, 3)}</span>
                    </motion.span>
                  </motion.div>

                  {/* View Details Button - Different for Yemeni Coffee */}
                  <motion.button
                    className={`w-full ${
                      item.id === 6 
                        ? 'bg-gradient-to-r from-purple-600 to-orange-600' 
                        : 'bg-gradient-to-r from-orange-500 to-amber-500'
                    } text-white py-2 xs:py-2.5 sm:py-3 rounded-lg xs:rounded-xl text-xs xs:text-sm sm:text-base font-semibold flex items-center justify-center gap-1 xs:gap-2 group`}
                    variants={specialButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(item);
                    }}
                  >
                    <span>
                      {item.id === 6 ? 'Learn More About This Special Coffee' : 'View Details'}
                    </span>
                    <ArrowForwardIcon 
                      className="!text-sm xs:!text-base sm:!text-lg group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>

                  {/* Special Note for Yemeni Coffee */}
                  {item.id === 6 && (
                    <motion.p
                      className="text-xs text-purple-600 mt-2 text-center font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      ✦ Opens dedicated information page ✦
                    </motion.p>
                  )}
                </motion.div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 45%, transparent 50%)",
                    transform: "translateX(-100%)"
                  }}
                  animate={{
                    x: ["100%", "-100%"]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Modal for Regular Coffees (id 1-5) */}
      <AnimatePresence>
        {selectedItem && selectedItem.id !== 6 && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-4"
            variants={overlayModalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(10px)"
            }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl xs:rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 xs:p-4 sm:p-6 md:p-8">
                <div className="flex justify-between items-start mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                    {selectedItem.title}
                  </h2>
                  <motion.button
                    className="bg-gray-200 p-1 xs:p-1.5 sm:p-2 rounded-full hover:bg-gray-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedItem(null)}
                  >
                    <CloseIcon className="!text-base xs:!text-lg sm:!text-xl" />
                  </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                  <div>
                    <motion.img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-48 xs:h-56 sm:h-64 md:h-80 object-cover rounded-lg xs:rounded-xl sm:rounded-2xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                    
                    <div className="grid grid-cols-4 gap-1 xs:gap-1.5 sm:gap-2 mt-2 xs:mt-3 sm:mt-4">
                      {[...Array(4)].map((_, i) => (
                        <motion.img
                          key={i}
                          src={selectedItem.image}
                          alt=""
                          className="w-full h-12 xs:h-14 sm:h-16 md:h-20 object-cover rounded-lg opacity-70 hover:opacity-100 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <motion.div 
                      className="space-y-2 xs:space-y-3 sm:space-y-4"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      {/* Feature Grid */}
                      <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <motion.div 
                          className="flex items-center gap-2 xs:gap-3 sm:gap-4"
                          variants={featureVariants}
                          custom={0}
                        >
                          <div className="bg-orange-100 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full">
                            <LocalCafeIcon className="!text-orange-600 !text-base xs:!text-lg sm:!text-xl md:!text-2xl" />
                          </div>
                          <div>
                            <p className="text-[10px] xs:text-xs text-gray-500">Origin</p>
                            <p className="font-semibold text-xs xs:text-sm sm:text-base">
                              {selectedItem.origin}
                            </p>
                          </div>
                        </motion.div>

                        <motion.div 
                          className="flex items-center gap-2 xs:gap-3 sm:gap-4"
                          variants={featureVariants}
                          custom={1}
                        >
                          <div className="bg-orange-100 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full">
                            <LocalFireDepartmentIcon className="!text-orange-600 !text-base xs:!text-lg sm:!text-xl md:!text-2xl" />
                          </div>
                          <div>
                            <p className="text-[10px] xs:text-xs text-gray-500">Roast</p>
                            <p className="font-semibold text-xs xs:text-sm sm:text-base">
                              {selectedItem.roast}
                            </p>
                          </div>
                        </motion.div>

                        <motion.div 
                          className="flex items-center gap-2 xs:gap-3 sm:gap-4"
                          variants={featureVariants}
                          custom={2}
                        >
                          <div className="bg-orange-100 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full">
                            <OpacityIcon className="!text-orange-600 !text-base xs:!text-lg sm:!text-xl md:!text-2xl" />
                          </div>
                          <div>
                            <p className="text-[10px] xs:text-xs text-gray-500">Method</p>
                            <p className="font-semibold text-xs xs:text-sm sm:text-base">
                              {selectedItem.brewingMethod}
                            </p>
                          </div>
                        </motion.div>

                        <motion.div 
                          className="flex items-center gap-2 xs:gap-3 sm:gap-4"
                          variants={featureVariants}
                          custom={3}
                        >
                          <div className="bg-orange-100 p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full">
                            <AccessTimeIcon className="!text-orange-600 !text-base xs:!text-lg sm:!text-xl md:!text-2xl" />
                          </div>
                          <div>
                            <p className="text-[10px] xs:text-xs text-gray-500">Best Time</p>
                            <p className="font-semibold text-xs xs:text-sm sm:text-base">
                              {selectedItem.bestTime}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Additional Info */}
                      <motion.div 
                        className="mt-4 xs:mt-5 sm:mt-6"
                        variants={featureVariants}
                        custom={4}
                      >
                        <div className="flex items-center gap-2 xs:gap-3 mb-2">
                          <GrainIcon className="text-orange-600 !text-base xs:!text-lg" />
                          <span className="font-semibold text-xs xs:text-sm">Flavor Notes:</span>
                          <span className="text-gray-600 text-xs xs:text-sm">{selectedItem.notes}</span>
                        </div>
                        <div className="flex items-center gap-2 xs:gap-3">
                          <WhatshotIcon className="text-orange-600 !text-base xs:!text-lg" />
                          <span className="font-semibold text-xs xs:text-sm">Intensity:</span>
                          <span className="text-gray-600 text-xs xs:text-sm">{selectedItem.intensity}</span>
                        </div>
                        <div className="flex items-center gap-2 xs:gap-3 mt-2">
                          <SpaIcon className="text-orange-600 !text-base xs:!text-lg" />
                          <span className="font-semibold text-xs xs:text-sm">Aroma:</span>
                          <span className="text-gray-600 text-xs xs:text-sm">{selectedItem.aroma}</span>
                        </div>
                        <div className="flex items-center gap-2 xs:gap-3 mt-2">
                          <TimerIcon className="text-orange-600 !text-base xs:!text-lg" />
                          <span className="font-semibold text-xs xs:text-sm">Calories:</span>
                          <span className="text-gray-600 text-xs xs:text-sm">{selectedItem.calories} cal</span>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.p 
                      className="text-gray-600 mt-4 xs:mt-5 sm:mt-6 leading-relaxed text-xs xs:text-sm sm:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {selectedItem.longDescription}
                    </motion.p>

                    <motion.div 
                      className="mt-4 xs:mt-5 sm:mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.button
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 xs:py-2.5 sm:py-3 md:py-4 rounded-lg xs:rounded-xl text-xs xs:text-sm sm:text-base font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedItem(null)}
                      >
                        Close
                      </motion.button>
                    </motion.div>
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
