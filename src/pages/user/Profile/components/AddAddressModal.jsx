import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddAddressModal = ({ onClose, refresh }) => {
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    });
    const [error, setError] = useState({});


    const validate = () => {
        let newErrors = {};

        if (!form.fullName.trim()) {
            newErrors.fullName = "Name is required";
        }

        if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = "Phone must be 10 digits";
        }

        if (!form.street.trim()) {
            newErrors.street = "Street is required";
        }

        if (!form.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!form.state.trim()) {
            newErrors.state = "State is required";
        }

        if (!form.zip.trim()) {
            newErrors.zip = "Zip is required";
        }

        if (!form.country.trim()) {
            newErrors.country = "Country is required";
        }

        setError(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const token = localStorage.getItem("accessToken");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await axios.post(
                "http://localhost:5000/api/user/address",
                form,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            refresh(); // 🔥 reload address list
            onClose(); // 🔥 close modal
            toast.success("address added  Successful ✅")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl w-80 shadow-lg">

                <h3 className="text-lg font-semibold mb-4">Add Address</h3>

                <form onSubmit={handleSubmit} className="space-y-3">

                    <input name="fullName" placeholder="Full Name" onChange={handleChange} className="border p-2 w-full rounded" />
                    {error.phone && (
                        <p className="text-red-500 text-xs">{error.fullName}</p>
                    )}

                    <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 w-full rounded" />
                    {error.phone && (
                        <p className="text-red-500 text-xs">{error.phone}</p>
                    )}

                    <input name="street" placeholder="Street" onChange={handleChange} className="border p-2 w-full rounded" />
                    {error.phone && (
                        <p className="text-red-500 text-xs">{error.street}</p>
                    )}

                    <input name="city" placeholder="City" onChange={handleChange} className="border p-2 w-full rounded" />
                    {error.phone && (
                        <p className="text-red-500 text-xs">{error.city}</p>
                    )}

                    <input name="state" placeholder="State" onChange={handleChange} className="border p-2 w-full rounded" />
                    {error.phone && (
                        <p className="text-red-500 text-xs">{error.state}</p>
                    )}

                    <input name="zip" placeholder="Zip Code" onChange={handleChange} className="border p-2 w-full rounded" />
                    {error.phone && (
                        <p className="text-red-500 text-xs">{error.zip}</p>
                    )}

                    <input name="country" placeholder="Country" onChange={handleChange} className="border p-2 w-full rounded" />
                    {error.phone && (
                        <p className="text-red-500 text-xs">{error.country}</p>
                    )}

                    <div className="flex gap-2 mt-3">
                        <button className="bg-black text-white px-4 py-2 rounded w-full">
                            Save
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="border px-4 py-2 rounded w-full"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAddressModal;