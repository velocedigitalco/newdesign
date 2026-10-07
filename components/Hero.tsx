import Image from "next/image";
import CtaButton from "./CtaButton";
import HeroVideo from "./HeroVideo";
import styles from "./Hero.module.css";

/** Home artboard (1920 x 1017). Children (the navbar) sit on top of the texture. */
export function HomeStage({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.outer}>
      <div className={styles.stage}>
        <div className={styles.textureClip} aria-hidden="true">
          <div className={styles.texture} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-label="Hero" className={styles.hero}>
      <h1 className={styles.title}>
        <span className={styles.line}>Design That LEAVE</span>
        <span className={`${styles.line} ${styles.lineMiddle}`}>
          <Image
            className={styles.pill}
            src="/images/hero-pill.svg"
            alt=""
            width={852}
            height={124}
            priority
          />
          <span className={styles.lasting}>a LASTING</span>
        </span>
        <span className={styles.line}>mark!</span>
      </h1>

      <p className={styles.lead}>
        Building brands from the ground up with strategy, creativity, and a clear purpose.
      </p>

      <CtaButton href="#contact" label="Let’s Connect" width={189} className={styles.connect} />

      <div className={styles.media}>
        <HeroVideo
          className={styles.video}
          sources={[
            { src: "/video/intro.webm", type: "video/webm" },
            { src: "/video/intro.mp4", type: "video/mp4" },
          ]}
          poster="/images/hero-video-poster.webp"
        />
      </div>
    </section>
  );
}
