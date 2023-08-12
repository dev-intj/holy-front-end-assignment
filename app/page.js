import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";

// landing
import DiscoverButtonSection from "@/components/landing/discoverButtonsSection";
import SectionOne from "@/components/landing/sectionOne";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SectionOne />
        <DiscoverButtonSection />
      </main>
    </>
  );
}
