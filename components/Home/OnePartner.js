import React from "react";
import styles from "../../styles/OnePartner.module.scss";
const OnePartner = () => {
  const cardData = [
    {
      num: "01",
      title: "Share your requirement",
      detail: "Complete the short form or message the team on WhatsApp.",
    },
    {
      num: "02",
      title: "Speak with an expert",
      detail: "Swenta reviews your priorities, setup and compliance needs.",
    },
    {
      num: "03",
      title: "Receive a tailored scope",
      detail: "Get practical next steps designed for your business.",
    },
  ];
  return (
    <div className={styles["one-partner-section"]}>
      <h6>—EXPERT SUPPORT</h6>
      <h2>One partner for your financial operations.</h2>
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

export default OnePartner;
