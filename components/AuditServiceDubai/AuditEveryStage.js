import React from "react";
import styles from "../../styles/EveryStage.module.scss";
const AuditEveryStage = () => {
  const allstage = [
    "Startups",
    "SMEs",
    "Enterprises",
    "UAE Business ",
  ];
  return (
    <div className={styles["every-stage-section"]}>
      <h5>PROFESSIONAL SUPPORT BUILT AROUND YOUR BUSINESS</h5>
      <div className={styles["all-stages"]}>
        {allstage.map((item, index) => (
          <h6 key={index}>{item}</h6>
        ))}
      </div>
    </div>
  );
};

export default AuditEveryStage;
