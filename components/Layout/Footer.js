import React from "react";
import styles from "../../styles/Footer.module.scss";
import Image from "next/image";
import footerlogo from "../../public/images/footerlogo.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles["footer-section"]}>
      <div className={styles["footer-section-content"]}>
        <div className={styles["footer-all-coloums"]}>
          <div className={styles["footer-logo-copyright"]}>
            <div className={styles["footer-logo-box"]}>
              <div className={styles["footer-logo"]}>
                <Link href="/">
                  <Image src={footerlogo} alt="logo" />
                </Link>
              </div>
            </div>
            <p>Copyright © 2025 Swenta Global</p>
          </div>
          <div className={styles["all-links-coloums"]}>
            <div className={styles["contact-us-coloum"]}>
              <h4>Contact</h4>
              <div className={styles["all-contact-details"]}>
                <h5>
                  UK :{" "}
                  <span>
                    <Link
                      href="https://maps.google.com/?q=167-169+Great+Portland+Street+5th+Floor+London+W1W+5PF"
                      target="_blank"
                    >
                      167-169 Great Portland Street, 5th Floor, London, United
                      Kingdom, W1W 5PF
                    </Link>{" "}
                    <Link href="tel:+442476982792">+44 247 698 2792</Link> |{" "}
                    <Link href="tel:+447584092952">+44 758 409 2952</Link>
                  </span>
                </h5>

                <h5>
                  KSA :{" "}
                  <span>
                    <Link
                      href="https://maps.google.com/?q=Building+4398+Al+Mansouriyah+Al+Masani+14714+Riyadh"
                      target="_blank"
                    >
                      Building no. 4398 Al Mansouriyah, Al Masani, 14714, Riyadh
                    </Link>{" "}
                    <Link href="tel:+966509740033">+966 50 974 0033</Link> |{" "}
                    <Link href="tel:+966114422112">0114422112</Link>
                  </span>
                </h5>

                <h5>
                  UAE :{" "}
                  <span>
                    <Link
                      href="https://maps.google.com/?q=1+Central+Trade+Center+1+Sheikh+Zayed+Road+Dubai+UAE"
                      target="_blank"
                    >
                      Office: 1 Central, Trade Center 1, Sheikh Zayed Road,
                      United Arab Emirates
                    </Link>{" "}
                    <Link href="tel:+97142983118">04 2983118</Link> |{" "}
                    <Link href="tel:+971528449050">+971 528 449 050</Link>
                  </span>
                </h5>

                <h5>
                  PAK :{" "}
                  <span>
                    <Link
                      href="https://maps.google.com/?q=Pakland+City+Center+I-8+Markaz+Islamabad"
                      target="_blank"
                    >
                      Office No. 9/10, 3rd Floor, Pakland City Center, I-8
                      Markaz, Islamabad
                    </Link>{" "}
                    <Link href="tel:+92516110529">+92 51 6110529</Link>
                  </span>
                </h5>
              </div>
            </div>
            <div className={styles["other-coloum"]}>
              <h4>Pages</h4>

              <div className={styles["all-other-details"]}>
                <h5>
                  <Link href="/about-us">About us</Link>
                </h5>
                <h5>
                  <Link href="/services">Services</Link>
                </h5>
                <h5>
                  <Link href="/industries">Industries</Link>
                </h5>
                <h5>
                  <Link href="/careers">Careers</Link>
                </h5>
              </div>
            </div>
            <div className={styles["other-coloum"]}>
              <h4>Follow Us</h4>

              <div className={styles["all-other-details"]}>
                <h5>
                  <Link href="https://www.linkedin.com/" target="_blank">
                    Linkedin
                  </Link>
                </h5>
                <h5>
                  <Link href="https://www.facebook.com/" target="_blank">
                    Facebook
                  </Link>
                </h5>
                <h5>
                  <Link href="https://www.instagram.com/" target="_blank">
                    Instagram
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["subscribe-section"]}>
          <div className={styles["newsletter-section"]}>
            <h4>Subscribe to Our Newsletter</h4>
            <p>
              Sign up for our newsletter to stay informed about the latest
              updates, & exclusive offers
            </p>
          </div>
          <div className={styles["link-section"]}>
            <Link href={"/"}>
              <h5>Privacy Policy</h5>
            </Link>
            <Link href={"/"}>
              <h5>Terms & Services</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
