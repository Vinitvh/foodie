import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-emerald-900">
      <div className="flex justify-between align-middle py-4 px-24">
        <div className="ml-12">
          <span className="text-3xl text-white font-bold">
            <Link to="/">Foodie</Link>
          </span>
        </div>
        <ul className="flex px-12 text-white font-bold">
          <li>
            <a href="#" className="mx-8">
              Sign Up
            </a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="pl-10">
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
