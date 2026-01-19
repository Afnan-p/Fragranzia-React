import Sidebar from "./Sidebar";

const PageWrapper = ({ title, children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6">{title}</h1>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
