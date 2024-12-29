import { Outlet } from "react-router-dom";
import BaseNavbar from "./components/BaseNavbar";

function Root() {
  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      <section>
        <BaseNavbar></BaseNavbar>
      </section>
      <section className="h-screen p-5">
        <div className="container mx-auto mt-16 px-6">
          <Outlet />
        </div>
      </section>
    </div>
  );
}
export default Root;
