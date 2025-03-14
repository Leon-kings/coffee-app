/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full dark:text-white">
      {/* Contact Form */}
      <div className="contact_form pt-32 pb-32">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-lg-6">
              <motion.div
                className="section_title text-center pb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="title text-3xl font-bold text-white">
                  Get In Touch
                </h4>
                <span className="line block mt-4">
                  <motion.span
                    className="box bg-yellow-500 h-1 w-16 inline-block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.span>
                </span>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-8 bg-white rounded-2xl text-black p-6">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <div className="col-lg-6 px-4">
                <motion.div
                  className="single_form mt-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </motion.div>
              </div>
              <div className="col-lg-6 px-4">
                <motion.div
                  className="single_form mt-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </motion.div>
              </div>
              <div className="col-lg-12 px-4">
                <motion.div
                  className="single_form mt-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </motion.div>
              </div>
              <div className="col-lg-12 px-4">
                <motion.div
                  className="single_form mt-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    
                    required
                  ></textarea>
                </motion.div>
              </div>
              <div className="col-lg-12 px-4">
                <motion.div
                  className="single_form text-center mt-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="main-btn px-8 py-3 dark:bg-blue-400 dark:text-white text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    {loading ? "Sending..." : "SUBMIT"}
                  </button>
                </motion.div>
              </div>
            </div>
          </form>

          {/* Success and Error Messages */}
          {success && (
            <motion.div
              className="mt-6 text-center text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Message sent successfully!
            </motion.div>
          )}
          {error && (
            <motion.div
              className="mt-6 text-center text-red-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}
        </div>
      </div>

      {/* Google Map */}
      <div className="contact_map">
        <div className="h-90 w-full">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;