import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SignupForm() {
  // Form data state
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Signup successful!");
  };

  // Animation variants for container and form items
  const containerAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, when: "beforeChildren" },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black p-4 overflow-hidden">
      {/* Background with slow zoom and slight move */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, x: 0, y: 0 }}
        animate={{ scale: 1.15, x: -20, y: -10 }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1650&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
      />

      {/* Form Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Left Info Panel (hidden on small screens) */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:flex w-1/2 flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10"
        >
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold mb-4"
          >
            Welcome!
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-center"
          >
            Sign up to access a world of features. It's fast and free!
          </motion.p>
        </motion.div>

        {/* Signup Form */}
        <motion.div
          className="w-full md:w-1/2 p-10 bg-white bg-opacity-90 backdrop-blur-md rounded-r-2xl"
          variants={containerAnim}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemAnim}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            Create Account
          </motion.h2>

          <motion.form onSubmit={onSubmit} className="space-y-5">
            {[
              { name: "name", type: "text", placeholder: "Full Name", icon: <FaUser /> },
              { name: "email", type: "email", placeholder: "Email Address", icon: <FaEnvelope /> },
              { name: "password", type: "password", placeholder: "Password", icon: <FaLock /> },
              { name: "confirmPassword", type: "password", placeholder: "Confirm Password", icon: <FaLock /> },
            ].map(({ name, type, placeholder, icon }) => (
              <motion.div
                key={name}
                variants={itemAnim}
                className="flex items-center border border-gray-300 rounded-xl hover:border-purple-500 transition"
              >
                <div className="px-4 text-gray-400">{icon}</div>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={data[name as keyof typeof data]}
                  onChange={onChange}
                  required
                  className="w-full py-3 px-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </motion.div>
            ))}

            <motion.button
              variants={itemAnim}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition"
            >
              Sign Up
            </motion.button>
          </motion.form>

          <motion.p
            variants={itemAnim}
            className="text-center text-sm text-gray-500 mt-6"
          >
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Log in
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
