import React from "react";
import styles from "../../styles/AuditWhoSupport.module.scss";
const AmlWhoSupport = () => {
    const alltabs = [
        "Real estate",
        "Precious metals & stones",
        "Professional services",
        "Financial services",
        "Company service providers",
        "Regulated businesses"
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

export default AmlWhoSupport;
