import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2024 MyApp. All right recerved</div>
      <div className={styles.social}>
        <a
          href="https://instagram.com/bachurskii_n1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.icon}
            src="/inst.png"
            alt="instagram"
            href="instagram.com/bachurskii"
            width={15}
            height={15}
          />
        </a>

        <Image
          className={styles.icon}
          src="/twitter.png"
          alt="twitter"
          href="twitter.com"
          width={15}
          height={15}
        />

        <a
          href="https://linkedin.com/in/george-bachurskii-0915ab282"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.icon}
            src="/linkedin.png"
            alt="linkedin"
            href="linkedin.com/in/george-bachurskii-0915ab282"
            width={15}
            height={15}
          />
        </a>
        <a
          href="https://github.com/bachurskii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.icon}
            src="/github.png"
            alt="github"
            href="github.com/bachurskii"
            width={15}
            height={15}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
