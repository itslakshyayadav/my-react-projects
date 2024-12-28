import { ICONS } from "../common/constants";
import BaseIcon from "../components/BaseIcons";

export default function ProjectTabs() {
  //   const mainTabs = [
  //     { tabName: "ToDo App" },
  //     { tabName: "BMI Calculator App" },
  //     { tabName: "Ecommerce Shopping Cart" },
  //     { tabName: "Math Calculator" },
  //     { tabName: "Weather App" },
  //     { tabName: "Expense Tracker" },
  //     { tabName: "CURD using React and Firebase" },
  //     { tabName: "Authentication app using React and Firebase" },
  //   ];
  return (
    <div className="container m-auto mt-10 py-8">
      <div className="grid grid-cols-4 gap-9">
        <div className="flex flex-col gap-5 bg-slate-900  hover:shadow-gray-900 text-white  rounded-md p-5 w-72 m-auto h-40 hover:drop-shadow-2xl hover:bg-slate-800">
          <div className="flex justify-center ">
            <BaseIcon
              iconName={ICONS.MyNotes}
              className="h-16 w-16 text-amber-500"
            >
              {ICONS.MyNotes}
            </BaseIcon>
          </div>
          <div className="flex justify-center py-1 font-mono text-2xl">
            To-Do App
          </div>
        </div>
        {/* <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div> */}
      </div>
    </div>
  );
}
