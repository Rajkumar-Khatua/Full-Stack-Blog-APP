import Categories from "../components/Categories";
import categories from "../categories";

const HomePage = () => {
  return (
    <div
      className="container
    mx-auto"
    >
      <div className=" flex gap-3 px-4 overflow-x-auto">
        {categories.map((category) => (
          <Categories
            key={category.id}
            name={category.name}
            icon={category.icon && <category.icon size={22} />}
          />
        ))}
      </div>

      {/* Blog Layout left and right */}
      <div
        className="
      flex
      gap-4
      mt-4
      bg-blue
      "
      >
        <div
          className="
        flex-1
        bg-red

          "
        >
          Left
        </div>
        <div
          className="
        flex-1
        bg-green
        hidden
        lg:flex        "
        >
          Right
        </div>
      </div>
    </div>
  );
};

export default HomePage;
