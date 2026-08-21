import React from "react";
import styles from "../../styles/ExpertSupport.module.scss";
const ExpertSupport = () => {
  const cardData = [
    {
      num: "Bookkeeping and transaction processing",
      name: "Sales, purchases, banking, payroll journals and reconciliations maintained on a fixed monthly cycle.",
    },
    {
      num: "Month-end close and reconciliations",
      name: "Bank, receivable, payable and intercompany reconciliations with a documented close checklist.",
    },
    {
      num: "Management reporting",
      name: "Profit and loss, balance sheet, cash-flow summary and the operational KPIs relevant to your sector.",
    },
    {
      num: "Financial statement preparation",
      name: "Year-end statements prepared in a format your auditors and banks expect.",
    },
    {
      num: "Accounts payable and receivable support",
      name: "Supplier and customer ledger management, ageing analysis and collection follow-up.",
    },
    {
      num: "Accounting system setup",
      name: "Chart of accounts design, opening balances and migration to cloud accounting or ERP platforms.",
    },
  ];
  return (
    <div className={styles["expert-support-section"]}>
      <h6>—EXPERT SUPPORT</h6>
      <div className={styles["heading-para"]}>
        <h2>Included in our Accounting engagements</h2>
      </div>
      <div className={styles["all-expert-support-cards"]}>
        {cardData.map((item, index) => (
          <div className={styles["expert-support-card"]} key={index}>
            <h2>{item.num}</h2>
            <div className={styles["card-detail"]}>
              <h5>{item.name}</h5>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertSupport;
