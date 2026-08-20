import React from "react";
import styles from "../../styles/AuditClient.module.scss";
const AmlClientExperience = () => {
  return (
    <div className={styles["audit-experience-section"]}>
      <div className={styles["audit-experience-left-right-section"]}>
        <div className={styles["audit-experience-left-section"]}>
          <h6>—about the service</h6>
          <h2>Practical support. Clearer outcomes.</h2>
        </div>
        <div className={styles["audit-experience-right-section"]}>
          <div className={styles["right-content"]}>
            <h5>
              Swenta helps UAE businesses move beyond checklist compliance by
              building risk-based AML processes that teams can understand, apply
              and evidence.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmlClientExperience;
