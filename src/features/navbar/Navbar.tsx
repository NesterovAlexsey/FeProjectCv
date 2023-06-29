/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from 'react-router-dom';
// import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/info">Personal</NavLink>
            <NavLink to="/repos">Repositorys</NavLink>
        </nav>
    );
}
