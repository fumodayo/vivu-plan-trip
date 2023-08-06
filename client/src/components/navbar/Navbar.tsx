import { Link } from "react-router-dom";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="top-0 sticky w-full bg-white z-10 shadow-sm">
      <div className="py-1 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center ">
              <Link to={"/"}>
                <Logo />
              </Link>
              <Search />
            </div>
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
