"use client";
import React, { useState } from "react";
import styles from "../../styles/Faqs.module.scss";
import Link from "next/link";
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "Does Swenta work with startups and SMEs?",
      answer:
        "Yes. Swenta supports startups, SMEs and larger enterprises with services scaled to their requirements and stage of growth.",
    },
    {
      question: "Can Swenta support Mainland and Free Zone businesses?",
      answer:
        "Swenta works with UAE businesses across different structures. The consultation helps the team understand your setup before recommending the right scope.",
    },
    {
      question: "What information is needed to get started?",
      answer:
        "This depends on the service. Start with a short consultation, after which the team will share a clear list of documents and next steps.",
    },
    {
      question: "How much do the services cost?",
      answer:
        "Fees depend on business size, transaction volume, current systems and the required scope. Swenta provides a tailored proposal after reviewing your needs.",
    },
    {
      question: "How quickly will the team respond?",
      answer:
        "Submit your enquiry or message Swenta on WhatsApp. A team member will review your request and contact you during business hours.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles["faqs-section"]}>
      <div className={styles["faqs-left-right-section"]}>
        <div className={styles["faqs-left-section"]}>
          <h6>— FREQUENTLY ASKED QUESTIONS</h6>
          <h2>Useful answers before you get started.</h2>
          <Link href={"/"}>
            <p>
              Still have a question? Call +971 52 844 9050 or speak with the
              team on WhatsApp.
            </p>
          </Link>
        </div>
        <div className={styles["faqs-right-section"]}>
          <div className={styles["all-faqs"]}>
            {faqsData.map((item, index) => (
              <div
                className={`${styles["faq-question-answer"]} ${
                  openIndex === index ? styles["active"] : ""
                }`}
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles["question-icon"]}>
                  <h5>{item.question}</h5>
                  {openIndex === index ? (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.30628 11.3358L6.63742 8.00469L3.33114 4.69842L4.72326 3.3063L8.02954 6.61258L11.3358 3.3063L12.7445 4.71499L9.43823 8.02127L12.7445 11.3275L11.3524 12.7197L8.04611 9.41338L4.71497 12.7445L3.30628 11.3358Z"
                        fill="#39766D"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.67578 11.3555V6.64453H0V4.67578H4.67578V0H6.66797V4.67578H11.3438V6.64453H6.66797V11.3555H4.67578Z"
                        fill="#39766D"
                      />
                    </svg>
                  )}
                </div>
                <div className={styles["faq-answer"]}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
