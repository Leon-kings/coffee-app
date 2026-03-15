/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LocalCafe, 
  Star, 
  StarHalf,
  ArrowForward,
  ArrowBack,
  AccessTime,
  LocationOn,
  Payment,
  ContactMail,
  Close,
  Send,
  Person,
  Email,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Coffee,
  Spa,
  Favorite,
  Timer,
  Agriculture,
  Whatshot
} from "@mui/icons-material";
import axios from 'axios';

// Coffee data with images and details
export const coffeeProducts = [
  {
    id: 1,
    name: "Espresso Romano",
    description: "Rich espresso with a twist of lemon, creating a perfect balance of bitterness and citrus",
    longDescription: "Our signature Espresso Romano is a tribute to Italian coffee culture. Made from premium Arabica beans, this intense shot of espresso is served with a twist of fresh lemon peel, which cuts through the richness and adds a bright, citrusy note. The result is a harmonious balance of bold coffee flavor and refreshing zest that awakens the senses.",
    price: 4.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
    category: "Espresso",
    origin: "Italy",
    roast: "Dark",
    inStock: true,
    aroma: "Intense with citrus notes",
    brewingMethod: "Espresso Machine",
    bestTime: "Morning",
    calories: 5,
    caffeine: "High"
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and topped with caramel",
    longDescription: "Indulge in our signature Caramel Macchiato, a beautifully layered beverage that's as stunning as it is delicious. We start with creamy vanilla syrup, add steamed milk, and then 'mark' it with a shot of our rich espresso. The final touch is a crosshatch of buttery caramel drizzle that slowly sinks through the layers, creating a sweet, velvety experience in every sip.",
    price: 5.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600",
    category: "Specialty",
    origin: "Colombia",
    roast: "Medium",
    inStock: true,
    aroma: "Sweet caramel with coffee notes",
    brewingMethod: "Espresso Machine",
    bestTime: "Afternoon",
    calories: 250,
    caffeine: "Medium"
  },
  {
    id: 3,
    name: "Mocha Deluxe",
    description: "Rich chocolate and espresso combined with steamed milk, topped with whipped cream",
    longDescription: "For chocolate and coffee lovers alike, our Mocha Deluxe is pure bliss. We combine our signature espresso with rich, velvety chocolate syrup and steamed milk, creating a perfect harmony of bitter and sweet. Topped with a generous swirl of whipped cream and a dusting of cocoa powder, this indulgent drink is like a dessert in a cup.",
    price: 6.49,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    category: "Chocolate",
    origin: "Brazil",
    roast: "Medium-Dark",
    inStock: true,
    aroma: "Rich chocolate and roasted coffee",
    brewingMethod: "Espresso Machine",
    bestTime: "Evening dessert",
    calories: 320,
    caffeine: "Medium"
  },
  {
    id: 4,
    name: "Cold Brew Black",
    description: "Smooth, cold-brewed coffee served over ice for a refreshing experience",
    longDescription: "Our Cold Brew Black is crafted through a 16-hour slow-steeping process that extracts the coffee's natural sweetness and reduces acidity. The result is an incredibly smooth, full-bodied coffee concentrate that we serve over ice. Unlike traditional iced coffee, our cold brew never tastes bitter or watered down – just pure, refreshing coffee flavor.",
    price: 4.49,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    category: "Cold",
    origin: "Ethiopia",
    roast: "Light",
    inStock: true,
    aroma: "Fruity and floral",
    brewingMethod: "Cold Brew",
    bestTime: "Afternoon refreshment",
    calories: 10,
    caffeine: "High"
  },
  {
    id: 5,
    name: "French Vanilla Latte",
    description: "Smooth espresso with creamy vanilla and steamed milk",
    longDescription: "Experience the classic comfort of our French Vanilla Latte. We start with a smooth shot of espresso, add rich vanilla syrup, and finish with perfectly steamed milk for a creamy, dreamy texture. The vanilla flavor is warm and authentic – not too sweet, with hints of caramel and hazelnut that complement rather than mask the quality of our espresso.",
    price: 5.49,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600",
    category: "Latte",
    origin: "Guatemala",
    roast: "Medium",
    inStock: true,
    aroma: "Sweet vanilla and roasted nuts",
    brewingMethod: "Espresso Machine",
    bestTime: "All day",
    calories: 190,
    caffeine: "Medium"
  },
  {
    id: 6,
    name: "Irish Cream Coffee",
    description: "Premium coffee with a smooth Irish cream flavor",
    longDescription: "Our Irish Cream Coffee offers the indulgent flavor of Ireland's favorite liqueur without the alcohol. We start with our dark roast coffee, known for its bold, robust character, then add a proprietary blend of Irish cream flavors – notes of chocolate, vanilla, and whiskey – that meld perfectly with the coffee's natural richness. It's a cozy, comforting drink any time of day.",
    price: 5.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
    category: "Flavored",
    origin: "Costa Rica",
    roast: "Dark",
    inStock: true,
    aroma: "Whiskey, chocolate, and coffee",
    brewingMethod: "Pour Over",
    bestTime: "Evening",
    calories: 180,
    caffeine: "Medium"
  }
];



const API_BASE_URL = 'https://your-api-endpoint.com/api';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Auto-slide for hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coffeeProducts.slice(0, 4).length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);
      if (response.data.success) {
        alert('Message sent successfully! We\'ll get back to you soon.');
        setShowContactModal(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Toggle more info for product
  const toggleMoreInfo = (productId) => {
    setShowMoreInfo(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  // Navigation for slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coffeeProducts.slice(0, 4).length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coffeeProducts.slice(0, 4).length) % coffeeProducts.slice(0, 4).length);
  };

  // Render stars for rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="text-yellow-400" style={{ fontSize: '1rem' }} />);
    }
    if (hasHalf) {
      stars.push(<StarHalf key="half" className="text-yellow-400" style={{ fontSize: '1rem' }} />);
    }
    return stars;
  };

  // Get slide products (first 4 for variety)
  const slideProducts = coffeeProducts.slice(0, 4);

  return (
    <div className="w-full min-h-screen mt-10 bg-gradient-to-b from-gray-900 to-gray-900 rounded-2xl text-white">
      {/* Hero Section with Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
              src={slideProducts[currentSlide].image}
              alt=''
              className="w-full h-full object-cover"
            />
            
            {/* Slide Information Overlay */}
            <motion.div 
              className="absolute bottom-20 left-0 right-0 z-20 text-center px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-2 text-orange-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {slideProducts[currentSlide].name}
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base text-gray-200 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {slideProducts[currentSlide].description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-3 justify-center items-center text-xs md:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <span className="bg-orange-500/80 px-3 py-1 rounded-full">{slideProducts[currentSlide].category}</span>
                  <span className="bg-gray-700/80 px-3 py-1 rounded-full">{slideProducts[currentSlide].origin}</span>
                  <span className="bg-amber-700/80 px-3 py-1 rounded-full">{slideProducts[currentSlide].roast} Roast</span>
                  <span className="bg-green-700/80 px-3 py-1 rounded-full">${slideProducts[currentSlide].price}</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>


        {/* Hero Main Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mt-[-100px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Crafted Perfection
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-2">in Every Cup</p>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Experience the finest artisanal coffee, roasted to perfection and brewed with passion since 2010
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 shadow-xl shadow-orange-500/20"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContactModal(true)}
            >
              <ContactMail />
              Contact Us
            </motion.button>
            

          </motion.div>
        </div>


      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We're committed to bringing you the best coffee experience from bean to cup
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Agriculture className="text-4xl text-orange-500" />, title: "Premium Beans", desc: "Sourced from the finest coffee regions worldwide, ethically traded and sustainably grown" },
              { icon: <Timer className="text-4xl text-orange-500" />, title: "Fresh Daily", desc: "Roasted fresh every day in small batches for optimal flavor and aroma" },
              { icon: <Whatshot className="text-4xl text-orange-500" />, title: "Perfect Roast", desc: "Master roasters with 20+ years of experience ensuring every bean reaches its potential" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="mb-4 transform group-hover:scale-110 transition duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal (Kept as requested) */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-md w-full border border-gray-700"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <ContactMail className="text-orange-500" />
                  Contact Us
                </h2>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-white p-2 hover:bg-gray-800 rounded-full transition"
                >
                  <Close />
                </button>
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-500 p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Person className="text-orange-400" />
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Email className="text-orange-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Phone className="text-orange-400" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                    placeholder="Enter your phone (optional)"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Send className="text-orange-400" />
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
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

    </div>
  );
};

