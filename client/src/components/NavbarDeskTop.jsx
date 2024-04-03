import { IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { TfiMoney } from "react-icons/tfi";
import { PiHandshakeThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import UserModel from "./UserModel";
import { useCallback, useState } from "react";

const routes = [
  {
    name: "Home",
    href: "/",
    icon: IoHomeOutline,
    active: Boolean,
  },
  {
    name: "Categories",
    href: "/categories",
    icon: TbCategory2,
    active: Boolean,
  },
  {
    name: "Pricing",
    href: "/pricing",
    icon: TfiMoney,
    active: Boolean,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: PiHandshakeThin,
    active: Boolean,
  },
];

const NavbarDeskTop = () => {
  let user = {
    name: "Jhon Doe",
    profilePic: "/logo.png",
  };
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleOpenUserModel = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const logout = () => {
    setOpen(false);
    console.log("Logout");
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav
        className="
      hidden
      lg:flex
      items-center
      justify-between
      h-16
      bg-white
      text-black
      p-4
      backdrop-filter
      backdrop-blur-lg
      bg-opacity-30
      border-b
    border-gray-200
    "
      >
        <div
          className="
        flex
        items-center
        justify-center
        ml-8
      "
        >
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="
          h-20
          object-cover
          cursor-pointer
          transition
          duration-300
          hover:scale-105
          hover:rotate-12
          hover:saturate-200
          "
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex ml-8 p-2 gap-2">
            {routes.map((route, index) => (
              <li key={index} className="mr-4">
                <Link
                  href={route.href}
                  className={`flex
                items-center
                text-md
                px-1
                hover:text-gray-700
                transition
                duration-300 ${
                  location.pathname === route.href
                    ? "text-gray-700 font-semibold text-md border-b-2 border-black"
                    : "text-black"
                }`}
                >
                  {route.icon && <route.icon className="mr-2" />}
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {user ? (
          <div className="flex items-center gap-5">
            <img
              onClick={handleOpenUserModel}
              src={user.profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full border hover:shadow-md cursor-pointer"
            />
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <button
              className="
        bg-black
        text-white
        px-4
        py-2
        flex
        items-center
        justify-center
        rounded-md
        transition
        duration-300
        hover:bg-purple-900
        cursor-pointer

        "
            >
              Get Started <HiOutlineArrowUpRight className="ml-2" />
            </button>
            <button
              className="
        bg-black
        text-white
        px-4
        py-2
        flex
        items-center
        justify-center
        rounded-md
        transition
        duration-300
        hover:bg-purple-900
        cursor-pointer
        "
            >
              Log In <CiLogin className="ml-2" />
            </button>
          </div>
        )}
      </nav>
      <span id="log"> </span>
      <UserModel isOpen={open} onClose={onClose} user={user} logout={logout} />
    </>
  );
};

export default NavbarDeskTop;
