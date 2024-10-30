import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const images = [
    {
      src: "/img/hero_mehandi.png",
      alt: "lady with mehandi in hand img",
      column: 1,
    },
    {
      src: "/img/hero_chef.png",
      alt: "indian chef img",
      column: 1,
    },
    {
      src: "/img/hero_photographer.png",
      alt: "woman with a tripod & cam",
      column: 2,
    },
    {
      src: "/img/hero_makeup.png",
      alt: "makeup artist img",
      column: 2,
    },
  ];
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftSideHeroSection}>
        <h1>
          book a <span className={styles.briemPrimary}>mehandi</span> artist
        </h1>
        <h1>for your iconic event</h1>

        <p>
          TalentIn connects artists with clients worldwide, making it easy to
          find, <br /> collaborate, and book talent - whether you're a singer,
          dancer or a coach.
        </p>

        <Link href={""} className={`${styles.ctaButton} bubble_eff`}>
          <span>Get Started</span>
          <Image
            className={styles.ctaButtonArrow}
            src={"/icons/arrow_upright_fff.svg"}
            height={24}
            width={24}
            alt="arrow upright icon"
          />
        </Link>
      </div>
      <div className={styles.rightSideHeroSection}>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryGridCol_1}>
            {images
              .filter((image) => image.column === 1)
              .map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
          </div>
          <div className={styles.galleryGridCol_2}>
            {images
              .filter((image) => image.column === 2)
              .map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
