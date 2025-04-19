import React, {useState, useEffect, useRef} from "react";
import styles from './MainPage.module.css';

const slides = [
    {
        title: 'Платформа для договоренностей Promesa',
        description: [
            'Инновационная платформа для фиксации и валидации договоренностей.',
            'Promesa поможет структурировать соглашения и связать их со стратегическими целями компании.'
        ],
        image: {key: 'Platform+Overview', size: '500x300'}
    },
    {
        title: 'Проблемы',
        description: [
            'Множество договоренностей остаются в чатах, не структурированы и не связаны со стратегическими целями.',
            'Дезорганизация информации.',
            'Нет четкой связи между договоренностями и ответственными.',
            'Руководители не могут отследить, какие договоренности превратились в задачи и как они влияют на OKR.',
            'При работе над операционными задачами теряется связь текущих договоренностей и OKR.',
            'Сложности в стратегическом планировании.'
        ],
        image: {key: 'Problems', size: '500x300'}
    },
    {
        title: 'Введение и цели проекта',
        description: [
            'Автоматическая фиксация договоренностей из мессенджеров и Talk.',
            'Привязка каждой договоренности к конкретным OKR и ответственным лицам.',
            'Создание единой платформы для ведения OKR и договоренностей.',
            'Визуализация через дашборды и диаграммы.',
            'Валидация договоренностей на соответствие OKR.',
            'Система уведомлений и напоминаний для контроля сроков.'
        ],
        image: {key: 'Goals', size: '500x300'}
    },
    {
        title: 'AI‑Бот для фиксации договоренностей',
        description: 'Бот понимает треды в корпоративных чатах, формулирует договоренности на естественном языке и привязывает их к целям OKR.',
        image: {key: 'Bot', size: '500x300'}
    },
    {
        title: 'Ключевые возможности',
        description: [
            'Фиксация договоренностей из мессенджеров.',
            'Работа с OKR и договоренностями через единый интерфейс.',
            'Система оповещений и напоминаний.',
            'Дашборды и диаграммы для визуализации процесса.',
            'Валидация договоренностей на соответствие OKR.',
            'Интеграция с Jira для автоматического создания задач.'
        ],
        image: {key: 'Features', size: '500x300'}
    }
];


export default function MainPage() {
    const [introOpacity, setIntroOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const fadeOutDistance = window.innerHeight * 0.6
            const opacity = Math.max(0, 1 - scrollTop / fadeOutDistance);
            setIntroOpacity(opacity);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className={styles.main}>
            {/* Intro Fullscreen with fade-out */}
            <section className={styles.intro} style={{opacity: introOpacity}}>
                <h1 className={styles.introTitle}>
                    Promesa: единая платформа для OKR и договоренностей
                </h1>
                <p className={styles.introSubtitle}>
                    Управляйте целями и соглашениями в одном интерфейсе. Привязывайте договоренности к стратегическим
                    OKR и контролируйте выполнение задач.
                </p>
            </section>

            {/* Presentation Slides */}
            {slides.map((slide, idx) => (
                <section
                    key={idx}
                    className={`${styles.slide} ${
                        idx % 2 === 0 ? styles.normal : styles.reverse
                    }`}
                >
                    <div className={styles.text}>
                        <h2 className={styles.title}>{slide.title}</h2>
                        {Array.isArray(slide.description)
                            ? slide.description.map((item, i) => (
                                <p key={i} className={styles.desc}>
                                    {item}
                                </p>
                            ))
                            : <p className={styles.desc}>{slide.description}</p>
                        }
                    </div>
                    <div className={styles.media}>
                        <img
                            src={`https://placehold.co/${slide.image.size}?bg=EFEFEF&fg=AAAAAA&text=${encodeURIComponent(slide.image.key)}`}
                            alt={slide.title}
                            className={styles.image}
                        />
                    </div>
                </section>
            ))}
        </main>
    );
}