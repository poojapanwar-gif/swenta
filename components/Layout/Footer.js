import React from "react";
import styles from "../../styles/Footer.module.scss";
import Image from "next/image";
import footerlogo from "../../public/images/footerlogo.svg";
import Link from "next/link";
const Footer = () => {
  const contactData = [
    {
      country: "UK",
      address: "167-169 Great Portland Street, 5th Floor, London, United Kingdom, W1W 5PF",
      mapLink: "https://maps.google.com/?q=167-169+Great+Portland+Street+5th+Floor+London+W1W+5PF",
      phones: [
        { number: "+44 247 698 2792", link: "tel:+442476982792" },
        { number: "+44 758 409 2952", link: "tel:+447584092952" },
      ],
    },
    {
      country: "KSA",
      address: "Building no. 4398 Al Mansouriyah, Al Masani, 14714, Riyadh",
      mapLink: "https://maps.google.com/?q=Building+4398+Al+Mansouriyah+Al+Masani+14714+Riyadh",
      phones: [
        { number: "+966 50 974 0033", link: "tel:+966509740033" },
        { number: "0114422112", link: "tel:+966114422112" },
      ],
    },
    {
      country: "UAE",
      address: "Office: 1 Central, Trade Center 1, Sheikh Zayed Road, United Arab Emirates",
      mapLink: "https://maps.google.com/?q=1+Central+Trade+Center+1+Sheikh+Zayed+Road+Dubai+UAE",
      phones: [
        { number: "04 2983118", link: "tel:+97142983118" },
        { number: "+971 528 449 050", link: "tel:+971528449050" },
      ],
    },
    {
      country: "PAK",
      address: "Office No. 9/10, 3rd Floor, Pakland City Center, I-8 Markaz, Islamabad",
      mapLink: "https://maps.google.com/?q=Pakland+City+Center+I-8+Markaz+Islamabad",
      phones: [
        { number: "+92 51 6110529", link: "tel:+92516110529" },
      ],
    },
  ];

  const pagesData = [
    { name: "About us", link: "https://swentaglobal.com/about-us/" },
    { name: "Services", link: "https://swentaglobal.com/services/" },
    { name: "Industries", link: "https://swentaglobal.com/services/#" },
    { name: "Careers", link: "https://swentaglobal.com/careers/" },
  ];

  const socialData = [
    { name: "Linkedin", link: "https://www.linkedin.com/company/swentaglobal/" },
    { name: "Facebook", link: "https://www.facebook.com/profile.php?id=61572243486744&is_tour_dismissed" },
    { name: "Instagram", link: "https://www.instagram.com/swentaltd/" },
  ];

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
                {contactData.map((item, index) => (
                  <h5 key={index}>
                    {item.country} :{" "}
                    <span>
                      <Link href={item.mapLink} target="_blank">
                        {item.address}
                      </Link>{" "}
                      {item.phones.map((phone, i) => (
                        <React.Fragment key={i}>
                          <Link href={phone.link}>{phone.number}</Link>
                          {i < item.phones.length - 1 && " | "}
                        </React.Fragment>
                      ))}
                    </span>
                  </h5>
                ))}
              </div>
            </div>
            <div className={styles["other-coloum"]}>
              <h4>Pages</h4>
              <div className={styles["all-other-details"]}>
                {pagesData.map((item, index) => (
                  <h5 key={index}>
                    <Link href={item.link}>{item.name}</Link>
                  </h5>
                ))}
              </div>
            </div>
            <div className={styles["other-coloum"]}>
              <h4>Follow Us</h4>
              <div className={styles["all-other-details"]}>
                {socialData.map((item, index) => (
                  <h5 key={index}>
                    <Link href={item.link} target="_blank">
                      {item.name}
                    </Link>
                  </h5>
                ))}
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
            <Link href={"https://swentaglobal.com/privacy-policy/"}>
              <h5>Privacy Policy</h5>
            </Link>
            <Link href={"https://swentaglobal.com/terms-services/"}>
              <h5>Terms & Services</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
