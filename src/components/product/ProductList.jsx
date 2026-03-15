

// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import {
//   ShoppingCart,
//   Remove,
//   Add,
//   Delete,
//   CreditCard,
//   LocationOn,
//   Phone,
//   Email,
//   Person,
//   LocalShipping,
//   CheckCircle,
//   Error,
//   ArrowForward,
//   ArrowBack,
//   Lock,
//   Security,
//   LocalCafe,
//   Close,
//   Payment,
//   Home,
//   LocationCity,
//   Pin,
//   CalendarToday,
//   CreditCard as CardIcon
// } from "@mui/icons-material";

// // Product data with more coffee products
// export const products = [
//   {
//     id: 1,
//     name: "Espresso Romano",
//     price: 4.99,
//     image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
//     category: "Espresso",
//     description: "Rich espresso with a twist of lemon",
//     inStock: true
//   },
//   {
//     id: 2,
//     name: "Caramel Macchiato",
//     price: 5.99,
//     image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600",
//     category: "Specialty",
//     description: "Freshly steamed milk with vanilla and caramel",
//     inStock: true
//   },
//   {
//     id: 3,
//     name: "Mocha Deluxe",
//     price: 6.49,
//     image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
//     category: "Chocolate",
//     description: "Rich chocolate and espresso combination",
//     inStock: true
//   },
//   {
//     id: 4,
//     name: "Cold Brew Black",
//     price: 4.49,
//     image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600",
//     category: "Cold",
//     description: "Smooth, cold-brewed coffee served over ice",
//     inStock: true
//   },
//   {
//     id: 5,
//     name: "French Vanilla Latte",
//     price: 5.49,
//     image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600",
//     category: "Latte",
//     description: "Smooth espresso with creamy vanilla",
//     inStock: true
//   },
//   {
//     id: 6,
//     name: "Irish Cream Coffee",
//     price: 5.99,
//     image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
//     category: "Flavored",
//     description: "Premium coffee with Irish cream flavor",
//     inStock: true
//   },
//   {
//     id: 7,
//     name: "Hazelnut Cappuccino",
//     price: 5.79,
//     image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600",
//     category: "Cappuccino",
//     description: "Perfect balance of espresso, milk, and hazelnut",
//     inStock: true
//   },
//   {
//     id: 8,
//     name: "Cinnamon Dolce Latte",
//     price: 5.89,
//     image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600",
//     category: "Specialty",
//     description: "Sweet cinnamon syrup with espresso and steamed milk",
//     inStock: true
//   },
//   {
//     id: 9,
//     name: "Affogato",
//     price: 6.99,
//     image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600",
//     category: "Dessert",
//     description: "Vanilla gelato topped with a shot of hot espresso",
//     inStock: true
//   },
//   {
//     id: 10,
//     name: "Turkish Coffee",
//     price: 5.49,
//     image: "https://images.unsplash.com/photo-1587080266036-3494f4f66a7f?w=600",
//     category: "Traditional",
//     description: "Finely ground coffee brewed in a traditional cezve",
//     inStock: true
//   },
//   {
//     id: 11,
//     name: "Matcha Latte",
//     price: 5.99,
//     image: "https://images.unsplash.com/photo-1536256263959-770afe4bf1c1?w=600",
//     category: "Tea",
//     description: "Ceremonial grade matcha with steamed milk",
//     inStock: true
//   },
//   {
//     id: 12,
//     name: "Pumpkin Spice Latte",
//     price: 6.29,
//     image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600",
//     category: "Seasonal",
//     description: "Fall favorite with pumpkin and warm spices",
//     inStock: true
//   },
//   {
//     id: 13,
//     name: "Nitro Cold Brew",
//     price: 5.99,
//     image: "https://images.unsplash.com/photo-1591033594798-33227a05780d?w=600",
//     category: "Cold",
//     description: "Smooth cold brew infused with nitrogen for a creamy texture",
//     inStock: true
//   },
//   {
//     id: 14,
//     name: "Coconut Mocha",
//     price: 6.49,
//     image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600",
//     category: "Specialty",
//     description: "Rich mocha with a tropical coconut twist",
//     inStock: true
//   },
//   {
//     id: 15,
//     name: "Honey Almond Flat White",
//     price: 5.89,
//     image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600",
//     category: "Flat White",
//     description: "Smooth ristretto shots with honey and almond milk",
//     inStock: true
//   },
//   {
//     id: 16,
//     name: "Peppermint Mocha",
//     price: 6.29,
//     image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
//     category: "Seasonal",
//     description: "Festive combination of chocolate and peppermint",
//     inStock: true
//   },
//   {
//     id: 17,
//     name: "Cortado",
//     price: 4.79,
//     image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600",
//     category: "Espresso",
//     description: "Equal parts espresso and steamed milk",
//     inStock: true
//   },
//   {
//     id: 18,
//     name: "Vanilla Sweet Cream Cold Brew",
//     price: 5.69,
//     image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600",
//     category: "Cold",
//     description: "Cold brew topped with house-made vanilla sweet cream",
//     inStock: true
//   },
//   {
//     id: 19,
//     name: "Cardamom Coffee",
//     price: 5.49,
//     image: "https://images.unsplash.com/photo-1587080266036-3494f4f66a7f?w=600",
//     category: "Traditional",
//     description: "Arabic coffee with aromatic cardamom",
//     inStock: true
//   },
//   {
//     id: 20,
//     name: "Salted Caramel Mocha",
//     price: 6.59,
//     image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
//     category: "Specialty",
//     description: "Sweet and salty combination with mocha and caramel",
//     inStock: true
//   },
//   {
//     id: 21,
//     name: "Oat Milk Latte",
//     price: 5.49,
//     image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600",
//     category: "Dairy-Free",
//     description: "Smooth espresso with creamy oat milk",
//     inStock: true
//   },
//   {
//     id: 22,
//     name: "Mexican Coffee",
//     price: 5.89,
//     image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
//     category: "Traditional",
//     description: "Coffee with cinnamon and piloncillo sugar",
//     inStock: true
//   },
//   {
//     id: 23,
//     name: "Lavender Honey Latte",
//     price: 6.19,
//     image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600",
//     category: "Specialty",
//     description: "Floral lavender with sweet honey in a creamy latte",
//     inStock: true
//   },
//   {
//     id: 24,
//     name: "Espresso Con Panna",
//     price: 4.99,
//     image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
//     category: "Espresso",
//     description: "Single shot of espresso topped with whipped cream",
//     inStock: true
//   }
// ];

// export const ProductList = () => {
//   const [cart, setCart] = useState([]);
//   const [showCartModal, setShowCartModal] = useState(false);
//   const [showCheckoutModal, setShowCheckoutModal] = useState(false);
//   const [checkoutStep, setCheckoutStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [orderSuccess, setOrderSuccess] = useState(false);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [quantities, setQuantities] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isNavigating, setIsNavigating] = useState(false);

//   // Form state
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     cardNumber: "",
//     cardName: "",
//     expiry: "",
//     cvv: ""
//   });

//   // API configuration
//   const API_BASE_URL = "https://your-api-endpoint.com/api";

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("productCart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("productCart", JSON.stringify(cart));
//   }, [cart]);

//   // Initialize quantities for products
//   useEffect(() => {
//     const initialQuantities = {};
//     products.forEach(product => {
//       initialQuantities[product.id] = 1;
//     });
//     setQuantities(initialQuantities);
//   }, []);

//   // Handle quantity changes with page navigation
//   const handleQuantityChange = (productId, newQuantity) => {
//     // Check if quantity reaches 9 to trigger page navigation
//     if (newQuantity === 9 && !isNavigating) {
//       setIsNavigating(true);
      
//       // Smooth scroll to next section/page
//       const nextPageElement = document.getElementById(`page-${currentPage + 1}`);
//       if (nextPageElement) {
//         nextPageElement.scrollIntoView({ behavior: 'smooth' });
//         setCurrentPage(prev => prev + 1);
//       } else {
//         // If no next page, scroll to top
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         setCurrentPage(1);
//       }
      
//       // Reset navigation flag after animation
//       setTimeout(() => setIsNavigating(false), 1000);
//     }
    
//     setQuantities(prev => ({
//       ...prev,
//       [productId]: Math.max(1, newQuantity)
//     }));
//   };

//   const addToCart = (product) => {
//     const quantity = quantities[product.id] || 1;
//     const existingItem = cart.find(item => item.id === product.id);
    
//     if (existingItem) {
//       setCart(cart.map(item => 
//         item.id === product.id 
//           ? { ...item, quantity: item.quantity + quantity }
//           : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity }]);
//     }
    
//     // Show cart modal
//     setShowCartModal(true);
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return;
    
//     setCart(cart.map(item => 
//       item.id === productId 
//         ? { ...item, quantity: newQuantity }
//         : item
//     ));
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter(item => item.id !== productId));
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//   };

//   const calculateItemCount = () => {
//     return cart.reduce((count, item) => count + item.quantity, 0);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmitOrder = async () => {
//     setLoading(true);
//     setError("");
    
//     try {
//       const orderData = {
//         customer: {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phone: formData.phone,
//           address: {
//             street: formData.address,
//             city: formData.city,
//             zipCode: formData.zipCode
//           }
//         },
//         items: cart.map(item => ({
//           productId: item.id,
//           name: item.name,
//           price: item.price,
//           quantity: item.quantity
//         })),
//         total: calculateTotal(),
//         paymentMethod: "card",
//         orderDate: new Date().toISOString()
//       };

//       // Send to API
//       const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
      
//       if (response.data.success) {
//         setOrderSuccess(true);
//         // Clear cart after successful order
//         setTimeout(() => {
//           setCart([]);
//           setShowCheckoutModal(false);
//           setCheckoutStep(1);
//           setOrderSuccess(false);
//           setFormData({
//             firstName: "", lastName: "", email: "", phone: "",
//             address: "", city: "", zipCode: "",
//             cardNumber: "", cardName: "", expiry: "", cvv: ""
//           });
//         }, 3000);
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to place order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const nextStep = () => {
//     if (validateStep()) {
//       setCheckoutStep(checkoutStep + 1);
//     }
//   };

//   const prevStep = () => {
//     setCheckoutStep(checkoutStep - 1);
//   };

//   const validateStep = () => {
//     switch(checkoutStep) {
//       case 1:
//         return formData.firstName && formData.lastName && formData.email && formData.phone;
//       case 2:
//         return formData.address && formData.city && formData.zipCode;
//       case 3:
//         return formData.cardNumber && formData.cardName && formData.expiry && formData.cvv;
//       default:
//         return true;
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
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
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
//       transition: { duration: 0.2 }
//     }
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0 }
//   };

//   // Group products into pages (6 products per page)
//   const productsPerPage = 6;
//   const totalPages = Math.ceil(products.length / productsPerPage);
//   const getProductsForPage = (page) => {
//     const start = (page - 1) * productsPerPage;
//     const end = start + productsPerPage;
//     return products.slice(start, end);
//   };

//   return (
//     <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-black min-h-screen">
//       <div className="container mx-auto px-4">
//         {/* Page Indicator */}
//         <motion.div 
//           className="fixed top-4 left-4 z-50 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           Page {currentPage} of {totalPages}
//         </motion.div>

//         {/* Header */}
//         <div id="page-1" className="text-center mb-12">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Our Coffee Collection
//           </motion.h2>
          
//           <motion.div
//             className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           />

//           <motion.p
//             className="text-gray-400 mt-4 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Discover our handcrafted selection of {products.length} premium coffees
//           </motion.p>

//           {/* Cart Icon with Counter */}
//           <motion.button
//             className="fixed top-24 right-8 z-40 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setShowCartModal(true)}
//           >
//             <ShoppingCart />
//             {cart.length > 0 && (
//               <motion.span
//                 className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ type: "spring" }}
//               >
//                 {calculateItemCount()}
//               </motion.span>
//             )}
//           </motion.button>
//         </div>

//         {/* Products Grid - Dynamically render pages */}
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
//           <motion.div
//             key={pageNum}
//             id={`page-${pageNum}`}
//             className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${
//               pageNum < totalPages ? 'mb-16' : ''
//             }`}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {getProductsForPage(pageNum).map((product) => (
//               <motion.div
//                 key={product.id}
//                 variants={itemVariants}
//                 onHoverStart={() => setHoveredProduct(product.id)}
//                 onHoverEnd={() => setHoveredProduct(null)}
//                 className="relative"
//               >
//                 <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all group">
//                   {/* Image Container */}
//                   <div className="relative h-64 overflow-hidden">
//                     <motion.img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover"
//                       animate={{
//                         scale: hoveredProduct === product.id ? 1.1 : 1
//                       }}
//                       transition={{ duration: 0.4 }}
//                     />
                    
//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-orange-500">
//                       {product.category}
//                     </div>

//                     {/* Price Badge */}
//                     <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                       ${product.price}
//                     </div>

//                     {/* Quantity 9 Indicator */}
//                     {quantities[product.id] === 9 && (
//                       <motion.div
//                         className="absolute inset-0 bg-orange-500/20 backdrop-blur-sm flex items-center justify-center"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <span className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded-full">
//                           Next Page Ready!
//                         </span>
//                       </motion.div>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
//                       {product.name}
//                     </h3>
//                     <p className="text-gray-400 text-sm mb-4">
//                       {product.description}
//                     </p>

//                     {/* Quantity Selector */}
//                     <div className="flex items-center justify-between mb-4">
//                       <span className="text-gray-300 text-sm">Quantity:</span>
//                       <div className="flex items-center gap-3">
//                         <motion.button
//                           className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => handleQuantityChange(
//                             product.id, 
//                             Math.max(1, (quantities[product.id] || 1) - 1)
//                           )}
//                         >
//                           <Remove fontSize="small" />
//                         </motion.button>
//                         <motion.span 
//                           className="text-white font-semibold w-8 text-center"
//                           key={quantities[product.id]}
//                           initial={{ scale: 1.2 }}
//                           animate={{ scale: 1 }}
//                           transition={{ type: "spring" }}
//                         >
//                           {quantities[product.id] || 1}
//                         </motion.span>
//                         <motion.button
//                           className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => handleQuantityChange(
//                             product.id, 
//                             (quantities[product.id] || 1) + 1
//                           )}
//                         >
//                           <Add fontSize="small" />
//                         </motion.button>
//                       </div>
//                     </div>

//                     {/* Add to Cart Button */}
//                     <motion.button
//                       className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => addToCart(product)}
//                     >
//                       <ShoppingCart fontSize="small" />
//                       Add to Cart
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         ))}

//         {/* Page Navigation Buttons */}
//         <div className="flex justify-center gap-4 mt-8">
//           <motion.button
//             className={`px-4 py-2 rounded-lg font-semibold ${
//               currentPage > 1 
//                 ? 'bg-orange-500 text-white' 
//                 : 'bg-gray-700 text-gray-400 cursor-not-allowed'
//             }`}
//             whileHover={currentPage > 1 ? { scale: 1.05 } : {}}
//             whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
//             onClick={() => {
//               if (currentPage > 1) {
//                 document.getElementById(`page-${currentPage - 1}`).scrollIntoView({ behavior: 'smooth' });
//                 setCurrentPage(prev => prev - 1);
//               }
//             }}
//             disabled={currentPage === 1}
//           >
//             Previous Page
//           </motion.button>
          
//           <span className="text-white px-4 py-2">
//             Page {currentPage} of {totalPages}
//           </span>
          
//           <motion.button
//             className={`px-4 py-2 rounded-lg font-semibold ${
//               currentPage < totalPages 
//                 ? 'bg-orange-500 text-white' 
//                 : 'bg-gray-700 text-gray-400 cursor-not-allowed'
//             }`}
//             whileHover={currentPage < totalPages ? { scale: 1.05 } : {}}
//             whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
//             onClick={() => {
//               if (currentPage < totalPages) {
//                 document.getElementById(`page-${currentPage + 1}`).scrollIntoView({ behavior: 'smooth' });
//                 setCurrentPage(prev => prev + 1);
//               }
//             }}
//             disabled={currentPage === totalPages}
//           >
//             Next Page
//           </motion.button>
//         </div>

//         {/* Cart Modal */}
//         <AnimatePresence>
//           {showCartModal && (
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               onClick={() => setShowCartModal(false)}
//             >
//               <motion.div
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden border border-gray-700"
//                 variants={modalVariants}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Header */}
//                 <div className="p-6 border-b border-gray-700 flex justify-between items-center">
//                   <h2 className="text-2xl font-bold text-white flex items-center gap-2">
//                     <ShoppingCart className="text-orange-500" />
//                     Your Cart ({cart.length} items)
//                   </h2>
//                   <motion.button
//                     className="text-gray-400 hover:text-white p-2 hover:bg-gray-700 rounded-full transition-colors"
//                     whileHover={{ scale: 1.1, rotate: 90 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => setShowCartModal(false)}
//                   >
//                     <Close />
//                   </motion.button>
//                 </div>

//                 {/* Cart Items */}
//                 <div className="p-6 overflow-y-auto max-h-[400px]">
//                   {cart.length === 0 ? (
//                     <div className="text-center py-12">
//                       <LocalCafe className="text-gray-600 !text-6xl mx-auto mb-4" />
//                       <p className="text-gray-400">Your cart is empty</p>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       {cart.map((item) => (
//                         <motion.div
//                           key={item.id}
//                           className="flex gap-4 bg-gray-700/30 p-4 rounded-xl"
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           exit={{ opacity: 0, x: 20 }}
//                         >
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="w-20 h-20 object-cover rounded-lg"
//                           />
//                           <div className="flex-1">
//                             <h3 className="font-semibold text-white">{item.name}</h3>
//                             <p className="text-orange-400 font-bold">${item.price}</p>
                            
//                             <div className="flex items-center gap-3 mt-2">
//                               <button
//                                 className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
//                                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                               >
//                                 <Remove fontSize="small" />
//                               </button>
//                               <span className="text-white w-8 text-center">
//                                 {item.quantity}
//                               </span>
//                               <button
//                                 className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
//                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                               >
//                                 <Add fontSize="small" />
//                               </button>
//                             </div>
//                           </div>
//                           <button
//                             className="text-red-400 hover:text-red-300 p-2 hover:bg-gray-600 rounded-lg transition-colors h-fit"
//                             onClick={() => removeFromCart(item.id)}
//                           >
//                             <Delete />
//                           </button>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Footer */}
//                 {cart.length > 0 && (
//                   <div className="p-6 border-t border-gray-700">
//                     <div className="flex justify-between items-center mb-4">
//                       <span className="text-gray-300">Subtotal:</span>
//                       <span className="text-2xl font-bold text-white">
//                         ${calculateTotal()}
//                       </span>
//                     </div>
//                     <div className="flex gap-3">
//                       <motion.button
//                         className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={() => {
//                           setShowCartModal(false);
//                         }}
//                       >
//                         Continue Shopping
//                       </motion.button>
//                       <motion.button
//                         className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={() => {
//                           setShowCartModal(false);
//                           setShowCheckoutModal(true);
//                         }}
//                       >
//                         Checkout
//                       </motion.button>
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Checkout Modal - Responsive with better submit button access */}
//         <AnimatePresence>
//           {showCheckoutModal && (
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
//               variants={overlayVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               onClick={() => setShowCheckoutModal(false)}
//             >
//               <motion.div
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden border border-gray-700"
//                 variants={modalVariants}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {orderSuccess ? (
//                   <div className="p-6 sm:p-12 text-center">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ type: "spring", stiffness: 200 }}
//                     >
//                       <CheckCircle className="text-green-500 !text-5xl sm:!text-7xl mx-auto mb-4" />
//                     </motion.div>
//                     <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
//                       Order Placed Successfully!
//                     </h2>
//                     <p className="text-sm sm:text-base text-gray-400 mb-4">
//                       Thank you for your purchase. You'll receive a confirmation email shortly.
//                     </p>
//                     <motion.button
//                       className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => setShowCheckoutModal(false)}
//                     >
//                       Close
//                     </motion.button>
//                   </div>
//                 ) : (
//                   <>
//                     {/* Checkout Header */}
//                     <div className="p-4 sm:p-6 border-b border-gray-700">
//                       <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
//                         <CreditCard className="text-orange-500" />
//                         Checkout
//                       </h2>
                      
//                       {/* Steps */}
//                       <div className="flex justify-between mt-4 sm:mt-6">
//                         {[1, 2, 3].map((step) => (
//                           <div
//                             key={step}
//                             className={`flex items-center ${step < 3 ? 'flex-1' : ''}`}
//                           >
//                             <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${
//                               step <= checkoutStep
//                                 ? 'bg-orange-500 text-white'
//                                 : 'bg-gray-700 text-gray-400'
//                             }`}>
//                               {step}
//                             </div>
//                             {step < 3 && (
//                               <div className={`flex-1 h-0.5 sm:h-1 mx-1 sm:mx-2 ${
//                                 step < checkoutStep ? 'bg-orange-500' : 'bg-gray-700'
//                               }`} />
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                       <div className="flex justify-between mt-1 sm:mt-2 text-xs text-gray-400 px-1 sm:px-2">
//                         <span>Info</span>
//                         <span>Shipping</span>
//                         <span>Payment</span>
//                       </div>
//                     </div>

//                     {/* Form - Scrollable with proper padding at bottom for submit button */}
//                     <div className="p-4 sm:p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 200px)" }}>
//                       {error && (
//                         <div className="bg-red-500/20 border border-red-500 text-red-500 p-2 sm:p-3 rounded-lg mb-3 sm:mb-4 flex items-center gap-2 text-sm">
//                           <Error fontSize="small" />
//                           {error}
//                         </div>
//                       )}

//                       {checkoutStep === 1 && (
//                         <motion.div
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           exit={{ opacity: 0, x: -20 }}
//                           className="space-y-3 sm:space-y-4"
//                         >
//                           <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
//                             <Person className="text-orange-500" />
//                             Personal Information
//                           </h3>
                          
//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                             <div>
//                               <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">First Name</label>
//                               <input
//                                 type="text"
//                                 name="firstName"
//                                 value={formData.firstName}
//                                 onChange={handleInputChange}
//                                 className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                 placeholder="John"
//                               />
//                             </div>
//                             <div>
//                               <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Last Name</label>
//                               <input
//                                 type="text"
//                                 name="lastName"
//                                 value={formData.lastName}
//                                 onChange={handleInputChange}
//                                 className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                 placeholder="Doe"
//                               />
//                             </div>
//                           </div>

//                           <div>
//                             <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Email</label>
//                             <div className="relative">
//                               <Email className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fontSize="small" />
//                               <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                 placeholder="john@example.com"
//                               />
//                             </div>
//                           </div>

//                           <div>
//                             <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Phone</label>
//                             <div className="relative">
//                               <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fontSize="small" />
//                               <input
//                                 type="tel"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                                 className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                 placeholder="+250 788 888 888"
//                               />
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}

//                       {checkoutStep === 2 && (
//                         <motion.div
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           exit={{ opacity: 0, x: -20 }}
//                           className="space-y-3 sm:space-y-4"
//                         >
//                           <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
//                             <LocalShipping className="text-orange-500" />
//                             Shipping Address
//                           </h3>

//                           <div>
//                             <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Street Address</label>
//                             <div className="relative">
//                               <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fontSize="small" />
//                               <input
//                                 type="text"
//                                 name="address"
//                                 value={formData.address}
//                                 onChange={handleInputChange}
//                                 className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                 placeholder="123 Coffee Street"
//                               />
//                             </div>
//                           </div>

//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                             <div>
//                               <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">City</label>
//                               <div className="relative">
//                                 <LocationCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fontSize="small" />
//                                 <input
//                                   type="text"
//                                   name="city"
//                                   value={formData.city}
//                                   onChange={handleInputChange}
//                                   className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                   placeholder="Kigali"
//                                 />
//                               </div>
//                             </div>
//                             <div>
//                               <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">ZIP Code</label>
//                               <div className="relative">
//                                 <Pin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fontSize="small" />
//                                 <input
//                                   type="text"
//                                   name="zipCode"
//                                   value={formData.zipCode}
//                                   onChange={handleInputChange}
//                                   className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                   placeholder="12345"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}

//                       {checkoutStep === 3 && (
//                         <motion.div
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           exit={{ opacity: 0, x: -20 }}
//                           className="space-y-3 sm:space-y-4"
//                         >
//                           <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
//                             <Payment className="text-orange-500" />
//                             Payment Details
//                           </h3>

//                           <div>
//                             <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Card Number</label>
//                             <div className="relative">
//                               <CardIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fontSize="small" />
//                               <input
//                                 type="text"
//                                 name="cardNumber"
//                                 value={formData.cardNumber}
//                                 onChange={handleInputChange}
//                                 className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                 placeholder="**** **** **** ****"
//                                 maxLength="19"
//                               />
//                             </div>
//                           </div>

//                           <div>
//                             <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Cardholder Name</label>
//                             <input
//                               type="text"
//                               name="cardName"
//                               value={formData.cardName}
//                               onChange={handleInputChange}
//                               className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                               placeholder="John Doe"
//                             />
//                           </div>

//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                             <div>
//                               <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Expiry Date</label>
//                               <div className="relative">
//                                 <CalendarToday className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fontSize="small" />
//                                 <input
//                                   type="text"
//                                   name="expiry"
//                                   value={formData.expiry}
//                                   onChange={handleInputChange}
//                                   className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                   placeholder="MM/YY"
//                                   maxLength="5"
//                                 />
//                               </div>
//                             </div>
//                             <div>
//                               <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">CVV</label>
//                               <input
//                                 type="text"
//                                 name="cvv"
//                                 value={formData.cvv}
//                                 onChange={handleInputChange}
//                                 className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 text-sm"
//                                 placeholder="***"
//                                 maxLength="3"
//                               />
//                             </div>
//                           </div>

//                           <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
//                             <Security className="text-green-500 !text-xs sm:!text-sm" />
//                             Your payment information is secure and encrypted
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Order Summary */}
//                       <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-700/30 rounded-lg">
//                         <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Order Summary</h4>
//                         {cart.map(item => (
//                           <div key={item.id} className="flex justify-between text-xs sm:text-sm text-gray-300 mb-1">
//                             <span>{item.name} x{item.quantity}</span>
//                             <span>${(item.price * item.quantity).toFixed(2)}</span>
//                           </div>
//                         ))}
//                         <div className="border-t border-gray-600 mt-2 pt-2 flex justify-between font-bold text-white text-sm sm:text-base">
//                           <span>Total:</span>
//                           <span>${calculateTotal()}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Footer - Fixed at bottom with submit button always visible */}
//                     <div className="p-3 sm:p-4 border-t border-gray-700 bg-gray-800 sticky bottom-0">
//                       <div className="flex gap-2 sm:gap-3">
//                         {checkoutStep > 1 && (
//                           <motion.button
//                             className="flex-1 bg-gray-700 text-white py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-1 sm:gap-2 text-sm"
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                             onClick={prevStep}
//                           >
//                             <ArrowBack fontSize="small" />
//                             Back
//                           </motion.button>
//                         )}
//                         <motion.button
//                           className={`flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-1 sm:gap-2 text-sm ${
//                             !validateStep() ? 'opacity-50 cursor-not-allowed' : ''
//                           }`}
//                           whileHover={validateStep() ? { scale: 1.02 } : {}}
//                           whileTap={validateStep() ? { scale: 0.98 } : {}}
//                           onClick={checkoutStep === 3 ? handleSubmitOrder : nextStep}
//                           disabled={!validateStep() || loading}
//                         >
//                           {loading ? (
//                             "Processing..."
//                           ) : (
//                             <>
//                               {checkoutStep === 3 ? (
//                                 <>
//                                   <Lock fontSize="small" />
//                                   Place Order
//                                 </>
//                               ) : (
//                                 <>
//                                   Continue
//                                   <ArrowForward fontSize="small" />
//                                 </>
//                               )}
//                             </>
//                           )}
//                         </motion.button>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };
















/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  ShoppingCart,
  Remove,
  Add,
  Delete,
  CreditCard,
  Phone,
  Email,
  Person,
  LocalShipping,
  CheckCircle,
  Error,
  ArrowForward,
  ArrowBack,
  Lock,
  Security,
  LocalCafe,
  Close,
  Payment,
  Home,
  LocationCity,
  Pin,
  CalendarToday,
  CreditCard as CardIcon
} from "@mui/icons-material";

// Product data with coffee products
const products = [
  {
    id: 1,
    name: "Espresso Romano",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
    category: "Espresso",
    description: "Rich espresso with a twist of lemon",
    inStock: true
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600",
    category: "Specialty",
    description: "Freshly steamed milk with vanilla and caramel",
    inStock: true
  },
  {
    id: 3,
    name: "Mocha Deluxe",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    category: "Chocolate",
    description: "Rich chocolate and espresso combination",
    inStock: true
  },
  {
    id: 4,
    name: "Cold Brew Black",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600",
    category: "Cold",
    description: "Smooth, cold-brewed coffee served over ice",
    inStock: true
  },
  {
    id: 5,
    name: "French Vanilla Latte",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600",
    category: "Latte",
    description: "Smooth espresso with creamy vanilla",
    inStock: true
  },
  {
    id: 6,
    name: "Irish Cream Coffee",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
    category: "Flavored",
    description: "Premium coffee with Irish cream flavor",
    inStock: true
  },
  {
    id: 7,
    name: "Hazelnut Cappuccino",
    price: 5.79,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600",
    category: "Cappuccino",
    description: "Perfect balance of espresso, milk, and hazelnut",
    inStock: true
  },
  {
    id: 8,
    name: "Cinnamon Dolce Latte",
    price: 5.89,
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600",
    category: "Specialty",
    description: "Sweet cinnamon syrup with espresso and steamed milk",
    inStock: true
  },
  {
    id: 9,
    name: "Affogato",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600",
    category: "Dessert",
    description: "Vanilla gelato topped with a shot of hot espresso",
    inStock: true
  },
  {
    id: 10,
    name: "Turkish Coffee",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1587080266036-3494f4f66a7f?w=600",
    category: "Traditional",
    description: "Finely ground coffee brewed in a traditional cezve",
    inStock: true
  },
  {
    id: 11,
    name: "Matcha Latte",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1536256263959-770afe4bf1c1?w=600",
    category: "Tea",
    description: "Ceremonial grade matcha with steamed milk",
    inStock: true
  },
  {
    id: 12,
    name: "Pumpkin Spice Latte",
    price: 6.29,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600",
    category: "Seasonal",
    description: "Fall favorite with pumpkin and warm spices",
    inStock: true
  }
];

export const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isNavigating, setIsNavigating] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: ""
  });

  // API configuration
  const API_BASE_URL = "https://your-api-endpoint.com/api";

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("productCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("productCart", JSON.stringify(cart));
  }, [cart]);

  // Initialize quantities
  useEffect(() => {
    const initialQuantities = {};
    products.forEach(product => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  // Handle quantity change with page navigation at 9
  const handleQuantityChange = (productId, newQuantity) => {
    // Check if quantity reaches 9 to trigger page navigation
    if (newQuantity === 9 && !isNavigating) {
      setIsNavigating(true);
      
      // Navigate to next page or back to first
      if (currentPage < totalPages) {
        // Go to next page
        const nextPageElement = document.getElementById(`page-${currentPage + 1}`);
        if (nextPageElement) {
          nextPageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setCurrentPage(prev => prev + 1);
        }
      } else {
        // On last page, go back to page 1
        const firstPageElement = document.getElementById('page-1');
        if (firstPageElement) {
          firstPageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setCurrentPage(1);
        }
      }
      
      // Reset navigation flag after animation
      setTimeout(() => setIsNavigating(false), 1500);
    }
    
    // Update quantity (max 9)
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, Math.min(9, newQuantity))
    }));
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    
    setShowCartModal(true);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const calculateItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitOrder = async () => {
    setLoading(true);
    setError("");
    
    try {
      const orderData = {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: {
            street: formData.address,
            city: formData.city,
            zipCode: formData.zipCode
          }
        },
        items: cart.map(item => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: calculateTotal(),
        paymentMethod: "card",
        orderDate: new Date().toISOString()
      };

      const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
      
      if (response.data.success) {
        setOrderSuccess(true);
        setTimeout(() => {
          setCart([]);
          setShowCheckoutModal(false);
          setCheckoutStep(1);
          setOrderSuccess(false);
          setFormData({
            firstName: "", lastName: "", email: "", phone: "",
            address: "", city: "", zipCode: "",
            cardNumber: "", cardName: "", expiry: "", cvv: ""
          });
        }, 3000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setCheckoutStep(checkoutStep + 1);
    }
  };

  const prevStep = () => {
    setCheckoutStep(checkoutStep - 1);
  };

  const validateStep = () => {
    switch(checkoutStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.zipCode;
      case 3:
        return formData.cardNumber && formData.cardName && formData.expiry && formData.cvv;
      default:
        return true;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Pagination - 6 products per page
  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  const getProductsForPage = (page) => {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    return products.slice(start, end);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Coffee Collection
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover our handcrafted selection of premium coffees
          </motion.p>

          {/* Cart Icon */}
          <motion.button
            className="fixed top-24 right-8 z-40 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowCartModal(true)}
          >
            <ShoppingCart />
            {cart.length > 0 && (
              <motion.span
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                {calculateItemCount()}
              </motion.span>
            )}
          </motion.button>
        </div>

        {/* Products Grid - One page at a time */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <motion.div
            key={pageNum}
            id={`page-${pageNum}`}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${
              pageNum !== currentPage ? 'hidden' : ''
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {getProductsForPage(pageNum).map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all group">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProduct === product.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-orange-500">
                      {product.category}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      ${product.price}
                    </div>

                    {/* Quantity 9 Indicator */}
                    {quantities[product.id] === 9 && (
                      <motion.div
                        className="absolute inset-0 bg-orange-500/20 backdrop-blur-sm flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.span 
                          className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded-full"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          🚀 Opening Next Page!
                        </motion.span>
                      </motion.div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {product.description}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-300 text-sm">Quantity:</span>
                      <div className="flex items-center gap-3">
                        <motion.button
                          className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleQuantityChange(
                            product.id, 
                            Math.max(1, (quantities[product.id] || 1) - 1)
                          )}
                        >
                          <Remove fontSize="small" />
                        </motion.button>
                        
                        <motion.span 
                          className="text-white font-semibold w-8 text-center"
                          key={quantities[product.id]}
                          initial={{ scale: 1.2, color: '#f97316' }}
                          animate={{ scale: 1, color: '#ffffff' }}
                        >
                          {quantities[product.id] || 1}
                        </motion.span>
                        
                        <motion.button
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors ${
                            (quantities[product.id] || 1) >= 9 
                              ? 'bg-gray-600 cursor-not-allowed' 
                              : 'bg-gray-700 hover:bg-orange-500'
                          }`}
                          whileHover={(quantities[product.id] || 1) < 9 ? { scale: 1.1 } : {}}
                          whileTap={(quantities[product.id] || 1) < 9 ? { scale: 0.9 } : {}}
                          onClick={() => {
                            if ((quantities[product.id] || 1) < 9) {
                              handleQuantityChange(
                                product.id, 
                                (quantities[product.id] || 1) + 1
                              );
                            }
                          }}
                          disabled={(quantities[product.id] || 1) >= 9}
                        >
                          <Add fontSize="small" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Next page at 9</span>
                        <span>{quantities[product.id] || 1}/9</span>
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-orange-500"
                          initial={{ width: `${((quantities[product.id] || 1) / 9) * 100}%` }}
                          animate={{ width: `${((quantities[product.id] || 1) / 9) * 100}%` }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart fontSize="small" />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Page Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage > 1 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={currentPage > 1 ? { scale: 1.05 } : {}}
            whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
            onClick={() => {
              if (currentPage > 1) {
                document.getElementById(`page-${currentPage - 1}`).scrollIntoView({ behavior: 'smooth' });
                setCurrentPage(prev => prev - 1);
              }
            }}
            disabled={currentPage === 1}
          >
            Previous Page
          </motion.button>
          
          <span className="text-white px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          
          <motion.button
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage < totalPages 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={currentPage < totalPages ? { scale: 1.05 } : {}}
            whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
            onClick={() => {
              if (currentPage < totalPages) {
                document.getElementById(`page-${currentPage + 1}`).scrollIntoView({ behavior: 'smooth' });
                setCurrentPage(prev => prev + 1);
              }
            }}
            disabled={currentPage === totalPages}
          >
            Next Page
          </motion.button>
        </div>

        {/* Cart Modal */}
        <AnimatePresence>
          {showCartModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setShowCartModal(false)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden border border-gray-700"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <ShoppingCart className="text-orange-500" />
                    Your Cart ({cart.length} items)
                  </h2>
                  <motion.button
                    className="text-gray-400 hover:text-white p-2 hover:bg-gray-700 rounded-full transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowCartModal(false)}
                  >
                    <Close />
                  </motion.button>
                </div>

                {/* Cart Items */}
                <div className="p-6 overflow-y-auto max-h-[400px]">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <LocalCafe className="text-gray-600 !text-6xl mx-auto mb-4" />
                      <p className="text-gray-400">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <motion.div
                          key={item.id}
                          className="flex gap-4 bg-gray-700/30 p-4 rounded-xl"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-white">{item.name}</h3>
                            <p className="text-orange-400 font-bold">${item.price}</p>
                            
                            <div className="flex items-center gap-3 mt-2">
                              <button
                                className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Remove fontSize="small" />
                              </button>
                              <span className="text-white w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Add fontSize="small" />
                              </button>
                            </div>
                          </div>
                          <button
                            className="text-red-400 hover:text-red-300 p-2 hover:bg-gray-600 rounded-lg transition-colors h-fit"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Delete />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                  <div className="p-6 border-t border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-300">Total:</span>
                      <span className="text-2xl font-bold text-white">
                        ${calculateTotal()}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <motion.button
                        className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowCartModal(false)}
                      >
                        Continue Shopping
                      </motion.button>
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setShowCartModal(false);
                          setShowCheckoutModal(true);
                        }}
                      >
                        Checkout
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Checkout Modal */}
        <AnimatePresence>
          {showCheckoutModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setShowCheckoutModal(false)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
              >
                {orderSuccess ? (
                  <div className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="text-green-500 !text-7xl mx-auto mb-4" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Order Placed Successfully!
                    </h2>
                    <p className="text-gray-400 mb-4">
                      Thank you for your purchase. You'll receive a confirmation email shortly.
                    </p>
                    <motion.button
                      className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowCheckoutModal(false)}
                    >
                      Close
                    </motion.button>
                  </div>
                ) : (
                  <>
                    {/* Checkout Header */}
                    <div className="p-6 border-b border-gray-700">
                      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <CreditCard className="text-orange-500" />
                        Checkout
                      </h2>
                      
                      {/* Steps */}
                      <div className="flex justify-between mt-6">
                        {[1, 2, 3].map((step) => (
                          <div key={step} className={`flex items-center ${step < 3 ? 'flex-1' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              step <= checkoutStep ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-400'
                            }`}>
                              {step}
                            </div>
                            {step < 3 && (
                              <div className={`flex-1 h-1 mx-2 ${
                                step < checkoutStep ? 'bg-orange-500' : 'bg-gray-700'
                              }`} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Form */}
                    <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 200px)" }}>
                      {error && (
                        <div className="bg-red-500/20 border border-red-500 text-red-500 p-3 rounded-lg mb-4 flex items-center gap-2">
                          <Error fontSize="small" />
                          {error}
                        </div>
                      )}

                      {checkoutStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-4"
                        >
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Person className="text-orange-500" />
                            Personal Information
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-300 text-sm mb-2">First Name</label>
                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                placeholder="John"
                              />
                            </div>
                            <div>
                              <label className="block text-gray-300 text-sm mb-2">Last Name</label>
                              <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                placeholder="Doe"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-gray-300 text-sm mb-2">Email</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-300 text-sm mb-2">Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                              placeholder="+250 788 888 888"
                            />
                          </div>
                        </motion.div>
                      )}

                      {checkoutStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-4"
                        >
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <LocalShipping className="text-orange-500" />
                            Shipping Address
                          </h3>

                          <div>
                            <label className="block text-gray-300 text-sm mb-2">Street Address</label>
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                              placeholder="123 Coffee Street"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-300 text-sm mb-2">City</label>
                              <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                placeholder="Kigali"
                              />
                            </div>
                            <div>
                              <label className="block text-gray-300 text-sm mb-2">ZIP Code</label>
                              <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                placeholder="12345"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {checkoutStep === 3 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-4"
                        >
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Payment className="text-orange-500" />
                            Payment Details
                          </h3>

                          <div>
                            <label className="block text-gray-300 text-sm mb-2">Card Number</label>
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                              placeholder="**** **** **** ****"
                              maxLength="19"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-300 text-sm mb-2">Cardholder Name</label>
                            <input
                              type="text"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                              placeholder="John Doe"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-300 text-sm mb-2">Expiry Date</label>
                              <input
                                type="text"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                placeholder="MM/YY"
                                maxLength="5"
                              />
                            </div>
                            <div>
                              <label className="block text-gray-300 text-sm mb-2">CVV</label>
                              <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                placeholder="***"
                                maxLength="3"
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-400 mt-4">
                            <Security className="text-green-500 !text-sm" />
                            Your payment information is secure and encrypted
                          </div>
                        </motion.div>
                      )}

                      {/* Order Summary */}
                      <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Order Summary</h4>
                        {cart.map(item => (
                          <div key={item.id} className="flex justify-between text-sm text-gray-300 mb-1">
                            <span>{item.name} x{item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                        <div className="border-t border-gray-600 mt-2 pt-2 flex justify-between font-bold text-white">
                          <span>Total:</span>
                          <span>${calculateTotal()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-700 bg-gray-800">
                      <div className="flex gap-3">
                        {checkoutStep > 1 && (
                          <motion.button
                            className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={prevStep}
                          >
                            <ArrowBack fontSize="small" />
                            Back
                          </motion.button>
                        )}
                        <motion.button
                          className={`flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                            !validateStep() ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          whileHover={validateStep() ? { scale: 1.02 } : {}}
                          whileTap={validateStep() ? { scale: 0.98 } : {}}
                          onClick={checkoutStep === 3 ? handleSubmitOrder : nextStep}
                          disabled={!validateStep() || loading}
                        >
                          {loading ? (
                            "Processing..."
                          ) : (
                            <>
                              {checkoutStep === 3 ? (
                                <>
                                  <Lock fontSize="small" />
                                  Place Order
                                </>
                              ) : (
                                <>
                                  Continue
                                  <ArrowForward fontSize="small" />
                                </>
                              )}
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Page transition styles */}
      <style jsx>{`
        [id^="page-"] {
          scroll-margin-top: 2rem;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};