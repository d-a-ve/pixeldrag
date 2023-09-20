import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import GalleryPage from "@pages/GalleryPage";
import LoginPage from "@pages/LoginPage";
import ErrorPage from "@pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Outlet />} errorElement={<ErrorPage />}>
        <Route index element={<LoginPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Route>
    </>
  )
);

const MyRouteProvider = () => {
  return <RouterProvider router={router} />;
};

export default MyRouteProvider;
