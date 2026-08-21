"use client"
import React, { useState } from "react";
import styles from "../../styles/Header.module.scss";
import Link from "next/link";
import headerlogo from "../../public/images/headerlogo.svg";
import Image from "next/image";
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const headerLinks = [
    {
      link: "https://swentaglobal.com/about-us/",
      name: "About us",
    },
    {
      link: "https://swentaglobal.com/products/",
      name: "Products",
    },
    {
      link: "https://swentaglobal.com/services/",
      name: "Services",
    },
    {
      link: "https://swentaglobal.com/careers/",
      name: "Careers",
    },
  ];
  return (
    <div className={styles["header-section"]}>
      <div className={styles["header-content"]}>
        <div className={styles["header-logo-box"]}>
          <div className={styles["header-logo"]}>
            <Link href={"/"}>
              <Image src={headerlogo} alt="img" />
            </Link>
          </div>
        </div>
        <div className={styles["header-all-links"]}>
          {headerLinks.map((item, index) => (
            <Link href={item.link} key={index}>
              <h6>{item.name}</h6>
            </Link>
          ))}
        </div>
        <Link href="https://swentaglobal.com/contact/" target="_blank">
          <button>
            Get in Touch{" "}
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75977 2.06934C8.66667 1.97624 8.55664 1.92969 8.42969 1.92969C8.30273 1.92969 8.19271 1.97624 8.09961 2.06934C8.00651 2.15397 7.95996 2.25977 7.95996 2.38672C7.95996 2.51367 8.00651 2.6237 8.09961 2.7168L11.4258 6.04297H0.457031C0.330078 6.04297 0.222168 6.0874 0.133301 6.17627C0.0444336 6.26514 0 6.37305 0 6.5C0 6.62695 0.0444336 6.73486 0.133301 6.82373C0.222168 6.9126 0.330078 6.95703 0.457031 6.95703H11.4258L8.09961 10.2832C8.00651 10.3678 7.95996 10.4757 7.95996 10.6069C7.95996 10.7381 8.00651 10.846 8.09961 10.9307C8.19271 11.0238 8.30273 11.0703 8.42969 11.0703C8.55664 11.0703 8.66667 11.0238 8.75977 10.9307L12.8604 6.83008C12.9535 6.73698 13 6.62695 13 6.5C13 6.37305 12.9535 6.26302 12.8604 6.16992L8.75977 2.06934Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className={styles["header-content-mobile"]}>
        <div className={styles["header-logo-box"]}>
          <div className={styles["header-logo"]}>
            <Link href={"/"}>
              <Image src={headerlogo} alt="img" />
            </Link>
          </div>
        </div>
        <div className={styles["header-button-menu"]}>
          <Link href="https://swentaglobal.com/contact/" target="_blank">
          <button>
            Get in Touch{" "}
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75977 2.06934C8.66667 1.97624 8.55664 1.92969 8.42969 1.92969C8.30273 1.92969 8.19271 1.97624 8.09961 2.06934C8.00651 2.15397 7.95996 2.25977 7.95996 2.38672C7.95996 2.51367 8.00651 2.6237 8.09961 2.7168L11.4258 6.04297H0.457031C0.330078 6.04297 0.222168 6.0874 0.133301 6.17627C0.0444336 6.26514 0 6.37305 0 6.5C0 6.62695 0.0444336 6.73486 0.133301 6.82373C0.222168 6.9126 0.330078 6.95703 0.457031 6.95703H11.4258L8.09961 10.2832C8.00651 10.3678 7.95996 10.4757 7.95996 10.6069C7.95996 10.7381 8.00651 10.846 8.09961 10.9307C8.19271 11.0238 8.30273 11.0703 8.42969 11.0703C8.55664 11.0703 8.66667 11.0238 8.75977 10.9307L12.8604 6.83008C12.9535 6.73698 13 6.62695 13 6.5C13 6.37305 12.9535 6.26302 12.8604 6.16992L8.75977 2.06934Z"
                fill="white"
              />
            </svg>
          </button>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSidebarOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M22.6562 20.3125H2.34375C2.13655 20.3125 1.93784 20.3948 1.79132 20.5413C1.64481 20.6878 1.5625 20.8865 1.5625 21.0938L1.5625 22.6562C1.5625 22.8635 1.64481 23.0622 1.79132 23.2087C1.93784 23.3552 2.13655 23.4375 2.34375 23.4375H22.6562C22.8635 23.4375 23.0622 23.3552 23.2087 23.2087C23.3552 23.0622 23.4375 22.8635 23.4375 22.6562V21.0938C23.4375 20.8865 23.3552 20.6878 23.2087 20.5413C23.0622 20.3948 22.8635 20.3125 22.6562 20.3125ZM22.6562 14.0625H2.34375C2.13655 14.0625 1.93784 14.1448 1.79132 14.2913C1.64481 14.4378 1.5625 14.6365 1.5625 14.8438L1.5625 16.4062C1.5625 16.6135 1.64481 16.8122 1.79132 16.9587C1.93784 17.1052 2.13655 17.1875 2.34375 17.1875H22.6562C22.8635 17.1875 23.0622 17.1052 23.2087 16.9587C23.3552 16.8122 23.4375 16.6135 23.4375 16.4062V14.8438C23.4375 14.6365 23.3552 14.4378 23.2087 14.2913C23.0622 14.1448 22.8635 14.0625 22.6562 14.0625ZM22.6562 7.8125H2.34375C2.13655 7.8125 1.93784 7.89481 1.79132 8.04132C1.64481 8.18784 1.5625 8.38655 1.5625 8.59375L1.5625 10.1562C1.5625 10.3635 1.64481 10.5622 1.79132 10.7087C1.93784 10.8552 2.13655 10.9375 2.34375 10.9375H22.6562C22.8635 10.9375 23.0622 10.8552 23.2087 10.7087C23.3552 10.5622 23.4375 10.3635 23.4375 10.1562V8.59375C23.4375 8.38655 23.3552 8.18784 23.2087 8.04132C23.0622 7.89481 22.8635 7.8125 22.6562 7.8125ZM22.6562 1.5625H2.34375C2.13655 1.5625 1.93784 1.64481 1.79132 1.79132C1.64481 1.93784 1.5625 2.13655 1.5625 2.34375L1.5625 3.90625C1.5625 4.11345 1.64481 4.31216 1.79132 4.45868C1.93784 4.60519 2.13655 4.6875 2.34375 4.6875H22.6562C22.8635 4.6875 23.0622 4.60519 23.2087 4.45868C23.3552 4.31216 23.4375 4.11345 23.4375 3.90625V2.34375C23.4375 2.13655 23.3552 1.93784 23.2087 1.79132C23.0622 1.64481 22.8635 1.5625 22.6562 1.5625Z"
              fill="black"
            />
          </svg>
          </Link>
        </div>
      </div>
      <div
        className={`${styles["sidebar-overlay"]} ${
          sidebarOpen ? styles["open"] : ""
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <div className={`${styles["sidebar"]} ${sidebarOpen ? styles["open"] : ""}`}>
        <div className={styles["sidebar-header"]}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSidebarOpen(false)}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M3.30628 11.3358L6.63742 8.00469L3.33114 4.69842L4.72326 3.3063L8.02954 6.61258L11.3358 3.3063L12.7445 4.71499L9.43823 8.02127L12.7445 11.3275L11.3524 12.7197L8.04611 9.41338L4.71497 12.7445L3.30628 11.3358Z"
              fill="black"
            />
          </svg>
        </div>
        <div className={styles["sidebar-links"]}>
          {headerLinks.map((item, index) => (
            <Link href={item.link} key={index} onClick={() => setSidebarOpen(false)}>
              <h6>{item.name}</h6>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
