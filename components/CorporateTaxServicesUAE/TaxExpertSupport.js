import React from "react";
import styles from "../../styles/ExpertSupport.module.scss";
const TaxExpertSupport = () => {
  const cardData = [
    {
      num: "/01",
      name: "Corporate tax registration support",
    },
    {
      num: "/02",
      name: "Tax computation and return filing",
    },
    {
      num: "/03",
      name: "VAT registration and filing assistance",
    },
    {
      num: "/04",
      name: "Tax health checks and compliance reviews",
    },
    {
      num: "/05",
      name: "Record and documentation readiness",
    },
    {
      num: "/06",
      name: "Ongoing tax advisory support",
    },
  ];
  return (
    <div className={styles["expert-support-section"]}>
      <h6>— WHAT’S INCLUDED</h6>
      <div className={styles["heading-para"]}>
        <h2>A focused scope for corporate tax & advisory.</h2>
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

export default TaxExpertSupport;
