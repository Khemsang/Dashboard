import type { User } from "../../../types/user";

interface Props {
  user: User;
}
const ProfileSidebar = ({ user }: Props) => {
  return (
    <div className="w-full bg-white p-6 h-full overflow-y-auto">
      <div className="flex flex-col items-center">
        {/* Profile Avatar */}
        {user.profilePic ? (
          <img 
            src={user.profilePic} 
            alt={user.name} 
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
        ) : (
          <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-3xl">
            {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
        )}

        {/* Profile Name and Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{user.name}</h2>
        <p className="text-sm text-gray-500 mb-6">U/LUX Designer</p>

        {/* Bio */}
        <p className="text-sm text-gray-600 text-center mb-6">
          Lorem ipsum dolor sit amet, consectetur solum adipiscing elit Pellentesque so ferme.
        </p>

        {/* Website Link */}
        <a 
          href="https://www.yoursite.com" 
          className="text-blue-500 text-sm mb-6 hover:underline break-all"
        >
          https://www.yoursite.com
        </a>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
            Follow
          </button>
          <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
            👍
          </button>
          <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
            👍
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;