import { Outlet } from "react-router-dom";
import BaseNavbar from "./components/BaseNavbar";

function Root() {
  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      <section className="relative">
        <div className="fixed w-full">
          <BaseNavbar></BaseNavbar>
        </div>
      </section>
      <section className="h-screen p-5">
        <div className="container mx-auto mt-24 px-6">
          <Outlet />
        </div>
      </section>
    </div>
  );
}
export default Root;
