import { emailsData } from "../../Constants/emailsData";
import InboxSlidebar from "./InboxSlidebar/InboxSlidebar";
import InboxTable from "./InboxTable/InboxTable";
import { EmailPage } from "../../Components";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { x: "-100%", transition: { ease: "easeInOut" } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.25 },
  exit: { opacity: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Inbox = () => {
  const [selectedFolder, setSelectedFolder] = React.useState("Inbox");
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const isCompose = selectedFolder === "Compose";
  const filteredEmails = isCompose
    ? []
    : emailsData.filter(({ folder }) => folder === selectedFolder);

  return (
    <div className="flex h-full bg-white dark:bg-gray-900 relative">
      <div className="hidden sm:block w-64 bg-gray-100 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <InboxSlidebar
          selectedFolder={selectedFolder}
          onSelectFolder={setSelectedFolder}
        />
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              key="sidebar"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed top-0 left-0 h-full w-64 bg-gray-100 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-40 sm:hidden"
            >
              <InboxSlidebar
                selectedFolder={selectedFolder}
                onSelectFolder={(folder) => {
                  setSelectedFolder(folder);
                  setSidebarOpen(false);
                }}
              />
            </motion.div>

            <motion.div
              key="overlay"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              className="fixed inset-0 bg-black z-30 sm:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
          </>
        )}
      </AnimatePresence>

      <motion.main
        key="content"
        className="flex-1 p-4 sm:p-6 overflow-auto"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="flex items-center justify-between mb-4 sm:hidden">
          <h2 className="text-xl font-semibold dark:text-white">{selectedFolder} Emails</h2>
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
            className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <FiMenu size={24} />
          </button>
        </div>

        <h2 className="hidden sm:block text-xl font-semibold mb-4 dark:text-white">
          {selectedFolder} Emails
        </h2>

        {isCompose ? (
          <EmailPage />
        ) : (
          <div className="w-full overflow-x-auto">
            <InboxTable emails={filteredEmails} />
          </div>
        )}
      </motion.main>
    </div>
  );
};

export default Inbox;