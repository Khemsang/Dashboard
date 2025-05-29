import { ProfileImage } from "../../../image";
import SocialLinks from "../SocialLinks/SocialLinks";


const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden dark:bg-slate-400">
      {/* Cover Image */}
      <div className="relative">
        <img
          src="https://www.shutterstock.com/image-vector/abstract-blue-background-modern-simple-600nw-2474145007.jpg"
          alt="cover"
          className="w-full h-48 object-cover"
        />
        <button className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow">
          <i className="fas fa-camera text-blue-600"></i>
        </button>
      </div>

      {/* Profile Info */}
      <div className="p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={ProfileImage}
            alt="ProfileImage"
            className="w-28 h-28 rounded-full border-4 border-white shadow bg-gray-500"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 p-1 rounded-full">
            <i className="fas fa-camera text-white text-sm"></i>
          </button>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Danish Hebo</h2>
          <p className="text-gray-600 mb-2">Professional UI/UX Designer</p>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quasi dolorum quas voluptatum inventore provident minima dolore minus, veniam vel, illo aliquam maiores aspernatur eum iste? Veniam tempora quisquam laudantium.
            Consectetur doloremque aliquam quibusdam a! Perspiciatis modi sequi vel hic obcaecati quod sapiente accusamus dolorum id magnam necessitatibus aperiam exercitationem, expedita dolor. Necessitatibus quo sed laudantium distinctio delectus repellat quisquam!
            Est accusantium error magnam aspernatur iste sed consequatur distinctio culpa veniam, nostrum nobis similique laborum. Iusto odit labore accusantium, perferendis esse repellat quasi. Dolores dolorum eius qui nesciunt dicta incidunt.
            Debitis nostrum, ipsam ducimus, nihil ab deserunt iste eveniet quas mollitia ex corrupti dolores. Accusantium fuga quas velit deserunt aut nihil quasi, cupiditate, quibusdam, adipisci libero at rem nisi ut!
            Asperiores laudantium cum beatae minus ea, maiores ipsa inventore enim at ipsam velit culpa architecto eum dolorem sequi fugiat voluptatum dolores facere, ullam animi nihil consectetur possimus? Non, officia illum!

          </p>
        </div>

        {/* Socials */}
        <div className="mt-4 sm:mt-0 sm:text-right">
          <p className="text-sm text-gray-600 mb-2">Follow me on</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
