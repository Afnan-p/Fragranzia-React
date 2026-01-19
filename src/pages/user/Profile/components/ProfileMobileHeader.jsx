const ProfileMobileHeader = ({ onMenuClick }) => {
  return (
    <div className="md:hidden flex items-center justify-between px-4 py-3 bg-black text-white">
      <h1 className="text-lg font-semibold">My Profile</h1>
      <button onClick={onMenuClick} className="text-2xl">
        ☰
      </button>
    </div>
  );
};

export default ProfileMobileHeader;
