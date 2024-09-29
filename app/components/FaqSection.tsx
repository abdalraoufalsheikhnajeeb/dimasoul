"use client";
import React, { useState } from "react";
import Image from "next/image";
import { faqData } from "../data";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Keep first item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="sec w-full">
      {/* FAQ Heading */}
      <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row">
        {/* FAQ Content */}
        <div className="grow md:w-1/2">
          <h4 className="text-lg font-bold text-primary">FAQ</h4>
          <h2 className="mt-2 text-3xl font-bold">Your Questions Answered</h2>

          {/* Accordions */}
          <div className="mt-8 space-y-4">
            {faqData.map((faq, index) => (
              <div key={faq.id} className="rounded-lg bg-gray-100 shadow-md">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                >
                  <span
                    className={`text-lg font-medium ${
                      openIndex === index ? "text-primary" : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span>
                    {openIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer Section */}
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/images/test.webp" // Replace with your actual image path
            alt="FAQ Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
