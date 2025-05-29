import { useEffect } from "react";
import { Inbox, Star, Clock, Send, FileText, ShieldOff, Trash2, Pencil } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  selectedFolder: string;
  onSelectFolder: (folder: string) => void;
};

const folders = [
  { name: "Inbox", icon: Inbox },
  { name: "Starred", icon: Star },
  { name: "Snoozed", icon: Clock },
  { name: "Sent", icon: Send },
  { name: "Drafts", icon: FileText },
  { name: "Spam", icon: ShieldOff },
  { name: "Trash", icon: Trash2 },
];

const InboxSlidebar = ({ selectedFolder, onSelectFolder }: Props) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.5 },
    });
  }, [controls]);

  return (
    <motion.aside
      initial={{ x: "-100%", opacity: 0 }}
      animate={controls}
      className="w-64 p-4 bg-white border-r border-gray-200 shadow-sm"
    >
      <button
        className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg mb-6 shadow"
        onClick={() => onSelectFolder("Compose")}
      >
        <Pencil className="w-4 h-4" /> Compose
      </button>

      <ul className="space-y-1">
        {folders.map(({ name, icon: Icon }) => (
          <motion.li
            key={name}
            onClick={() => onSelectFolder(name)}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
              ${
                selectedFolder === name
                  ? "bg-gray-100 font-semibold text-blue-600"
                  : "hover:bg-gray-50 text-gray-700"
              }
            `}
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.aside>
  );
};

export default InboxSlidebar;
