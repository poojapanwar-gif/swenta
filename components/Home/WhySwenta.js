import React from "react";
import styles from "../../styles/WhySwenta.module.scss";
const WhySwenta = () => {
  const numbertext = [
    {
      num: "350+",
      text: "Businesses served",
    },
    {
      num: "6",
      text: "Core Services",
    },
    {
      num: "UAE",
      text: "Local expertise",
    },
  ];
  const numberCard = [
    {
      num: "01",
      title: "Tailored to your business",
      detail: "Support based on your size, sector and operational needs.",
    },
    {
      num: "02",
      title: "Accuracy and compliance",
      detail:
        "Disciplined processes designed to reduce errors and regulatory risk.",
    },
    {
      num: "03",
      title: "Clear, practical advice",
      detail: "Useful reporting and recommendations that help management act.",
    },
    {
      num: "04",
      title: "Scalable support",
      detail: "Flexible services for startups, SMEs and large enterprises.",
    },
  ];
  return (
    <div className={styles["why-swenta-section"]}>
      <div className={styles["why-swenta-left-right-section"]}>
        <div className={styles["why-swenta-left-section"]}>
          <div className={styles["left-content"]}>
            <h6>— WHY SWENTA</h6>
            <h2>Global perspective.Local precision.</h2>
            <p>
              Professional Chartered Accountants combining international
              experience with practical understanding of the UAE business
              environment.
            </p>
          </div>
          <div className={styles["all-number-text"]}>
            {numbertext.map((item, index) => (
              <div className={styles["number-text"]} key={index}>
                <h3>{item.num}</h3>
                <h5>{item.text}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["why-swenta-right-section"]}>
          <div className={styles["all-number-cards"]}>
            {numberCard.map((item, index) => (
              <div className={styles["number-card"]} key={index}>
                <h4>{item.num}</h4>
                <div className={styles["card-details"]}>
                  <h6>{item.title}</h6>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySwenta;
