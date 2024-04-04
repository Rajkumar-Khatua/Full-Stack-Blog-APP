import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiBookmarkCheck } from "react-icons/ci";

const UserModel = ({ user, logout, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      className="
        border
        w-80
        h-auto
        p-5
        rounded-md
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2
        -translate-y-1/2
        z-50
        animate-fadeIn
    "
    >
      <div
        className="
                    flex
                    justify-end
                    w-full
                    "
      >
        <button
          className="
                            text-xl
                            text-black
                            transition
                            duration-300
                            ease-in-out
                            transform
                            hover:text-rose-500
                            active:scale-110
                            cursor-pointer

                            "
          onClick={onClose}
        >
          <RxCross1 />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full gap-5">
        <Link
          to="/profile"
          className="
        flex
        items-center
        gap-2
        flex-col
        justify-center
        transition
        "
        >
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-16 h-16 rounded-full border hover:shadow-md cursor-pointer"
          />
          <span>
            <h1 className="text-sm font-semibold">{user?.name}</h1>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </span>
        </Link>
        <div
          className="
                    bg-black
                    text-white
                    px-2
                    py-1
                    rounded-full
                    transition
                    duration-300
                    hover:shadow-lg
                    cursor-pointer
                    hover:scale-105
                    hover:bg-white
                    hover:text-black border
                    "
        >
          <Link className="flex items-center" to="/write">
            Write a Story
            <BiPencil className="ml-2" />
          </Link>
        </div>

        <div
          className="
            flex
            items-center
            justify-center
            gap-5
            border-t
            border-gray-200
            w-full
            h-16
        "
        >
          <button
            className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    h-full
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
                    border-r
                    "
            onClick={logout}
          >
            <CiLogout className="text-2xl" />
            Logout
          </button>
          <Link
            to="/saved"
            className="
          flex
          items-center
          justify-center
          gap-2
          w-full
          h-full
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
          border-r"
          >
            <CiBookmarkCheck fontSize={22} className="ml-2" />
            Saved
          </Link>
          <Link
            to="/profile"
            className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    h-full
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
            <CiSettings className="text-2xl" />
            <span>Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserModel;
