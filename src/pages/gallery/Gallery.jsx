

// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowBack,
//   ArrowForward,
//   Close,
//   ZoomIn,
//   Favorite,
//   FavoriteBorder,
//   Share,
//   Download,
//   Instagram,
//   Facebook,
//   Twitter,
//   Pinterest,
//   GridOn,
//   ViewCarousel,
//   ViewModule,
//   FilterList,
//   Fullscreen,
//   FullscreenExit,
//   ImageSearch
// } from "@mui/icons-material";

// // Online coffee images
// export const galleryImages = [
//   {
//     id: 1,
//     url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
//     title: "Morning Espresso",
//     description: "Perfect start to the day with rich espresso",
//     category: "Espresso",
//     photographer: "Unsplash",
//     likes: 234,
//     date: "2024-01-15"
//   },
//   {
//     id: 2,
//     url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800",
//     title: "Artisan Brew",
//     description: "Handcrafted coffee with love",
//     category: "Brewing",
//     photographer: "Coffee Masters",
//     likes: 189,
//     date: "2024-02-20"
//   },
//   {
//     id: 3,
//     url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
//     title: "Coffee Art",
//     description: "Beautiful latte art by our barista",
//     category: "Latte Art",
//     photographer: "Barista Pro",
//     likes: 456,
//     date: "2024-03-10"
//   },
//   {
//     id: 4,
//     url: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800",
//     title: "Coffee Beans",
//     description: "Freshly roasted Arabica beans",
//     category: "Beans",
//     photographer: "Roast Masters",
//     likes: 321,
//     date: "2024-01-25"
//   },
//   {
//     id: 5,
//     url: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800",
//     title: "Cozy Corner",
//     description: "Warm atmosphere in our café",
//     category: "Ambiance",
//     photographer: "Café Life",
//     likes: 567,
//     date: "2024-02-28"
//   },
//   {
//     id: 6,
//     url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
//     title: "Pour Over",
//     description: "Precision brewing method",
//     category: "Brewing",
//     photographer: "Coffee Lab",
//     likes: 278,
//     date: "2024-03-05"
//   },
//   {
//     id: 7,
//     url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
//     title: "Coffee Shop",
//     description: "Our beautiful coffee shop interior",
//     category: "Ambiance",
//     photographer: "Design Coffee",
//     likes: 432,
//     date: "2024-01-18"
//   },
//   {
//     id: 8,
//     url: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800",
//     title: "Cold Brew",
//     description: "Refreshing cold brew on ice",
//     category: "Cold Coffee",
//     photographer: "Summer Brews",
//     likes: 345,
//     date: "2024-02-14"
//   },
//   {
//     id: 9,
//     url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800",
//     title: "Coffee Harvest",
//     description: "Fresh coffee cherries ready for picking",
//     category: "Farming",
//     photographer: "Farm Life",
//     likes: 210,
//     date: "2024-03-01"
//   },
//   {
//     id: 10,
//     url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
//     title: "Roasting Process",
//     description: "Coffee beans being roasted to perfection",
//     category: "Roasting",
//     photographer: "Roast Works",
//     likes: 287,
//     date: "2024-02-22"
//   },
//   {
//     id: 11,
//     url: "https://images.unsplash.com/photo-1559525836-283c40b8f4a3?w=800",
//     title: "Coffee Grinder",
//     description: "Freshly ground coffee aroma",
//     category: "Equipment",
//     photographer: "Grind House",
//     likes: 198,
//     date: "2024-01-30"
//   },
//   {
//     id: 12,
//     url: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800",
//     title: "Coffee Sampling",
//     description: "Cupping session with experts",
//     category: "Tasting",
//     photographer: "Coffee Tasters",
//     likes: 276,
//     date: "2024-03-12"
//   }
// ];

// export const Gallery = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [viewMode, setViewMode] = useState("grid"); // grid, carousel
//   const [filterCategory, setFilterCategory] = useState("all");
//   const [likedImages, setLikedImages] = useState({});
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [hoveredId, setHoveredId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
  
//   const imagesPerPage = viewMode === "grid" ? 6 : 3;

//   // Get unique categories
//   const categories = ["all", ...new Set(galleryImages.map(img => img.category))];

//   // Filter images based on category and search
//   const filteredImages = galleryImages.filter(image => {
//     const matchesCategory = filterCategory === "all" || image.category === filterCategory;
//     const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          image.description.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   // Pagination
//   const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
//   const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage);

//   // Auto-slide for carousel mode
//   useEffect(() => {
//     let interval;
//     if (viewMode === "carousel") {
//       interval = setInterval(() => {
//         nextImages();
//       }, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [viewMode, startIndex, filteredImages.length]);

//   const nextImages = () => {
//     setStartIndex((prevIndex) => 
//       prevIndex + imagesPerPage >= filteredImages.length ? 0 : prevIndex + imagesPerPage
//     );
//   };

//   const prevImages = () => {
//     setStartIndex((prevIndex) => 
//       prevIndex - imagesPerPage < 0 ? Math.max(0, filteredImages.length - imagesPerPage) : prevIndex - imagesPerPage
//     );
//   };

//   const goToPage = (page) => {
//     setStartIndex(page * imagesPerPage);
//   };

//   const toggleLike = (id, e) => {
//     e.stopPropagation();
//     setLikedImages(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       document.documentElement.requestFullscreen();
//       setIsFullscreen(true);
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//         setIsFullscreen(false);
//       }
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0, scale: 0.9 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 20
//       }
//     }
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 25
//       }
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: { duration: 0.3 }
//     }
//   };

//   return (
//     <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "url('https://www.transparenttextures.com/patterns/coffee-beans.png')",
//             backgroundRepeat: "repeat",
//             backgroundSize: "100px"
//           }}
//         />
//       </div>

//       {/* Floating coffee beans */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-orange-500/10"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             fontSize: `${30 + Math.random() * 50}px`,
//             rotate: `${Math.random() * 360}deg`
//           }}
//           animate={{
//             y: [0, -30, 0],
//             x: [0, Math.random() * 20 - 10, 0],
//             rotate: [0, 360],
//             opacity: [0.1, 0.2, 0.1]
//           }}
//           transition={{
//             duration: 15 + Math.random() * 10,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         >
//           🫘
//         </motion.div>
//       ))}

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-4"
//             variants={titleVariants}
//             style={{
//               background: "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #fbbf24 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent"
//             }}
//           >
//             Coffee Gallery
//           </motion.h2>

//           <motion.p
//             className="text-gray-400 text-lg max-w-2xl mx-auto"
//             variants={titleVariants}
//             transition={{ delay: 0.2 }}
//           >
//             A visual journey through the art of coffee
//           </motion.p>

//           <motion.div
//             className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full"
//             variants={titleVariants}
//           />
//         </motion.div>

//         {/* Controls */}
//         <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
//           {/* Left Controls */}
//           <div className="flex gap-2">
//             <motion.button
//               className="p-2 bg-gray-800 rounded-lg text-white hover:bg-orange-500 transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setViewMode(viewMode === "grid" ? "carousel" : "grid")}
//               title={viewMode === "grid" ? "Switch to Carousel" : "Switch to Grid"}
//             >
//               {viewMode === "grid" ? <ViewCarousel /> : <GridOn />}
//             </motion.button>
            
//             <motion.button
//               className="p-2 bg-gray-800 rounded-lg text-white hover:bg-orange-500 transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleFullscreen}
//             >
//               {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
//             </motion.button>
//           </div>

//           {/* Search */}
//           <div className="relative flex-1 max-w-md">
//             <input
//               type="text"
//               placeholder="Search images..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
//             />
//             <ImageSearch className="absolute left-3 top-2.5 text-gray-400 !text-lg" />
//           </div>

//           {/* Category Filter */}
//           <div className="flex gap-2 overflow-x-auto pb-2">
//             {categories.map(category => (
//               <motion.button
//                 key={category}
//                 className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
//                   filterCategory === category
//                     ? 'bg-orange-500 text-white'
//                     : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setFilterCategory(category);
//                   setStartIndex(0);
//                 }}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </motion.button>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Grid/Carousel */}
//         <div className="relative">
//           {/* Navigation Arrows */}
//           {viewMode === "carousel" && (
//             <>
//               <motion.button
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-orange-500 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={prevImages}
//               >
//                 <ArrowBack />
//               </motion.button>
//               <motion.button
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-orange-500 transition-colors"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={nextImages}
//               >
//                 <ArrowForward />
//               </motion.button>
//             </>
//           )}

//           {/* Images Grid */}
//           <motion.div
//             className={`grid ${
//               viewMode === "grid" 
//                 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
//                 : 'grid-cols-1 md:grid-cols-3 gap-4'
//             }`}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             key={viewMode}
//           >
//             <AnimatePresence mode="wait">
//               {currentImages.map((image) => (
//                 <motion.div
//                   key={image.id}
//                   className="relative group cursor-pointer"
//                   variants={itemVariants}
//                   layout
//                   onHoverStart={() => setHoveredId(image.id)}
//                   onHoverEnd={() => setHoveredId(null)}
//                   onClick={() => setSelectedImage(image)}
//                 >
//                   <div className="relative overflow-hidden rounded-xl aspect-square">
//                     <motion.img
//                       src={image.url}
//                       alt={image.title}
//                       className="w-full h-full object-cover"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.4 }}
//                     />
                    
//                     {/* Overlay */}
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                     >
//                       {/* Top Bar */}
//                       <div className="absolute top-4 left-4 right-4 flex justify-between">
//                         <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
//                           {image.category}
//                         </span>
//                         <motion.button
//                           className="text-white p-1 hover:scale-110 transition-transform"
//                           whileHover={{ scale: 1.2 }}
//                           onClick={(e) => toggleLike(image.id, e)}
//                         >
//                           {likedImages[image.id] ? (
//                             <Favorite className="text-red-500" />
//                           ) : (
//                             <FavoriteBorder />
//                           )}
//                         </motion.button>
//                       </div>

//                       {/* Bottom Info */}
//                       <div className="absolute bottom-4 left-4 right-4">
//                         <h3 className="text-white font-bold text-lg mb-1">
//                           {image.title}
//                         </h3>
//                         <p className="text-gray-300 text-sm line-clamp-2">
//                           {image.description}
//                         </p>
                        
//                         {/* Quick Actions */}
//                         <div className="flex gap-2 mt-3">
//                           <motion.button
//                             className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition-colors"
//                             whileHover={{ scale: 1.1 }}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               // Share functionality
//                               navigator.share?.({
//                                 title: image.title,
//                                 text: image.description,
//                                 url: image.url
//                               });
//                             }}
//                           >
//                             <Share fontSize="small" />
//                           </motion.button>
//                           <motion.a
//                             href={image.url}
//                             download
//                             className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition-colors"
//                             whileHover={{ scale: 1.1 }}
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             <Download fontSize="small" />
//                           </motion.a>
//                           <motion.button
//                             className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition-colors"
//                             whileHover={{ scale: 1.1 }}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               setSelectedImage(image);
//                             }}
//                           >
//                             <ZoomIn fontSize="small" />
//                           </motion.button>
//                         </div>
//                       </div>
//                     </motion.div>

//                     {/* Like Count */}
//                     <motion.div
//                       className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
//                       animate={{
//                         scale: hoveredId === image.id ? 1.1 : 1
//                       }}
//                     >
//                       <Favorite className="!text-xs inline mr-1 text-red-500" />
//                       {image.likes + (likedImages[image.id] ? 1 : 0)}
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </div>

//         {/* Pagination */}
//         {viewMode === "grid" && totalPages > 1 && (
//           <div className="flex justify-center items-center gap-4 mt-8">
//             <motion.button
//               className="p-2 bg-gray-800 rounded-full text-white disabled:opacity-50"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={prevImages}
//               disabled={startIndex === 0}
//             >
//               <ArrowBack />
//             </motion.button>
            
//             <div className="flex gap-2">
//               {[...Array(totalPages)].map((_, i) => (
//                 <motion.button
//                   key={i}
//                   className={`w-10 h-10 rounded-full font-semibold ${
//                     i === Math.floor(startIndex / imagesPerPage)
//                       ? 'bg-orange-500 text-white'
//                       : 'bg-gray-800 text-gray-400'
//                   }`}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => goToPage(i)}
//                 >
//                   {i + 1}
//                 </motion.button>
//               ))}
//             </div>

//             <motion.button
//               className="p-2 bg-gray-800 rounded-full text-white disabled:opacity-50"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={nextImages}
//               disabled={startIndex + imagesPerPage >= filteredImages.length}
//             >
//               <ArrowForward />
//             </motion.button>
//           </div>
//         )}

//         {/* Image Counter */}
//         <div className="text-center mt-4 text-gray-400">
//           Showing {startIndex + 1} - {Math.min(startIndex + imagesPerPage, filteredImages.length)} of {filteredImages.length} images
//         </div>
//       </div>

//       {/* Fullscreen Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               className="relative max-w-5xl w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={selectedImage.url}
//                 alt={selectedImage.title}
//                 className="w-full h-auto rounded-lg"
//               />
              
//               {/* Image Info Overlay */}
//               <motion.div
//                 className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg"
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-2xl font-bold text-white mb-2">
//                       {selectedImage.title}
//                     </h3>
//                     <p className="text-gray-300 mb-3">
//                       {selectedImage.description}
//                     </p>
//                     <div className="flex gap-4 text-sm text-gray-400">
//                       <span>📷 {selectedImage.photographer}</span>
//                       <span>📅 {selectedImage.date}</span>
//                       <span>❤️ {selectedImage.likes}</span>
//                     </div>
//                   </div>
                  
//                   <div className="flex gap-2">
//                     <motion.button
//                       className="bg-white/20 p-3 rounded-full hover:bg-orange-500 transition-colors"
//                       whileHover={{ scale: 1.1 }}
//                       onClick={() => toggleLike(selectedImage.id, event)}
//                     >
//                       {likedImages[selectedImage.id] ? (
//                         <Favorite className="text-red-500" />
//                       ) : (
//                         <FavoriteBorder />
//                       )}
//                     </motion.button>
//                     <motion.a
//                       href={selectedImage.url}
//                       download
//                       className="bg-white/20 p-3 rounded-full hover:bg-orange-500 transition-colors"
//                     >
//                       <Download />
//                     </motion.a>
//                     <motion.button
//                       className="bg-white/20 p-3 rounded-full hover:bg-orange-500 transition-colors"
//                       whileHover={{ scale: 1.1 }}
//                       onClick={() => setSelectedImage(null)}
//                     >
//                       <Close />
//                     </motion.button>
//                   </div>
//                 </div>

//                 {/* Social Share */}
//                 <div className="flex gap-2 mt-4">
//                   <motion.a
//                     href="#"
//                     className="bg-blue-600 p-2 rounded-full"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <Facebook fontSize="small" />
//                   </motion.a>
//                   <motion.a
//                     href="#"
//                     className="bg-pink-600 p-2 rounded-full"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <Instagram fontSize="small" />
//                   </motion.a>
//                   <motion.a
//                     href="#"
//                     className="bg-blue-400 p-2 rounded-full"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <Twitter fontSize="small" />
//                   </motion.a>
//                   <motion.a
//                     href="#"
//                     className="bg-red-600 p-2 rounded-full"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <Pinterest fontSize="small" />
//                   </motion.a>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };



















/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowBack,
  ArrowForward,
  Close,
  GridOn,
  ViewCarousel,
  ViewModule,
  FilterList,
  Fullscreen,
  FullscreenExit,
  ImageSearch
} from "@mui/icons-material";

// Online coffee images
export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    title: "Morning Espresso",
    description: "Perfect start to the day with rich espresso",
    photographer: "Unsplash",
    date: "2024-01-15"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800",
    title: "Artisan Brew",
    description: "Handcrafted coffee with love",
    photographer: "Coffee Masters",
    date: "2024-02-20"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
    title: "Coffee Art",
    description: "Beautiful latte art by our barista",
    photographer: "Barista Pro",
    date: "2024-03-10"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800",
    title: "Coffee Beans",
    description: "Freshly roasted Arabica beans",
    photographer: "Roast Masters",
    date: "2024-01-25"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800",
    title: "Cozy Corner",
    description: "Warm atmosphere in our café",
    photographer: "Café Life",
    date: "2024-02-28"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    title: "Pour Over",
    description: "Precision brewing method",
    photographer: "Coffee Lab",
    date: "2024-03-05"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
    title: "Coffee Shop",
    description: "Our beautiful coffee shop interior",
    photographer: "Design Coffee",
    date: "2024-01-18"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800",
    title: "Cold Brew",
    description: "Refreshing cold brew on ice",
    photographer: "Summer Brews",
    date: "2024-02-14"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800",
    title: "Coffee Harvest",
    description: "Fresh coffee cherries ready for picking",
    photographer: "Farm Life",
    date: "2024-03-01"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
    title: "Roasting Process",
    description: "Coffee beans being roasted to perfection",
    photographer: "Roast Works",
    date: "2024-02-22"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1559525836-283c40b8f4a3?w=800",
    title: "Coffee Grinder",
    description: "Freshly ground coffee aroma",
    photographer: "Grind House",
    date: "2024-01-30"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800",
    title: "Coffee Sampling",
    description: "Cupping session with experts",
    photographer: "Coffee Tasters",
    date: "2024-03-12"
  }
];

export const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid, carousel
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const imagesPerPage = viewMode === "grid" ? 6 : 3;

  // Filter images based on search only (category removed)
  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage);

  // Auto-slide for carousel mode
  useEffect(() => {
    let interval;
    if (viewMode === "carousel") {
      interval = setInterval(() => {
        nextImages();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [viewMode, startIndex, filteredImages.length]);

  const nextImages = () => {
    setStartIndex((prevIndex) => 
      prevIndex + imagesPerPage >= filteredImages.length ? 0 : prevIndex + imagesPerPage
    );
  };

  const prevImages = () => {
    setStartIndex((prevIndex) => 
      prevIndex - imagesPerPage < 0 ? Math.max(0, filteredImages.length - imagesPerPage) : prevIndex - imagesPerPage
    );
  };

  const goToPage = (page) => {
    setStartIndex(page * imagesPerPage);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
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
    hidden: { y: 20, opacity: 0, scale: 0.9 },
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-900 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
            Coffee Gallery
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            A visual journey through the art of coffee
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full"
            variants={titleVariants}
          />
        </motion.div>

        {/* Gallery Grid/Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {viewMode === "carousel" && (
            <>
              <motion.button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImages}
              >
                <ArrowBack />
              </motion.button>
              <motion.button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImages}
              >
                <ArrowForward />
              </motion.button>
            </>
          )}

          {/* Images Grid */}
          <motion.div
            className={`grid ${
              viewMode === "grid" 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'grid-cols-1 md:grid-cols-3 gap-4'
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={viewMode}
          >
            <AnimatePresence mode="wait">
              {currentImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="relative group cursor-pointer"
                  variants={itemVariants}
                  layout
                  onHoverStart={() => setHoveredId(image.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-xl aspect-square">
                    <motion.img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Overlay - Removed share, download, zoom, likes */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {/* Bottom Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-gray-300 text-sm line-clamp-2">
                          {image.description}
                        </p>
                        
                        {/* Photographer info */}
                        <div className="flex gap-2 mt-2 text-xs text-gray-400">
                          <span>📷 {image.photographer}</span>
                          <span>📅 {image.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Pagination */}
        {viewMode === "grid" && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              className="p-2 bg-gray-800 rounded-full text-white disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImages}
              disabled={startIndex === 0}
            >
              <ArrowBack />
            </motion.button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  className={`w-10 h-10 rounded-full font-semibold ${
                    i === Math.floor(startIndex / imagesPerPage)
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToPage(i)}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>

            <motion.button
              className="p-2 bg-gray-800 rounded-full text-white disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImages}
              disabled={startIndex + imagesPerPage >= filteredImages.length}
            >
              <ArrowForward />
            </motion.button>
          </div>
        )}

        {/* Image Counter */}
        <div className="text-center mt-4 text-gray-400">
          Showing {startIndex + 1} - {Math.min(startIndex + imagesPerPage, filteredImages.length)} of {filteredImages.length} images
        </div>
      </div>

      {/* Fullscreen Modal - Removed share, download, zoom, likes */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              
              {/* Image Info Overlay - Simplified */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-300 mb-3">
                      {selectedImage.description}
                    </p>
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span>📷 {selectedImage.photographer}</span>
                      <span>📅 {selectedImage.date}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="bg-white/20 p-3 rounded-full hover:bg-orange-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedImage(null)}
                  >
                    <Close />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};