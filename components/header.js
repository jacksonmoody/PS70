import styles from './Header.module.css';
import Image from 'next/image';

export default function Header({ image, title }) {
    return (
        <div className={styles.header}>
            <Image src={image} alt={title} fill style={{ objectFit: "cover" }}/>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}