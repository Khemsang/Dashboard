import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useUser } from "../ProfilePage/ProfileContext/ProfileContext";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const sideVariants = {
  hiddenLeft: { opacity: 0, x: -80, scale: 0.95 },
  hiddenRight: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// PasswordInput Props Type
type PasswordInputProps = {
  show: boolean;
  toggle: () => void;
  placeholder: string;
};

// Reusable Password Input Component
const PasswordInput: React.FC<PasswordInputProps> = ({ show, toggle, placeholder }) => (
  <div className="relative">
    <input
      type={show ? "text" : "password"}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded p-2 pr-10"
    />
    <button
      type="button"
      onClick={toggle}
      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
      aria-label={`Toggle visibility of ${placeholder.toLowerCase()}`}
    >
      {show ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
);

const Settings: React.FC = () => {
  const { currentUser } = useUser();

  const [showCurrent, setShowCurrent] = React.useState(false);
  const [showNew, setShowNew] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#f5f8fd] p-8 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold text-gray-800 mb-1 dark:text-white">
        Account Information
      </h2>
      <p className="text-gray-500 mb-6">Edit your profile quickly</p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column - Profile Info */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow dark:bg-slate-400"
          variants={sideVariants}
          initial="hiddenLeft"
          animate="visible"
        >
          <div className="flex mb-4">
            <img
              src={currentUser.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          <motion.form
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.input
              type="text"
              placeholder="Full Name"
              defaultValue={currentUser.name}
              className="w-full border border-gray-300 rounded p-2"
              variants={inputVariants}
            />
            <motion.input
              type="text"
              placeholder="Role"
              defaultValue={currentUser.role}
              className="w-full border border-gray-300 rounded p-2"
              variants={inputVariants}
            />
            <motion.input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded p-2"
              variants={inputVariants}
            />
            <motion.input
              type="text"
              placeholder="Website"
              className="w-full border border-gray-300 rounded p-2"
              variants={inputVariants}
            />
            <motion.textarea
              placeholder="Bio"
              className="w-full border border-gray-300 rounded p-2 h-24"
              variants={inputVariants}
            />
            <motion.button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded w-full"
              variants={inputVariants}
            >
              Update Now
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right Column - Change Password */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow dark:bg-slate-400"
          variants={sideVariants}
          initial="hiddenRight"
          animate="visible"
        >
          <h3 className="text-lg font-semibold mb-4">Password</h3>

          <motion.form
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={inputVariants}>
              <PasswordInput
                show={showCurrent}
                toggle={() => setShowCurrent((prev) => !prev)}
                placeholder="Current Password"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <PasswordInput
                show={showNew}
                toggle={() => setShowNew((prev) => !prev)}
                placeholder="New Password"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <PasswordInput
                show={showConfirm}
                toggle={() => setShowConfirm((prev) => !prev)}
                placeholder="Re-type New Password"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded w-full"
              variants={inputVariants}
            >
              Save
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Settings;
