import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <div className="">#LIVEINGREECE</div>
        <div className={styles.links}>
          <div>For</div>
          <div>TALENTS</div>
          <div>ENTREPRENEURS</div>
          <div>INVESTORS</div>
          <div className={styles.extraLinks}>
            <div>Innitiatives</div>
            <div>Q&A</div>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.sectionOne}>
          <h1 className={styles.header}>
            Greece <br />
            the <br />
            birthplace <br />
            of ideas
          </h1>
          <Image
            src="/assets/img/hero-img-01.png"
            alt="Vercel Logo"
            className={styles.heroImg}
            width={445}
            height={445}
            priority
          />
          <Image
            src="/assets/img/hero-img-02.png"
            alt="Vercel Logo"
            className={styles.heroImg}
            width={445}
            height={445}
            priority
          />
        </div>
        <div className={styles.sectionOne}>
          <Image
            src="/assets/img/hero-img-03.png"
            alt="Vercel Logo"
            className={styles.heroImg}
            width={445}
            height={445}
            priority
          />
          <div className={styles.sectionMiddle}>
            <p className={styles.paragraph}>
              Right in the cradle of Western civilization and at the heart of
              contemporary innovation, we invite innovative minds,
              ecosystem-driving entrepreneurs and leading investors to explore,
              grow, and invest in a country that blends rich history,
              captivating culture and a promising entrepreneurial ecosystem.
            </p>

            <button className={styles.sectionMiddleButton}>
              Become a citizen{" "}
              <Image
                src="/assets/img/arrowrighttop.png"
                alt="Vercel Logo"
                className={styles.heroImg}
                width={16}
                height={16}
                priority
              />
            </button>
          </div>
          <Image
            src="/assets/img/hero-img-04.png"
            alt="Vercel Logo"
            className={styles.heroImg}
            width={445}
            height={445}
            priority
          />
        </div>
        <div className={styles.sectionTwo}>
          <h1 className={styles.header}>
            Discover innovation <br />
            opportunities
          </h1>
          <div>accordions sections ?</div>
        </div>
      </main>
    </>
  );
}
