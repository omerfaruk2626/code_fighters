import React, { useState } from "react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ username: "", email: "", message: "" });
  };

  return (
    <>
      <div className="h-[80px]"></div>

      <div
        id="contact"
        className="bg-[rgb(112,158,197)] h-screen flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-lg bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <p className="text-center text-lg font-bold mb-4">
            We would love to hear from you.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows="4"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
            >
              SEND
            </button>
          </form>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full relative animate-fadeIn">
              <p className="text-red-500 font-bold border-b border-white pb-2 mb-4 text-center">
                Your message has been sent successfully.
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Username:</strong> {formData.username}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Message:</strong> {formData.message}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-md text-lg font-semibold shadow-md hover:bg-red-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
