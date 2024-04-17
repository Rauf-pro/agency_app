import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import HomePage from "./routes/homePage/homePage";
import { Layout, RequireAuth } from "./routes/layout/layout";
import Login from "./routes/login/login";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import { profilePageLoader } from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
        { path: "/profileUpdate", element: <ProfileUpdatePage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
