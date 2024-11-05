import styles from './footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; 2024 - Clément Guillemot </p>
            <ul className={styles.nav}>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </footer>
    )
}