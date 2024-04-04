import Categories from "../components/Categories";
import categories from "../categories";

const HomePage = () => {
  return (
    <div>
      <div className="flex gap-3 px-4 overflow-auto hover:overflow-x-auto">
        {categories.map((category) => (
          <Categories
            key={category.id}
            name={category.name}
            icon={category.icon && <category.icon size={22} />}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
