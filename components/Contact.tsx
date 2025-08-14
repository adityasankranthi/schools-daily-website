// components/Contact.tsx
"use client";

import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [result, setResult] = useState("");
  const [phoneError, setPhoneError] = useState(""); // State for the phone validation error

  // Phone number validation function
  const validatePhone = (phone: string) => {
    if (!phone) {
      // It's optional, so no error if it's empty
      setPhoneError("");
      return true;
    }
    // A flexible regex for common US phone number formats
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number.");
      return false;
    }
    setPhoneError(""); // Clear error if valid
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate phone number as the user types
    if (name === 'phone') {
      validatePhone(value);
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Prevent submission if the phone number is entered but invalid
    if (!validatePhone(formData.phone)) {
      return;
    }

    setResult("Sending....");
    const formElement = event.currentTarget;
    const submissionData = new FormData(formElement);
    submissionData.append("access_key", "7501ce31-2f45-4917-9657-5b01a864752a"); // <-- Use your actual key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submissionData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      formElement.reset();
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Determine input ring color based on validation error
  const phoneInputRingClass = phoneError
    ? "ring-red-500 focus:ring-red-500"
    : "ring-white/10 focus:ring-indigo-500";

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Let's Connect</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Have a partnership idea or want to pilot one of our products at your campus? We’d love to hear from you.
          </p>
        </div>
        <form onSubmit={onSubmit} className="max-w-xl mx-auto mt-16">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            {/* ... other form fields remain the same ... */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-white">First name</label>
              <div className="mt-2.5">
                <input required type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"/>
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-white">Last name</label>
              <div className="mt-2.5">
                <input required type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
              <div className="mt-2.5">
                <input required type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-white">
                Phone number <span className="text-gray-400">(Optional)</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 ${phoneInputRingClass}`}
                />
              </div>
              {phoneError && <p className="mt-2 text-sm text-red-500">{phoneError}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">University / Company</label>
              <div className="mt-2.5">
                <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500"/>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
              <div className="mt-2.5">
                <textarea required name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Send Message
            </button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400 h-5">{result}</div>
        </form>
      </div>
    </section>
  );
};