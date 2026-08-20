"use client";
import React, { useState } from "react";
import styles from "../../styles/Faqs.module.scss";
import Link from "next/link";
const AuditFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "What is the difference between internal and external audit?",
      answer:
        "Internal audit focuses on controls, risks and operations. External audit provides independent assurance on financial statements. The appropriate scope depends on your requirement.",
    },
    {
      question: "Can Swenta help prepare for an audit?",
      answer:
        "Yes. The team can review records, reconciliations and supporting documentation before the formal engagement.",
    },
    {
      question: "How long does an audit take?",
      answer:
        "Timing depends on business size, record readiness, reporting period and scope. These are assessed before the engagement begins.",
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
          <h2>Answers about audit & assurance.</h2>
          <Link href={"/"}>
            <p>Need a specific answer? Call +971 52 844 9050.</p>
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

export default AuditFaqs;
