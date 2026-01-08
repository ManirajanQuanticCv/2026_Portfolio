"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-20 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-14">

        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-[#1d1d1f] mb-6">
            Let’s Talk 👋
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I’m always open to discussing AI projects,  
            computer vision systems, collaborations,  
            or even a quick tech talk.
          </p>

          <div className="flex items-center gap-6 mt-4">
            <a href="https://github.com/" target="_blank" className="text-gray-600 hover:text-black text-2xl">🐙</a>
            <a href="https://linkedin.com/" target="_blank" className="text-gray-600 hover:text-[#0a66c2] text-2xl">🔗</a>
            <a href="mailto:your-email@gmail.com" className="text-gray-600 hover:text-red-500 text-2xl">📧</a>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        {!submitted ? (
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6"
          >
            {/* Your Web3Forms Key */}
            <input
              type="hidden"
              name="access_key"
              value="624db895-ef0a-475d-87ec-458ee1e24f3a"
            />

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-black focus:outline-none transition"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-black focus:outline-none transition"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-black focus:outline-none transition resize-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
            <h2 className="text-2xl font-bold mb-3 text-green-600">
              Thank you! 🎉
            </h2>
            <p className="text-gray-700">
              Your message has been successfully sent.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
