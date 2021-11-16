import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <h1>React Simple Counter</h1>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        </>
    )
}

export default Header
