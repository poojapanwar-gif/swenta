import React from "react";
import styles from "../../styles/StartConversation.module.scss";
import Link from "next/link";
const TaxStartConversation = () => {
  return (
    <div className={styles["start-conversation-section"]}>
      <div className={styles["conversation-left-right-section"]}>
        <div className={styles["conversation-left-section"]}>
          <h6>— TALK TO SWENTA</h6>
          <h2>Move forward with greater confidence.</h2>
        </div>
        <div className={styles["conversation-right-section"]}>
          <p>
            Discuss your requirements with a Swenta expert and receive a scope
            tailored to your business.
          </p>
          <button>
            Book A Free Consultant{" "}
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75977 2.06934C8.66667 1.97624 8.55664 1.92969 8.42969 1.92969C8.30273 1.92969 8.19271 1.97624 8.09961 2.06934C8.00651 2.15397 7.95996 2.25977 7.95996 2.38672C7.95996 2.51367 8.00651 2.6237 8.09961 2.7168L11.4258 6.04297H0.457031C0.330078 6.04297 0.222168 6.0874 0.133301 6.17627C0.0444336 6.26514 0 6.37305 0 6.5C0 6.62695 0.0444336 6.73486 0.133301 6.82373C0.222168 6.9126 0.330078 6.95703 0.457031 6.95703H11.4258L8.09961 10.2832C8.00651 10.3678 7.95996 10.4757 7.95996 10.6069C7.95996 10.7381 8.00651 10.846 8.09961 10.9307C8.19271 11.0238 8.30273 11.0703 8.42969 11.0703C8.55664 11.0703 8.66667 11.0238 8.75977 10.9307L12.8604 6.83008C12.9535 6.73698 13 6.62695 13 6.5C13 6.37305 12.9535 6.26302 12.8604 6.16992L8.75977 2.06934Z"
                fill="#152644"
              />
            </svg>
          </button>
          <h5>
            or call{" "}
            <Link href={"/"}>
              <span>+971 52 844 9050</span>
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TaxStartConversation;
