import React from "react";
import styles from "../../styles/AuditWhoSupport.module.scss";
const TaxWhoSupport = () => {
    const alltabs = [
        "Mainland companies",
        "Free Zone companies",
        "Startups & SMEs",
        "Professional services",
        "Trading businesses",
        "International groups"
    ]
  return (
    <div className={styles["audit-support-section"]}>
      <div className={styles["audit-support-left-right-section"]}>
        <div className={styles["audit-support-left-section"]}>
          <h6>—who we support</h6>
          <h2>Experience across different business needs.</h2>
        </div>
        <div className={styles["audit-support-right-section"]}>
          <div className={styles["right-content"]}>
            <div className={styles["all-tabs"]}>
                {
                    alltabs.map((item,index)=>(
                        <div className={styles["tab"]} key={index}>
                            <h5>{item}</h5>
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxWhoSupport;
