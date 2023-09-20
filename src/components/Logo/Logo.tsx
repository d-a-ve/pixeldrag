import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="text-fs-0 font-bold uppercase tracking-wider text-primary-600 sm:text-fs--1">
        pixiedrag
      </h1>
    </Link>
  );
};

export default Logo;
