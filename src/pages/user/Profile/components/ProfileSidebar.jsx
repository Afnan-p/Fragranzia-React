const ProfileSidebar = ({
  mobile = false,
  onClose,
  activeTab,
  setActiveTab,
}) => {
  const menuItems = [
    { id: "profile", label: "Profile" },
    { id: "orders", label: "Orders" },
    { id: "wishlist", label: "Wishlist" },
    { id: "shopping", label: "Shopping Activity" },
    { id: "security", label: "Security" },
  ];

  const handleClick = (id) => {
    setActiveTab(id);
    if (mobile && onClose) onClose();
  };

  const content = (
    <div className="bg-black text-white p-6 w-64 h-full">
      <h2 className="text-xl font-semibold mb-6">My Account</h2>

      <ul className="space-y-3 text-sm">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`cursor-pointer px-3 py-2 rounded
              ${
                activeTab === item.id
                  ? "bg-white text-black font-medium"
                  : "hover:bg-gray-800"
              }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );

  if (mobile) {
    return (
      <div className="fixed inset-0 z-50 flex">
        {content}
        <div className="flex-1 bg-black/40" onClick={onClose} />
      </div>
    );
  }

  return <aside className="hidden md:block min-h-screen">{content}</aside>;
};

export default ProfileSidebar;
