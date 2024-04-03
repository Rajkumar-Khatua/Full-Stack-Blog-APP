import { IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { TfiMoney } from "react-icons/tfi";
import { PiHandshakeThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { useCallback, useState } from "react";
import UserModel from "./UserModel";

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

const NavbarMobile = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleOpenUserModel = useCallback(() => {
    setOpen(!open);
  }, [open]);
  const user = {
    name: "John Doe",
    profilePic: "/logo.png",
  };

  const handleLogout = () => {
    console.log("Logout");
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav
        className="
    fixed
    justify-between
    w-full
    bottom-0
    z-40
    flex
    items-center
    bg-white/90
    backdrop-blur-sm
    border-t-[1px]
    lg:hidden"
      >
        {routes.map((route, index) => (
          <Link
            to={route.href}
            key={index}
            className={`
          flex
          flex-col
          items-center
          justify-center
          font-sm
          w-full
          h-16
          text-black
          text-xs
          transition
          duration-300
          ease-in-out
          transform
          hover:scale-105
                    ${
                      location.pathname === route.href
                        ? "text-purple-700 font-semibold text-lg"
                        : "text-black"
                    }`}
          >
            <route.icon className="text-2xl" />
            <span>{route.name}</span>
          </Link>
        ))}
        {user ? (
          <div
            className="
          flex
          flex-col
          items-center
          justify-center
          w-full
          h-16
          text-black
          text-xs
          font-medium
          transition
          duration-300
          ease-in-out
          transform
          hover:text-purple-500
          active:scale-110
          cursor-pointer
          "
          >
            <img
              onClick={handleOpenUserModel}
              src={user.profilePic}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span>{user.name}</span>
          </div>
        ) : (
          <Link
            to="/login"
            className="
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-16
        text-black
        text-xs
        font-medium
        transition
        duration-300
        ease-in-out
        transform
        hover:text-purple-500
        active:scale-110
        "
          >
            <CiLogin className="text-2xl" />
            <span>Login</span>
          </Link>
        )}
      </nav>
      <UserModel
        isOpen={open}
        onClose={onClose}
        user={user}
        logout={handleLogout}
      />
    </>
  );
};

export default NavbarMobile;
