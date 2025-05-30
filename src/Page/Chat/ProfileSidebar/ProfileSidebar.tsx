import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import type { User } from '../../../types/user';

interface Props {
  user: User;
}

const styles = {
  container: 'bg-white p-6 h-full overflow-y-auto max-w-xs',
  avatarWrapper: 'w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-3xl',
  name: 'text-xl font-semibold text-gray-900 mb-1',
  title: 'text-sm text-gray-500 mb-6',
  bio: 'text-sm text-gray-600 text-center mb-6',
  link: 'text-blue-500 text-sm mb-6 hover:underline break-all',
  socialIcons: 'flex gap-4 text-xl text-gray-600',
  icon: 'transition-colors hover:scale-110',
};

const ProfileSidebar = ({ user }: Props) => {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center">
        {/* Profile Avatar */}
        {user.profilePic ? (
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
        ) : (
          <div className={styles.avatarWrapper}>
            {user.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()}
          </div>
        )}

        {/* Profile Name and Title */}
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.title}>U/LUX Designer</p>

        {/* Bio */}
        <p className={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur solum adipiscing elit Pellentesque so ferme.
        </p>

        {/* Website Link */}
        <a
          href="https://www.yoursite.com"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.yoursite.com
        </a>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} hover:text-pink-500`}
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} hover:text-blue-600`}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} hover:text-blue-700`}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
