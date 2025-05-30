import React, { useState } from "react";
import {
  LayoutDashboard,
  MessageCircle,
  Inbox,
  Calendar,
  User,
  Settings,
  SquareStack,
  Sliders,
  Table,
  BarChart,
  LogIn,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "../../image";

// Sidebar nav items
const navItems = [
  {
    icon: <LayoutDashboard />,
    label: "Dashboard",
    path: "/",
    children: [
      { label: "Analytics", path: "/analytics" },
      { label: "eCommerce", path: "/ecommerce" },
    ],
  },
  { icon: <MessageCircle />, label: "Chat", path: "/chat" },
  { icon: <Inbox />, label: "Inbox", path: "/inbox" },
  { icon: <Calendar />, label: "Calendar", path: "/calendar" },
  { icon: <User />, label: "Profile", path: "/profile" },
  { icon: <Settings />, label: "Settings", path: "/settings" },
  {
    icon: <SquareStack />,
    label: "UI Elements",
    children: [{ label: "Buttons", path: "/ui/buttons" }],
  },
  {
    icon: <Sliders />,
    label: "Form Elements",
    children: [{ label: "Inputs", path: "/forms/inputs" }],
  },
  { icon: <Table />, label: "Data Tables", path: "/data-tables" },
  { icon: <BarChart />, label: "Charts", path: "/charts" },
  {
    icon: <LogIn />,
    label: "Auth Pages",
    children: [{ label: "Login", path: "/auth/login" }],
  },
];

// Framer Motion animations
const containerAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, when: "beforeChildren" } },
};
const itemAnim = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 150, damping: 16 } },
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Hide sidebar on auth pages
  if (location.pathname.startsWith("/auth")) return null;

  const isActive = (item: typeof navItems[0]) => {
    if (item.label === "Dashboard") {
      const otherActive = navItems.some(nav =>
        nav.label !== "Dashboard" &&
        (nav.children
          ? nav.children.some(child => location.pathname.startsWith(child.path))
          : nav.path && location.pathname.startsWith(nav.path))
      );
      return !otherActive;
    }

    if (item.children) {
      return item.children.some(child => location.pathname.startsWith(child.path));
    }

    return item.path ? location.pathname.startsWith(item.path) : false;
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* Hamburger (mobile) */}
      {!isSidebarOpen && (
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-gray-700 dark:text-white" />
          </button>
        </div>
      )}

      {/* Overlay (mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial="hidden"
        animate="visible"
        variants={containerAnim}
        className={`fixed inset-y-0 h-screen left-0 z-50 w-64 bg-white shadow-md transform transition-transform
          md:relative md:translate-x-0 md:flex md:flex-col dark:bg-slate-800 dark:text-white
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} touch-action-none`}
      >
        {/* Logo and Close */}
        <motion.div variants={itemAnim} className="px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">Taildash</span>
          </a>
          <div className="md:hidden">
            <button onClick={() => setIsSidebarOpen(false)}>
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navItems.map(item => (
            <motion.div key={item.label} variants={itemAnim}>
              {!item.children ? (
                <button
                  onClick={() => handleNavigate(item.path || "#")}
                  className={`flex w-full items-center px-3 py-2 rounded-lg font-medium transition
                    ${isActive(item)
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg hover:scale-[1.03] hover:-translate-x-1"}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex w-full items-center px-3 py-2 rounded-lg font-medium transition
                      ${openDropdown === item.label || isActive(item)
                        ? "bg-blue-100 text-blue-700 dark:bg-slate-700 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg hover:scale-[1.03] hover:-translate-x-1"}`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                    <ChevronDown
                      className={`ml-auto w-4 h-4 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    variants={itemAnim}
                    className={`ml-8 mt-1 space-y-1 overflow-hidden text-sm transition-[max-height] duration-500 ease-in-out
                      ${openDropdown === item.label ? "max-h-96" : "max-h-0"}`}
                  >
                    {item.children.map(child => (
                      <button
                        key={child.label}
                        onClick={() => handleNavigate(child.path)}
                        className={`block w-full text-left px-2 py-1 rounded-md transition
                          ${location.pathname.startsWith(child.path)
                            ? "text-blue-600 font-semibold bg-blue-50 dark:bg-slate-700"
                            : "text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md hover:scale-[1.02] hover:translate-x-1"}`}
                      >
                        {child.label}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;
