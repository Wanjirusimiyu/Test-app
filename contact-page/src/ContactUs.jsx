import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      inquiryType: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-backgroundGreen flex flex-col items-center p-0 font-urbanist">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center mb-8 font-light">Any question or remarks? Just write us a message!</p>
      <main className="flex-grow w-full max-w-7xl mx-auto mt-5 mb-2.5 bg-white p-8 shadow-xl">
        <div className="flex space-x-8">
          <div className="w-1/2 h-screen bg-customGreen text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className='mb-4'>Say something to start a live chat!</p>
            <ul className="mt-40 space-y-10">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-xl text-white" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-xl text-white" />
                <span>tastetribe001@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl text-white" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-40">
              <a href="https://www.facebook.com" className="text-2xl text-white hover:text-blue-800">
                <FaFacebookF />
              </a>
              <a href="https://x.com" className="text-2xl text-white hover:text-blue-300">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" className="text-2xl text-white hover:text-pink-800">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="w-3/4 mx-auto mt-10">
            {isSubmitted ? (
              <div className="text-customGreen font-bold text-center">
                Your message has been sent successfully!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="absolute -top-3.5 left-0 text-black bg-white px-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-black"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute -top-3.5 left-0 text-black bg-white px-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-black"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="absolute -top-3.5 left-0 text-black bg-white px-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-black"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute -top-3.5 left-0 text-black bg-white px-1">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-black"
                      required
                    />
                  </div>
                </div>
                <div>
                  <header className="font-semibold">Select Subject?</header>
                  <div className="flex space-x-4 mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="General Inquiry"
                        checked={formData.inquiryType === 'General Inquiry'}
                        onChange={handleChange}
                        className="form-radio"
                        required
                      />
                      <span className="ml-2">General Inquiry</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="Recipe Inquiry"
                        checked={formData.inquiryType === 'Recipe Inquiry'}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Recipe Inquiry</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="Ingredients Inquiry"
                        checked={formData.inquiryType === 'Ingredients Inquiry'}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Ingredients Inquiry</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="Report"
                        checked={formData.inquiryType === 'Report'}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Report</span>
                    </label>
                  </div>
                </div>
                <div>
                  <header className="font-semibold">Message</header>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message.."
                    className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-black"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="w-1/3 bg-black text-white p-2 rounded hover:bg-customGreen focus:outline-none">Send Message</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
