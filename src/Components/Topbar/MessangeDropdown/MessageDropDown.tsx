import React, { useState, useRef, useEffect } from 'react';
import { Mail } from 'lucide-react'; // Optional icons
import profilePic from './profile.jpg'; // replace with your image path

const TopNav: React.FC = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMessageDropdown = () => {
    setIsMessageOpen((prev) => !prev);
  };

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMessageOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-end bg-[#1e2a38] text-white p-4">
    
      <button onClick={toggleMessageDropdown} className="relative mx-2">
        <Mail className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
          2
        </span>
      </button>

    
      {isMessageOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-14 right-4 w-80 bg-[#1b2431] text-white rounded-xl shadow-lg z-50"
        >
          <div className="px-4 py-3 border-b border-gray-700 font-semibold">Message (02)</div>
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Message Item */}
            <div className="flex items-start space-x-4">
              <img src={profilePic} alt="User" className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Craig Baptista</p>
                  <span className="bg-blue-600 text-xs px-2 rounded-full">03</span>
                </div>
                <p className="text-sm text-gray-400 truncate">Lorem ipsum has been th...</p>
              </div>
              <span className="w-3 h-3 bg-green-500 rounded-full mt-1" />
            </div>

            <div className="flex items-start space-x-4">
              <img src={profilePic} alt="User" className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Maren Lipshutz</p>
                  <span className="bg-blue-600 text-xs px-2 rounded-full">01</span>
                </div>
                <p className="text-sm text-gray-400 truncate">Lorem ipsum has been th...</p>
              </div>
              <span className="w-3 h-3 bg-green-500 rounded-full mt-1" />
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-b-xl font-semibold">
            View All Messages
          </button>
        </div>
      )}
    </div>
  );
};

export default TopNav;
