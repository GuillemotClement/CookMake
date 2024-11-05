import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <i className={`fa-solid fa-kitchen-set ${styles.headerLogoPic}`}></i>
                <span className={styles.headerLogoTitle}>CookMake</span>
            </div>
            <ul className={styles.headerNav}>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Mes recettes</a></li>
                <li><a href="#">Ma semaine</a></li>
            </ul>
            <ul className={styles.headerMenuAction}>
                <li><a href="#">Connexion</a></li>
                <li><a href="#">Inscription</a></li>
                <li><a href="#">Profil</a></li>
                <li><a href="#">Deconnexion</a></li>
            </ul>
        </header>
    )
}