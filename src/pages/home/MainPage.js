import React, {useState, useEffect, useRef} from "react";
import styles from './MainPage.module.css';

const slides = [
    {
        id: 'slide-0',
        title: 'Единая платформа ведения OKR',
        description: [
            'Инновационная платформа для фиксации OKR и соглашений',
            'Обеспечивает связь OKR на всех уровнях вашей организации',
            'Promesa связывает соглашения со стратегическими целями компании'
        ],
        image: { link: '/static/images/platform_overview.png', size: '500x300' }
    },
    {
        id: 'slide-1',
        title: 'AI-Валидация договоренностей',
        description: [
            'Каждая договоренность проверяется на соответствие OKR',
            'Помогает убрать непрофильные активности'
        ],
        image: { link: 'https://cdn.example.com/images/ai_validation.png', size: '500x300' }
    },
    {
        id: 'slide-2',
        title: 'AI-Бот фиксации',
        description: 'Бот разбирает треды чата, формирует договоренности и привязывает их к целям OKR.',
        image: { link: '/slides/bot-response.png', size: '500x300' }
    },
    {
        id: 'slide-3',
        title: 'Дашборды и диаграммы',
        description: [
            'Все OKR отражаются на диаграмме Ганта',
            'Визуализированы зависимости и ход работ'
        ],
        image: { link: '/static/images/dashboards.png', size: '500x300' }
    },
    {
        id: 'slide-4',
        title: 'Система оповещений',
        description: [
            'Напоминания о сроках выполнения',
            'Ответственные получают уведомление при приближении дедлайна'
        ],
        image: { link: 'https://cdn.example.com/images/notifications.png', size: '500x300' }
    },
    {
        id: 'slide-5',
        title: 'Ключевые возможности',
        description: [
            'Фиксация договоренностей из мессенджеров',
            'Единый интерфейс для OKR и договоренностей',
            'Система напоминаний',
            'Дашборды и диаграммы',
            'Валидация договоренностей',
            'Интеграция с Jira'
        ],
        image: { link: '/static/images/features.png', size: '500x300' }
    }
];

export default function MainPage() {
    const [introOpacity, setIntroOpacity] = useState(1);
    const slideRefs = useRef([]);

    // fade‑out intro
    useEffect(() => {
        const onScroll = () => {
            const opacity = Math.max(0, 1 - (window.scrollY / window.innerHeight) * 2);
            setIntroOpacity(opacity);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // slide appear
    useEffect(() => {
        const io = new IntersectionObserver(
            entries => entries.forEach(e => {
                e.target.classList.toggle(styles.appear, e.isIntersecting);
            }),
            { threshold: 0.4 }
        );
        slideRefs.current.forEach(el => el && io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <main className={styles.main}>
            <section className={styles.intro} style={{ opacity: introOpacity }}>
                <h1 className={styles.introTitle}>Promesa: единая платформа для OKR и договоренностей</h1>
                <p className={styles.introSubtitle}>Управляйте целями и соглашениями в одном интерфейсе. Привязывайте договоренности к стратегическим OKR и контролируйте выполнение задач.</p>
            </section>

            {slides.map((slide, idx) => (
                <section
                    id={slide.id}
                    key={slide.id}
                    ref={el => (slideRefs.current[idx] = el)}
                    className={`${styles.slide} ${idx % 2 === 0 ? styles.normal : styles.reverse}`}
                >
                    <div className={styles.text}>
                        <h2 className={styles.title}>{slide.title}</h2>
                        {(Array.isArray(slide.description) ? slide.description : [slide.description]).map((d, i) => (
                            <p key={i} className={styles.desc}>{d}</p>
                        ))}
                    </div>
                    <div className={styles.media}>
                        <img
                            src={slide.image.link}
                            alt={slide.title}
                            className={styles.image}
                            onError={e => {
                                e.currentTarget.src = `https://placehold.co/${slide.image.size}?bg=EFEFEF&fg=AAAAAA&text=${encodeURIComponent(slide.title)}`;
                            }}
                        />
                    </div>
                </section>
            ))}
        </main>
    );
}