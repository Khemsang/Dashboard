// src/components/SocialLinks/SocialLinks.tsx

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.49v-9.294H9.691v-3.622h3.124V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.939 13.939 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.664 2.475 4.917 4.917 0 0 0 2.188 4.096 4.904 4.904 0 0 1-2.228-.616v.06a4.922 4.922 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.923 4.923 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634A9.936 9.936 0 0 0 24 4.59z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.939v5.667H9.352V9h3.414v1.561h.047c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.369 4.267 5.455v6.288zM5.337 7.433a2.07 2.07 0 1 1 .001-4.14 2.07 2.07 0 0 1-.001 4.14zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.208 24 24 23.23 24 22.277V1.723C24 .77 23.208 0 22.225 0z" />
      </svg>
    ),
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
