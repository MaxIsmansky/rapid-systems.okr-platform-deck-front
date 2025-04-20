import styles from './Header.module.css'
import React from "react";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logo}>Promesa</div>
                <nav className={styles.nav} aria-label="Primary">
                    <a href="#okr" className={styles.link}>OKR</a>
                    <a href="#agreements" className={styles.link}>Договоренности</a>
                    <a href="#bot" className={styles.link}>AI‑Бот</a>
                    <a href="#gantt" className={styles.link}>Ганта</a>
                </nav>
                <a href="#" className={styles.cta}>Связаться с нами</a>
            </div>
        </header>
    );
}