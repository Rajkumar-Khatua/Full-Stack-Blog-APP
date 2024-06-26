import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavbarDeskTop from "./components/NavbarDeskTop";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import SingleBlog from "./pages/SingleBlog";
import AllBlogs from "./pages/AllBlogs";
import NavbarMobile from "./components/NavbarMobile";
import Pricing from "./pages/Pricing";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <NavbarDeskTop />
        <Outlet />
        <Footer />
        <NavbarMobile />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/profile", element: <Profile /> },
        { path: "/blog/:id", element: <SingleBlog /> },
        { path: "/blogs", element: <AllBlogs /> },
        { path: "/pricing", element: <Pricing /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
}

export default App;
