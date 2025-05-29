import { useState, useEffect } from "react";
import type { Email } from "../../../Constants/emailsData";
import {
  FiFilter,
  FiMoreHorizontal,
  FiRefreshCw,
  FiTrash,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  emails: Email[];
};

const EMAILS_PER_PAGE = 5;

const InboxTable = ({ emails }: Props) => {
  const [currentEmails, setCurrentEmails] = useState<Email[]>(emails);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmails, setFilteredEmails] = useState<Email[]>(emails);

  useEffect(() => {
    setCurrentEmails(emails);
    setSelectedIds([]);
    setCurrentPage(1);
    setSearchTerm("");
    setFilteredEmails(emails);
  }, [emails]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredEmails(currentEmails);
      setCurrentPage(1);
    } else {
      const filtered = currentEmails.filter((email) =>
        email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.id.toString().includes(searchTerm)
      );
      setFilteredEmails(filtered);
      setCurrentPage(1);
    }
  }, [searchTerm, currentEmails]);

  const totalPages = Math.ceil(filteredEmails.length / EMAILS_PER_PAGE);
  const startIndex = (currentPage - 1) * EMAILS_PER_PAGE;
  const pageEmails = filteredEmails.slice(startIndex, startIndex + EMAILS_PER_PAGE);
  const currentPageIds = pageEmails.map((e) => e.id);

  const toggleEmailSelection = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds((prev) => [...new Set([...prev, ...currentPageIds])]);
    } else {
      setSelectedIds((prev) => prev.filter((id) => !currentPageIds.includes(id)));
    }
  };

  const handleDelete = () => {
    setCurrentEmails((prev) => prev.filter((email) => !selectedIds.includes(email.id)));
    setSelectedIds([]);
    if (pageEmails.length === selectedIds.length && currentPage > 1) {
      setCurrentPage((p) => p - 1);
    }
  };

  const handleRefresh = () => {
    setCurrentEmails(emails);
    setSelectedIds([]);
    setCurrentPage(1);
    setSearchTerm("");
  };

  const isAllSelected =
    currentPageIds.length > 0 && currentPageIds.every((id) => selectedIds.includes(id));

  return (
    <div className="bg-white rounded-xl w-full shadow p-5">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex items-center space-x-4 pl-1 ml-3">
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
            className="w-4 h-4 cursor-pointer"
          />
          <motion.button
            onClick={handleDelete}
            disabled={selectedIds.length === 0}
            whileTap={{ scale: selectedIds.length ? 0.9 : 1 }}
            className={`w-5 h-5 ${
              selectedIds.length ? "text-red-500 cursor-pointer" : "text-gray-400 cursor-not-allowed"
            }`}
            title="Delete selected"
          >
            <FiTrash />
          </motion.button>
          <motion.button
            onClick={handleRefresh}
            whileTap={{ scale: 0.9 }}
            className="w-5 h-5 text-gray-500 cursor-pointer"
            title="Refresh"
          >
            <FiRefreshCw />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-5 h-5 text-gray-500 cursor-pointer"
            title="More"
          >
            <FiMoreHorizontal />
          </motion.button>
        </div>

        <div className="relative flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for user, email address, or ID"
            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm.trim() !== "" && (
            <div className="absolute top-full mt-1 max-h-48 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg z-10">
              {filteredEmails.length > 0 ? (
                filteredEmails.slice(0, 5).map((email) => (
                  <div
                    key={email.id}
                    className="px-3 py-2 text-sm cursor-default hover:bg-gray-100"
                  >
                    ID: {email.id} | {email.sender}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-sm text-gray-500">No matches found</div>
              )}
            </div>
          )}
          <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer">
            <FiFilter className="w-5 h-5 text-gray-500" />
          </motion.div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3 font-medium text-gray-600">Sender</th>
              <th className="px-4 py-3 font-medium text-gray-600">Subject</th>
              <th className="px-4 py-3 font-medium text-gray-600 text-right">Date</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {pageEmails.length ? (
                pageEmails.map(({ id, sender, subject, date }, index) => (
                  <motion.tr
                    key={id}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -80 : 80,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: index % 2 === 0 ? -80 : 80,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 1.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => toggleEmailSelection(id)}
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(id)}
                        onChange={(e) => {
                          e.stopPropagation();
                          toggleEmailSelection(id);
                        }}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-800">{sender}</td>
                    <td className="px-4 py-3 text-gray-700">{subject}</td>
                    <td className="px-4 py-3 text-right text-gray-500">{date}</td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-500">
                    No emails to display.
                  </td>
                </tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 text-sm text-gray-600 space-x-2">
        <motion.button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          whileTap={{ scale: currentPage === 1 ? 1 : 0.9 }}
          className={`px-3 py-1 border rounded flex items-center hover:bg-gray-100 ${
            currentPage === 1 ? "cursor-not-allowed text-gray-400" : "cursor-pointer"
          }`}
        >
          <FiChevronLeft className="w-5 h-5" />
        </motion.button>

        <span>
          {startIndex + 1}–{Math.min(startIndex + EMAILS_PER_PAGE, filteredEmails.length)} of {filteredEmails.length}
        </span>

        <motion.button
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          whileTap={{ scale: currentPage === totalPages ? 1 : 0.9 }}
          className={`px-3 py-1 border rounded flex items-center hover:bg-gray-100 ${
            currentPage === totalPages ? "cursor-not-allowed text-gray-400" : "cursor-pointer"
          }`}
        >
          <FiChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default InboxTable;
