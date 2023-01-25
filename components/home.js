import styles from './Home.module.css';
import Image from 'next/image';
import welcomeImage from '../public/images/wave.gif';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={welcomeImage} alt="Waving Hello" className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.header}>Hi! I'm Jackson </p>
                    <p className={styles.body}>On this website, I'll document the projects that I create in
                        <a href="https://nathanmelenbrink.github.io/ps70/index.html" target="_blank" className={styles.link}> PS70: Introduction to Digital Fabrication </a>
                        here at Harvard.
                    </p>
                    <Link href="/about">
                        <button className={styles.button}>About Me</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}