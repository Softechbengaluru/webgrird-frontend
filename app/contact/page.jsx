'use client';

import { useState } from 'react';

const Contact = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { firstname, lastname, email, phone };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponseMessage(data.message);

      if (res.ok) {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-2">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-2">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone:</label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
      {responseMessage && (
        <p className="mt-4 text-center text-gray-700">{responseMessage}</p>
      )}
    </div>
  );
};

export default Contact;
