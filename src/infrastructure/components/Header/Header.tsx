import { Link, Outlet } from "react-router-dom";
import "./Header.scss";

export const Header = (): JSX.Element => {
    return (
        <div className="wrapper-main">
            <header>
                <Link to="/" className="header-link">Podcaster</Link>
                <hr />
            </header>
            <Outlet />
        </div>
    );
}