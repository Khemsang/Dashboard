
import SocialLinks from "./SocialLinks/SocialLinks";
import { useUser } from "./ProfileContext/ProfileContext";
import React, { type ChangeEvent } from "react";

// ✅ Properly typed SVG icon component
const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const ProfilePage: React.FC = () => {
  const { currentUser } = useUser();

  // ✅ Typed refs
  const coverInputRef = React.useRef<HTMLInputElement>(null);
  const profileInputRef = React.useRef<HTMLInputElement>(null);

  const handleCoverClick = () => coverInputRef.current?.click();
  const handleProfileClick = () => profileInputRef.current?.click();

  // ✅ Typed event handlers
  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) console.log("Selected cover image:", file);
  };

  const handleProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) console.log("Selected profile image:", file);
  };

  return (
    <div className="bg-white dark:bg-slate-400 rounded-lg shadow max-w-4xl mx-auto p-6 overflow-hidden">
      <div className="relative mb-20">
        <img
          src="https://www.shutterstock.com/image-vector/abstract-blue-background-modern-simple-600nw-2474145007.jpg"
          alt="cover"
          className="w-full h-48 object-cover rounded"
        />

        <input
          type="file"
          accept="image/*"
          ref={coverInputRef}
          className="hidden"
          onChange={handleCoverChange}
        />
        <button
          onClick={handleCoverClick}
          className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          aria-label="Upload cover image"
        >
          <CameraIcon className="w-5 h-5 text-blue-600" />
        </button>

        <div className="absolute -bottom-14 left-6">
          <div className="relative">
            <img
              src={currentUser.profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow bg-gray-500"
            />
            <input
              type="file"
              accept="image/*"
              ref={profileInputRef}
              className="hidden"
              onChange={handleProfileChange}
            />
            <button
              onClick={handleProfileClick}
              className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
              aria-label="Upload profile image"
            >
              <CameraIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{currentUser.name}</h2>
          <p className="text-gray-600 mb-2">{currentUser.role}</p>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            quasi dolorum quas voluptatum inventore provident minima dolore minus,
            veniam vel, illo aliquam maiores aspernatur eum iste? Veniam tempora
            quisquam laudantium.
          </p>
        </div>

        <div className="mt-4 sm:mt-0 sm:text-right">
          <p className="text-sm text-gray-600 mb-2">Follow me on</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
