import React from "react";
import styles from "../../styles/EveryStage.module.scss";
const AmlEveryStage = () => {
  const allstage = [
    "Startups",
    "SMEs",
    "Enterprises",
    "Financial Services",
    "Retail & FMCG"
  ];
  return (
    <div className={styles["every-stage-section"]}>
      <h5>EXPERIENCE FOR BUSINESSES AT EVERY STAGE</h5>
      <div className={styles["all-stages"]}>
        {allstage.map((item, index) => (
          <h6 key={index}>{item}</h6>
        ))}
      </div>
    </div>
  );
};

export default AmlEveryStage;
