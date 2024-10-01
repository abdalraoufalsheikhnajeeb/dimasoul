"use client";
import React, { useState } from "react";
export default function NewsletterSection() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // Add the actual submission logic here (e.g., API call)
      alert(`Subscribed with email: ${email}`);
      setEmail(""); // Clear input after submission
    }
  };

  return (
    <section className="w-screen bg-accentBG py-16">
      <div className="container text-center">
        {/* Header Section */}
        <h2 className="mb-4 text-3xl font-bold text-primary">
          Join To Our Newsletter
        </h2>
        <p className="mx-auto mb-8 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet at quam
          adipiscing feugiat interdum mattis. Placerat donec risus diam sed et.
          A in ullamcorper ipsum.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border-2 border-primary px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="hover:bg-primary-dark absolute bottom-0 right-0 top-0 rounded-full bg-primary px-8 py-3 font-semibold text-white"
            >
              Subscribe Us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
