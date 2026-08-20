import React from "react";
import Link from "next/link";
import styles from '../../styles/Footer.module.scss'
import footerlogo from '../../public/images/footerlogo.svg'
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* =====================================================
            CTA
        ===================================================== */}

        <div className={styles.ctaSection}>
          <div className={styles.blurLeft} aria-hidden="true" />
          <div className={styles.blurRight} aria-hidden="true" />

          <span className={styles.subTitle}>GET STARTED TODAY</span>

          <h2>
            Is Your Business Ready
            <br />
            for Growth with Swenta?
          </h2>

          <button type="button" className={styles.ctaBtn}>
            Get Started
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* =====================================================
            FOOTER CONTENT
        ===================================================== */}

        <div className={styles.footerContent}>
          {/* ---------------------------------------------------
              LOGO
          --------------------------------------------------- */}

          <div className={styles.left}>
            <div className={styles.logo}>
              <Image src={footerlogo} alt="Swenta" />
            </div>

            <p className={styles.copy}>Copyright © 2025 Swenta Global</p>
          </div>

          {/* ---------------------------------------------------
              CONTACT
          --------------------------------------------------- */}

          <div className={styles.contact}>
            <h4>Contact</h4>

            <div className={styles.contactGrid}>
              {/* UK + UAE */}
              <div>
                <p>
                  UK: 167-169 Great Portland Street,
                  <br />
                  5th Floor, London, United Kingdom,
                  <br />
                  W1W 5PF +44 247 698 2792
                  <br />
                  +44 758 409 2952
                </p>

                <p>
                  UAE: Office 1 Central, Trade Center 1,
                  <br />
                  Sheikh Zayed Road, United Arab Emirates.
                  <br />
                  04 2983118 | +971528449050
                </p>
              </div>

              {/* KSA + PAK */}
              <div>
                <p>
                  KSA: Building no. 4398 Al Mansouriyah,
                  <br />
                  Al Masani, 14714, Riyadh +966 50 974
                  <br />
                  0033 | 0114422112
                </p>

                <p>
                  PAK: Office NO. 9/10, 3rd Floor, Pakland
                  <br />
                  City Center, I-8 Markaz, Islamabad
                  <br />
                  +92 51 6110529
                </p>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------
              PAGES
          --------------------------------------------------- */}

          <div className={styles.pages}>
            <h4>Pages</h4>

            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/industries">Industries</Link>
              </li>

              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          {/* ---------------------------------------------------
              FOLLOW US
          --------------------------------------------------- */}

          <div className={styles.social}>
            <h4>Follow Us</h4>

            <ul>
              <li>
                <Link href="#">Linkedin</Link>
              </li>

              <li>
                <Link href="#">Facebook</Link>
              </li>

              <li>
                <Link href="#">Instagram</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* =====================================================
            NEWSLETTER + BOTTOM LINKS
        ===================================================== */}

        <div className={styles.footerBottom}>
          <div className={styles.newsletter}>
            <h4>Subscribe to Our Newsletter</h4>

            <p>
              Sign up for our newsletter to stay informed about the latest
              updates, &amp; exclusive offers
            </p>
          </div>

          <div className={styles.bottom}>
            <Link href="/privacy-policy">Privacy Policy</Link>

            <Link href="/terms-services">Terms &amp; Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
