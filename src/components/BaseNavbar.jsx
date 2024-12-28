import { Link } from "react-router-dom";

export default function BaseNavbar() {
  const navLinks = [{ name: "Home" }, { name: "About" }, { name: "Settings" }];
  return (
    <div className="bg-black">
      <nav className="p-4">
        <ul className="flex gap-6 justify-center text-white">
          {navLinks?.map((item, index) => {
            return (
              <Link key={"nav items" + index}>
                <li>{item?.name}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
