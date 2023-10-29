import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/send", formData);
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-4 rounded hover:shadow-md dark:shadow-slate-400 w-96 text-end"
      >
        <div className="mb-4">
          <label className="block mb-2 font-bold " htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 text-base leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-end"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold " htmlFor="email">
            Email address
          </label>
          <input
            className="w-full px-3 py-2 text-base leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-end"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <p className="mt-1 text-xs italic text-slate-600 dark:text-slate-200">
            *Your email will not be shared.
          </p>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold " htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 text-base leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-end"
            id="message"
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="px-4 py-2 text-lg font-semibold bg-blue-500 rounded text-slate-50 dark:text-slate-900 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
