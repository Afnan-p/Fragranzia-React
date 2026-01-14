export default function UserProfile() {
  return (
    <div className="max-w-lg">
      <h2 className="text-2xl font-semibold mb-6">User Profile</h2>

      <div className="space-y-4">
        <Input label="Name" value="John Doe" />
        <Input label="Email" value="john@gmail.com" />
        <Input label="Phone" value="+91 9876543210" />

        <div>
          <label className="text-sm text-gray-600">Address</label>
          <textarea
            className="w-full border rounded p-2 mt-1"
            rows="3"
            defaultValue="Kochi, Kerala"
          />
        </div>

        <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:opacity-90">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function Input({ label, value }) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        className="w-full border rounded p-2 mt-1"
        defaultValue={value}
      />
    </div>
  );
}
