import PageWrapper from "./components/PageWrapper";


const Settings = () => {
  return (
    <PageWrapper title="Settings">
      <div className="bg-white p-6 rounded-xl shadow">
        <p>Admin Profile</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>
    </PageWrapper>
  );
};

export default Settings;
