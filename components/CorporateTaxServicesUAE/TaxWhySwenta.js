import React from "react";
import styles from "../../styles/WhySwenta.module.scss";
const TaxWhySwenta = () => {
  const numberCard = [
    {
      num: "01",
      title: "Reduced compliance risk",
    },
    {
      num: "02",
      title: "Clear filing requirements",
    },
    {
      num: "03",
      title: "Better documentation readiness",
    },
    {
      num: "04",
      title: "Practical tax guidance",
    },
  ];
  return (
    <div className={styles["why-swenta-section"]}>
      <div className={styles["why-swenta-left-right-section"]}>
        <div className={styles["why-swenta-left-section"]}>
          <div className={styles["left-content"]}>
            <h6>— business value</h6>
            <h2>Support designed to create practical improvement.</h2>
          </div>
        </div>
        <div className={styles["why-swenta-right-section"]}>
          <div className={styles["all-number-cards"]}>
            {numberCard.map((item, index) => (
              <div className={styles["number-card"]} key={index}>
                <h4>{item.num}</h4>
                <div className={styles["card-details"]}>
                  <h6>{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxWhySwenta;
