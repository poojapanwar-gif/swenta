"use client";
import React, { useState } from "react";
import styles from "../../styles/Faqs.module.scss";
import Link from "next/link";
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "Can Swenta take over accounting that is already behind?",
      answer:
        "Yes. We start with a review of the current position, agree a catch-up plan for prior periods and then move you onto a regular monthly close cycle.",
    },
    {
      question: "Which accounting software do you work with?",
      answer:
        "We work with the major cloud accounting platforms and ERP systems used in the UAE. If you have no system in place, we will recommend one that suits your volumes and budget.",
    },
    {
      question: "Will my records be ready for audit and corporate tax?",
      answer:
        "Our close process is designed so that the same records support statutory audit and UAE corporate tax filing without rework.",
    },
    {
      question: "Do you support businesses outside Dubai?",
      answer:
        "Yes. We support clients across the UAE, including free zone and mainland entities in other emirates.",
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
          <h2>Accounting questions we are asked</h2>
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
