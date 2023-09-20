import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingPageLayout from "@components/Layout/LoadingPageLayout";
import Loader from "@components/Loader/Loader";

const GalleryPage = lazy(() => import("@pages/GalleryPage"));
const LoginPage = lazy(() => import("@pages/LoginPage"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));
const SignupPage = lazy(() => import("@pages/SignupPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Outlet />} errorElement={<ErrorPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<GalleryPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
    </>
  )
);

const MyRouteProvider = () => {
  return (
    <Suspense
      fallback={
        <LoadingPageLayout>
          <Loader dimensions="w-8 h-8" />
        </LoadingPageLayout>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default MyRouteProvider;
