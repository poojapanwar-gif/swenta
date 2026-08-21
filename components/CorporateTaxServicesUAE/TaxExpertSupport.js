import React from "react";
import styles from "../../styles/ExpertSupport.module.scss";
const TaxExpertSupport = () => {
  const cardData = [
    {
      num: "Tax registration",
      name: "Corporate tax and VAT registration, including the supporting documentation required.",
    },
    {
      num: "Return preparation and filing",
      name: "Computation, review and submission within statutory deadlines.",
    },
    {
      num: "Tax computation and adjustments",
      name: "Reconciliation from accounting profit to taxable income with documented adjustments.",
    },
    {
      num: "VAT compliance",
      name: "Output and input tax review, treatment of exempt and zero-rated supplies, and periodic return support.",
    },
    {
      num: "Documentation and record keeping",
      name: "Working papers and supporting evidence retained in a review-ready format.",
    },
    {
      num: "Tax advisory",
      name: "Practical guidance on structure, transactions and the tax impact of business decisions.",
    },
  ];
  return (
    <div className={styles["expert-support-section"]}>
      <h6>— WHAT’S INCLUDED</h6>
      <div className={styles["heading-para"]}>
        <h2>Included in our Tax filing engagements</h2>
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

export default TaxExpertSupport;
