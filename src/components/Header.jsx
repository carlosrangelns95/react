import styles from './header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

function Header() {
    return (

        <header className={styles.header}>
            <img src={igniteLogo} alt="logotivo do ignite" />
        </header>

    );
}

export default Header