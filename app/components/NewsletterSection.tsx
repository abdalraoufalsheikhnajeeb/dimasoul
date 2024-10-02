"use client";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";

export default function NewsletterSection() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-10 bg-accentBG py-16">
      <div className="container flex flex-col gap-10 text-center">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-fit items-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              Join To Our Newsletter
            </h2>
            <Image
              src="/images/news_letter_leaf.svg"
              alt="leaf"
              width={0}
              height={0}
              className="absolute -right-10 -top-5 w-1/6"
            />
          </div>
          <p className="max-w-2xl text-lite">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam adipiscing feugiat interdum mattis. Placerat donec risus
            diam sed et. A in ullamcorper ipsum.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border-2 border-primary px-6 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Button
              title="Subscribe Us"
              type="submit"
              extraClassName="absolute bottom-0 right-0 top-0 !py-1"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
