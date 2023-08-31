import { Link, Outlet } from "react-router-dom";
import "./Header.scss";

export const Header = (): JSX.Element => {
    return (
        <div className="wrapper-main">
            <header className="header">
                <Link to="/" className="header__link">Podcaster</Link>
                <hr />
            </header>
            <Outlet />
        </div>
    );
}