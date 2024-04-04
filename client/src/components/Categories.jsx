const Categories = ({ name, icon }) => {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    h-16
    cursor-pointer
  "
    >
      <div
        className="
        rounded-md
        flex
        items-center
        justify-center
        border
        p-2
        hover:shadow-lg
        transition
        gap-2
        "
      >
        {icon}
        <span
          className="

        "
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default Categories;
