import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error";
import RootLayout from "./layouts/root";
import Home from "./pages/Home";
import Contact from "./pages/contact/Contact-us";
import Packages from "./pages/packages/index"
import Gallery from "./pages/gallery/index";
import Accommodation from "./pages/accommodation/Accommodation";
import Rental from "./pages/rental/Rental";
import Tickets from "./pages/tickets/Tickets";
import AboutUs from "./pages/about/index";

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
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/accommodation",
        element: <Accommodation />,
      },
      {
        path: "/rental",
        element: <Rental />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
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
