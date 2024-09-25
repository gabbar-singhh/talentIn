import React from "react";
import Link from "next/link";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.main}>
      <div className={styles.leftside_nav}>
        <Link href={'/'}>
        <img src="/logo.png" alt="talentin logo" height={60} width={60} />
        </Link>
      </div>
      <div className={styles.rightside_nav}>
        <ul>
          <li className="underline_eff">Find Your Artist</li>
          <li className="underline_eff">Join Community</li>
          <li className="underline_eff">Post Your Requirement</li>
        </ul>
        <Link href={""} className={styles.cta_button}>
          <span>Get Started</span>
          <img src="/icons/arrow_right.svg" height={20} alt="next arrow" />
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;