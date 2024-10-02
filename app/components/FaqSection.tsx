"use client";

import React, { useState } from "react";
import Image from "next/image";
import { faqData } from "../data";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container w-full">
      <div className="flex flex-col-reverse items-end justify-center gap-8 md:flex-row">
        <div className="grow md:w-1/2">
          <h4 className="text-lg font-bold text-primary">FAQ</h4>
          <h2 className="mt-2 text-3xl font-bold">Your Questions Answered</h2>

          <div className="mt-8 space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className={`${openIndex === index ? "bg-primaryLight" : "bg-customWhite"} rounded-xl shadow-md`}
              >
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
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer Section */}
                <div
                  className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src="/images/contact.webp"
            alt="FAQ Image"
            width={0}
            height={0}
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
