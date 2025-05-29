import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
   
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Left Side - Info */}
        <div className="flex-1 space-y-6 text-gray-700">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p>Have a question or want to work together? Fill out the form and we’ll get back to you as soon as possible.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-600" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-600" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-600" />
              <span>123 React Street, Tailwind City</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
