import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error";
import RootLayout from "./layouts/root";
import Home from "./pages/Home";
import Contact from "./pages/contact/Contact-us";
import Packages from "./pages/packages/index"
import Gallery from "./pages/gallery/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Home />
        ),
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <Packages />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      // {
      //   path: "success",
      //   element: (
      //     <RequireAuth fallbackPath={ "/login" }>
      //       <SuccessPage />
      //     </RequireAuth>
      //   ),
      // },
    ],
  },
  // {
  //   path: "login",
  //   element: <AuthPage />,
  // },


]);

export default router;
