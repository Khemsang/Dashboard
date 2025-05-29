import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FaFacebookF className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaTwitter className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <FaLinkedinIn className="w-5 h-5" />,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socials.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
          aria-label={name}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
