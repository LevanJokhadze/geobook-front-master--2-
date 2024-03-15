import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/Login">შესვლა</Link>
        </li>
        <li>
          <Link to="/Register">რეგისტრაცია</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
