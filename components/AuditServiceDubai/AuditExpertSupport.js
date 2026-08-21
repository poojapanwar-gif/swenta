import React from "react";
import styles from "../../styles/ExpertSupport.module.scss";
const AuditExpertSupport = () => {
  const cardData = [
    {
      num: "Audit readiness",
      name: "Preparation of schedules, reconciliations and supporting documentation ahead of fieldwork.",
    },
    {
      num: "Internal audit",
      name: "Risk-based internal audit plans, fieldwork and reporting to management or the board.",
    },
    {
      num: "Internal controls review",
      name: "Assessment of process controls across revenue, procurement, payroll and treasury.",
    },
    {
      num: "Financial statement preparation",
      name: "Statements prepared in the format expected by auditors, banks and shareholders.",
    },
    {
      num: "Audit observation closure",
      name: "Structured remediation plans so findings do not recur in the next cycle.",
    },
    {
      num: "Group and stakeholder reporting",
      name: "Consolidation support and reporting packs for investors and lenders.",
    },
  ];
  return (
    <div className={styles["expert-support-section"]}>
      <h6>— WHAT’S INCLUDED</h6>
      <div className={styles["heading-para"]}>
        <h2>Included in our Audit engagements</h2>
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

export default AuditExpertSupport;
