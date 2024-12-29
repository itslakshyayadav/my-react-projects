import { Link } from "react-router-dom";

export default function MyNotes() {
  return (
    <div className="bg-white min-h-[38rem] rounded-sm px-4 py-4">
      <Link
        to={"/"}
        className="border bg-slate-200 hover:bg-slate-300 py-1 px-2 rounded-md"
      >
        Back
      </Link>
      <div
        className="flex flex-col gap-3 max-w-sm m-auto  py-5 px-4 bg-zinc-50  rounded-md"
        // style={{ backgroundColor: backgroundColor }}
      >
        <h1 className="text-2xl font-bold mb-4 text-center ">
          Write Your Note
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter note title"
            // value={title}
            // onChange={handleTitleChange}
            className="w-full p-1 border  outline-none text-black rounded bg-transparent"
          />
        </div>
        <div className="mb-1">
          <textarea
            placeholder="Enter note message"
            // value={message}
            // onChange={handleMessageChange}
            className="w-full p-2 border text-black outline-none rounded bg-transparent"
            rows="2"
          ></textarea>
        </div>
        <div className="flex gap-5 justify-center items-center ">
          <button
            type="button"
            // onClick={() => {
            //   setTitle("");
            //   setMessage("");
            // }}
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-2 rounded"
          >
            Clear
          </button>
          <button
            type="button"
            // onClick={handleSaveNote}
            className="bg-black hover:bg-white hover:text-black text-white font-semibold py-1 px-2 rounded "
          >
            Save Note
          </button>
          <button
            // onClick={setBackground}
            className="rounded-full px-2 py-2 hover:bg-neutral-700"
          >
            {/* <HiPaintBrush className="flex h-6 w-6"></HiPaintBrush> */}
          </button>
        </div>
      </div>
    </div>
  );
}
