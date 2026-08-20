import React from "react";
import styles from "../../styles/ExpertSupport.module.scss";
const AmlExpertSupport = () => {
  const cardData = [
    {
      num: "/01",
      name: "AML/CFT policy and procedure review",
    },
    {
      num: "/02",
      name: "Business risk assessment support",
    },
    {
      num: "/03",
      name: "Customer due diligence framework",
    },
    {
      num: "/04",
      name: "Compliance gap and health checks",
    },
    {
      num: "/05",
      name: "Staff awareness and training support",
    },
    {
      num: "/06",
      name: "Ongoing monitoring and advisory",
    },
  ];
  return (
    <div className={styles["expert-support-section"]}>
      <h6>— WHAT’S INCLUDED</h6>
      <div className={styles["heading-para"]}>
        <h2>A focused scope for aml compliance.</h2>
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

export default AmlExpertSupport;
