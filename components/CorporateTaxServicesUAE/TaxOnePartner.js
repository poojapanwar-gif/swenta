import React from "react";
import styles from "../../styles/OnePartner.module.scss";
const TaxOnePartner = () => {
  const cardData = [
    {
      num: "01",
      title: "Share your requirement",
      detail: "Tell us about your current setup, priorities  and timeline.",
    },
    {
      num: "02",
      title: "Review with an expert",
      detail: "Swenta assesses the information and identifies the right scope.",
    },
    {
      num: "03",
      title: "Receive a tailored plan",
      detail: "Get clear deliverables, responsibilities and next steps.",
    },
  ];
  return (
    <div className={styles["one-partner-section"]}>
      <h6>—SIMPLE PROCESS</h6>
      <h2>From first conversation to clear next steps.</h2>
      <div className={styles["all-one-partner-cards"]}>
        {cardData.map((item, index) => (
          <React.Fragment key={index}>
            {index !== 0 && <div className={styles.divider}></div>}

            <div className={styles["one-partner-card"]}>
              <div className={styles["number-circle-box"]}>
                <div className={styles["number-circle"]}>
                  <h4>{item.num}</h4>
                </div>
              </div>

              <div className={styles["card-detail"]}>
                <h5>{item.title}</h5>
                <p>{item.detail}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaxOnePartner;
