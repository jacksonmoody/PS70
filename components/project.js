import styles from './Project.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({ name, image, link }) {
    return (
        <div className={styles.project}>
            <Link href={link}>
                <Image className={styles.image} src={image} alt={name} width={500} height={500} style={{ objectFit: "cover" }} />
            </Link>
            <h1 className={styles.text}>{name}</h1>
        </div>
    )
}