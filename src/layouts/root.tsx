import { Outlet } from "react-router-dom";
import { Footer } from "../components/common/footer/Footer";
import { Header } from "../components/common/header/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
