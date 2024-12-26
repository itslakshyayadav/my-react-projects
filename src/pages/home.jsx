import { Outlet } from "react-router-dom";
import BaseNavbar from "../components/BaseNavbar";
BaseNavbar;

export default function Home() {
  return (
    <div>
      <BaseNavbar></BaseNavbar>
      <Outlet></Outlet>
    </div>
  );
}
