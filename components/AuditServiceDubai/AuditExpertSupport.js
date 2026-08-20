import React from "react";
import styles from "../../styles/ExpertSupport.module.scss";
const AuditExpertSupport = () => {
  const cardData = [
    {
      num: "/01",
      name: "Internal audit planning and execution",
    },
    {
      num: "/02",
      name: "Financial control assessment",
    },
    {
      num: "/03",
      name: "Process and risk reviews",
    },
    {
      num: "/04",
      name: "Audit readiness support",
    },
    {
      num: "/05",
      name: "Audit readiness support",
    },
    {
      num: "/06",
      name: "Management observations and recommendations",
    },
  ];
  return (
    <div className={styles["expert-support-section"]}>
      <h6>— WHAT’S INCLUDED</h6>
      <div className={styles["heading-para"]}>
        <h2>A focused scope foraudit & assurance.</h2>
        <p>
          The final engagement is tailored after reviewing your current
          position, priorities and reporting or compliance requirements.
        </p>
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
