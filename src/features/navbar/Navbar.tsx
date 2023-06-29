/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
    const getStatus = (navData:{ isActive:boolean }):string =>
    navData.isActive ? styles.active : styles.text;

return (
        <nav className={styles.navBarTop}>
            <ul className={styles.navBarList}>
                <li className={styles.item}>
                    <NavLink className={getStatus} to="/">Home</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={getStatus} to="/info">About me</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={getStatus} to="/repos">Repositories</NavLink>
                </li>
            </ul>
        </nav>
    );
}

// return (
//     <nav className={styles.navBarList} id="headerActivePage">
//         <NavLink className={styles.text} to="/">Home</NavLink>
//         <NavLink className={styles.text} to="/info">About me</NavLink>
//         <NavLink className={styles.text} to="/repos">Repositorys</NavLink>
//     </nav>
// );
