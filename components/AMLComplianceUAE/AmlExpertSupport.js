import React from "react";
import styles from "../../styles/ExpertSupport.module.scss";
const AmlExpertSupport = () => {
  const cardData = [
    {
      num: "Business risk assessment",
      name: "Assessment of customer, product, delivery-channel, geography and transaction risk with a documented methodology.",
    },
    {
      num: "Policies, controls and procedures",
      name: "AML/CFT policy, customer acceptance rules and internal procedures written for your actual operations.",
    },
    {
      num: "KYC and customer due diligence",
      name: "Onboarding standards, enhanced due diligence triggers, screening and periodic refresh processes.",
    },
    {
      num: "Transaction monitoring support",
      name: "Monitoring rules, alert handling workflow and escalation criteria.",
    },
    {
      num: "Reporting and record keeping",
      name: "Internal escalation, suspicious activity reporting workflow and retention standards.",
    },
    {
      num: "Training and independent review",
      name: "Role-based staff training and periodic testing of framework effectiveness.",
    },
  ];
  return (
    <div className={styles["expert-support-section"]}>
      <h6>— WHAT’S INCLUDED</h6>
      <div className={styles["heading-para"]}>
        <h2>Included in our AML Compliance engagements</h2>
      </div>
      <div className={styles["all-expert-support-cards"]}>
        {cardData.map((item, index) => (
          <div className={styles["expert-support-card"]} key={index}>
            <h2>{item.num}</h2>
            <div className={styles["card-detail"]}>
              <h5>{item.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmlExpertSupport;
