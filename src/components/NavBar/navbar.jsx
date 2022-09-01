import Style from './style.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul className={Style.navbar}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    )
}

export default Navbar
