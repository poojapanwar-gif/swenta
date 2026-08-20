import React from "react";
import styles from "../../styles/ExpertSupport.module.scss";
const ExpertSupport = () => {
  const cardData = [
    {
      num: "/01",
      name: "Accounting & Bookkeeping",
      detail:
        "Accurate records, management accounts and reporting that bring financial clarity.",
    },
    {
      num: "/02",
      name: "Corporate Tax & Advisory",
      detail:
        "Practical UAE tax support focused on accuracy, compliance and better decisions.",
    },
    {
      num: "/03",
      name: "Audit & Assurance",
      detail:
        "Independent support that strengthens transparency and financial controls.",
    },
    {
      num: "/04",
      name: "AML Compliance",
      detail:
        "Risk-based frameworks and reviews aligned with UAE regulatory requirements.",
    },
    {
      num: "/05",
      name: "Outsourced CFO",
      detail:
        "Strategic planning, cash-flow oversight and management decision support.",
    },
    {
      num: "/06",
      name: "E-Invoicing",
      detail:
        "Readiness and implementation support for compliant digital invoicing.",
    },
  ];
  return (
    <div className={styles["expert-support-section"]}>
      <h6>—EXPERT SUPPORT</h6>
      <div className={styles["heading-para"]}>
        <h2>One partner for your financial operations.</h2>
        <p>
          Select a service to see campaign-specific messaging and request a
          focused consultation.
        </p>
      </div>
      <div className={styles["all-expert-support-cards"]}>
        {cardData.map((item, index) => (
          <div className={styles["expert-support-card"]} key={index}>
            <h2>{item.num}</h2>
            <div className={styles["card-detail"]}>
              <h5>{item.name}</h5>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertSupport;
