// import { Outlet } from "react-router-dom";
import BaseNavbar from "../components/BaseNavbar";
import ProjectTabs from "./project-tabs";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      <section>
        <BaseNavbar></BaseNavbar>
      </section>
      <section className=" h-screen">
        {/* <Outlet> */}
        <ProjectTabs></ProjectTabs>
        {/* </Outlet> */}
      </section>
    </div>
  );
}
