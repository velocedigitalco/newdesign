"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logo} aria-label="MAX design — home">
          <Image src="/images/logo.svg" alt="" width={157} height={56} priority />
        </Link>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        >
          <ul className={styles.list}>
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.link} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className={styles.cta}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.ctaLabel}>Book a Consultation</span>
          <span className={styles.ctaIcon} aria-hidden="true">
            <svg width="14" height="14" viewBox="1691.1 41 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1703.58 41L1704.54 41.9906L1704.43 42.0986C1701.66 45.0122 1701.76 48.9776 1703.59 50.8714L1702.62 51.8562C1701.11 50.2962 1700.57 47.8741 1701.11 45.4621L1693.05 53.6371L1692.1 52.6476L1700.16 44.4691C1697.8 45.002 1695.44 44.4296 1693.93 42.8684L1694.9 41.8824C1696.75 43.8001 1700.7 43.9228 1703.58 41Z" fill="#fff" />
            </svg>
          </span>
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
