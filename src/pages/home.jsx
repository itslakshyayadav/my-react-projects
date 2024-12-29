// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import BaseIcon from "../components/BaseIcons";

import { ICONS } from "../common/constants";

export default function Home() {
  const mainTabs = [
    { tabName: "ToDo App", icon: ICONS.MyNotes, path: "/my-notes" },
    { tabName: "BMI Calculator App", icon: ICONS.BMI },
    { tabName: "Ecommerce Shopping Cart", icon: ICONS.Cart },
    { tabName: "Math Calculator", icon: ICONS.Calculator },
    { tabName: "Weather App", icon: ICONS.Weather },
    { tabName: "Expense Tracker", icon: ICONS.ExpenseTracker },
    { tabName: "CURD App", icon: ICONS.CURD },
    { tabName: "Authentication App ", icon: ICONS.User },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 gap-9">
        {mainTabs?.map((tab, index) => {
          return (
            <Link to={tab?.path} key={"main tab" + index}>
              <div className="flex flex-col justify-center gap-5 bg-slate-950  hover:shadow-gray-900 text-white  rounded-md px-5  h-44 hover:drop-shadow-2xl hover:bg-slate-800">
                <div className="flex justify-center ">
                  <BaseIcon
                    iconName={tab?.icon}
                    className="h-16 w-16 text-amber-500"
                  ></BaseIcon>
                </div>
                <div className="flex justify-center text-slate-200  font-mono text-2xl">
                  {tab?.tabName}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
