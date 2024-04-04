const Footer = () => {
  return (
    <div
      className="
      hidden
      lg:flex
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
      <div
        className="
        flex
        flex-col
        gap-4
        items-center
      "
      >
        <span
          className="
        "
        >
          © 2024 All Rights Reserved by @Reader
        </span>
        <span>Made with ❤️ by{" Rajkumar Khatua "}</span>
      </div>
    </div>
  );
};

export default Footer;
