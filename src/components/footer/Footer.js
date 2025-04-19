import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} aria-labelledby="footer-heading">
            <div className={styles.linksContainer}>
                <div className={styles.column}>
                    <strong className={styles.heading}>Продукт</strong>
                    <ul className={styles.list}>
                        <li><a href="#okr">OKR</a></li>
                        <li><a href="#agreements">Договоренности</a></li>
                        <li><a href="#bot">AI‑Бот</a></li>
                        <li><a href="#validation">Валидация</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <strong className={styles.heading}>Ресурсы</strong>
                    <ul className={styles.list}>
                        <li><a href="#docs">Документация</a></li>
                        <li><a href="#support">Поддержка</a></li>
                        <li><a href="#blog">Блог</a></li>
                        <li><a href="#api">API</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <strong className={styles.heading}>Компания</strong>
                    <ul className={styles.list}>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#careers">Карьера</a></li>
                        <li><a href="#privacy">Конфиденциальность</a></li>
                        <li><a href="#terms">Условия</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <span>© {currentYear} OKR Platform. Все права защищены.</span>
            </div>
        </footer>
    );
}
