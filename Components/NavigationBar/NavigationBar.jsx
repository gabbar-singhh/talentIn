import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavigationBar.module.css";
import { Menu, MenuItem } from "@mui/material";

const NavigationBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toogleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
    console.log("you cliked, ", showDropdown);
  };

  return (
    <nav className={styles.main}>
      <div className={styles.leftside_nav}>
        <Link href={"/"}>
          <img
            src="/logo-simple.svg"
            alt="talentin logo"
            height={40}
            width={40}
          />
        </Link>
      </div>
      <div className={styles.rightside_nav}>
        <ul>
          <li className="">
            {/* <li className="" onClick={toogleDropdown}> */}
            Find Your Artist
            <svg
              className={styles.chevron_down}
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 18L24 30L36 18"
                stroke="#fff"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li className="">Join Community</li>
          <li className="">Post Your Requirement</li>
        </ul>

        <div
          className={`${showDropdown && styles.showDropdownMenu} ${
            styles.dropdown_content
          }`}
        >
          <p>Find Your People</p>

          <div className={styles.dropdown_container}>
            <div className={styles.dropdown_row_1}>
              <div className={styles.category}>
                <strong>Wedding</strong>
                <ul>
                  <li>Wedding Planner</li>
                  <li>Videographer</li>
                  <li>Caterer</li>
                  <li>Makeup Artist</li>
                  <li>DJ/Band</li>
                  <li>Decorator</li>
                </ul>
              </div>

              <div className={styles.category}>
                <strong>Birthday</strong>
                <ul>
                  <li>Party Planner</li>
                  <li>Cake Artist</li>
                  <li>Photographer</li>
                  <li>Entertainer</li>
                  <li>Decorator</li>
                </ul>
              </div>

              <div className={styles.category}>
                <strong>Anniversary</strong>
                <ul>
                  <li>Event Coordinator</li>
                  <li>Photographer</li>
                  <li>Caterer</li>
                  <li>Musician/Band</li>
                  <li>Florist</li>
                  <li>Baker</li>
                </ul>
              </div>
            </div>

            <div className={styles.dropdown_row_2}>
              <div className={styles.category}>
                <strong>Festival</strong>
                <ul>
                  <li>Event Organizer</li>
                  <li>Cultural Performers</li>
                  <li>Caterer</li>
                  <li>Lighting Technician</li>
                </ul>
              </div>

              <div className={styles.category}>
                <strong>Sports</strong>
                <ul>
                  <li>Host</li>
                  <li>Coach</li>
                  <li>Referee</li>
                  <li>Medical Staff</li>
                  <li>Event Manager</li>
                  <li>Photographer</li>
                </ul>
              </div>

              <div className={styles.category}>
                <strong>Others</strong>
                <ul>
                  <li>Event Manager</li>
                  <li>Coach</li>
                  <li>Referee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link href={""} className={`${styles.cta_button} bubble_eff`}>
          <span>Sign In</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
