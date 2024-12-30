import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../components/ConfirmationModal";
import BaseIcon from "../components/BaseIcons";
import { ICONS } from "../common/constants";

export default function MyNotes() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isopen, setIsopen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState();
  const [backgroundOptions] = useState([
    "#692B17",
    "#7C4A03",
    "#264D3B",
    "#0C625D",
    "#256377",
    "#284255",
    "#6C394F",
    "#4B443A",
  ]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const setBackground = () => {
    setIsopen(true);
  };

  const closeBackgroundcolor = () => {
    setIsopen(false);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSaveNote = () => {
    if (title.trim() !== "" && message.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        title: title,
        message: message,
        backgroundColor: backgroundColor,
      };
      setNotes([...notes, newNote]);
      setTitle("");
      setMessage("");
    }
  };
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setMessage(noteToEdit.message);
      setBackgroundColor(noteToEdit.backgroundColor);
      handleDeleteNote(id);
    }
  };
  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="bg-white min-h-[38rem] rounded-sm px-4 py-4">
      <Link
        to={"/"}
        className="border bg-slate-200 hover:bg-slate-300 py-1 px-2 rounded-md"
      >
        Back
      </Link>
      <div
        className="flex flex-col gap-3 max-w-sm m-auto  py-5 px-4 bg-zinc-100  rounded-md"
        style={{ backgroundColor: backgroundColor }}
      >
        <h1 className="text-2xl font-bold mb-4 text-center ">
          Write Your Note
        </h1>
        <div className="pt-2 relative text-gray-200">
          <input
            className="h-10 w-full border text-black px-2 py-1 pr-16 rounded bg-transparent focus:outline-none"
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            name="search"
            placeholder="Search notes title"
          />
          <button type="button" className="absolute right-0 top-0 mt-4 mr-4">
            <BaseIcon
              iconName={ICONS.Search}
              className="text-zinc-400"
            ></BaseIcon>
          </button>
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-2 py-1 border outline-none text-black rounded bg-transparent"
          />
        </div>
        <div className="mb-1">
          <textarea
            placeholder="Enter note message"
            value={message}
            onChange={handleMessageChange}
            className="w-full p-2 border text-black outline-none rounded bg-transparent"
            rows="2"
          ></textarea>
        </div>
        <div className="flex gap-5 justify-center items-center ">
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setMessage("");
            }}
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-2 rounded"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleSaveNote}
            className="bg-black hover:bg-white hover:text-black text-white font-semibold py-1 px-2 rounded "
          >
            Save Note
          </button>
          <button
            onClick={setBackground}
            className="rounded-full px-2 py-2 hover:bg-slate-300"
          >
            <BaseIcon iconName={ICONS.Brush}></BaseIcon>
          </button>
        </div>
        {isopen && (
          <>
            <div
              // style={{ backgroundColor: backgroundColor }}
              className="flex gap-3 bg-slate-300 flex-wrap border rounded-md px-2 py-4 relative"
            >
              <button
                onClick={closeBackgroundcolor}
                className="p-2 rounded-full  absolute right-0 top-0"
              >
                <BaseIcon
                  iconName={ICONS.Cross}
                  className="text-black"
                ></BaseIcon>
              </button>
              {backgroundOptions.map((color, index) => {
                return (
                  <button
                    key={"colour" + index}
                    onClick={() => handleBackgroundColorChange(color)}
                    style={{ backgroundColor: color }}
                    className="px-4 py-4  rounded-full "
                  ></button>
                );
              })}
            </div>
          </>
        )}
      </div>
      <div className="mt-16 px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            style={{ backgroundColor: note.backgroundColor }}
            className="border flex flex-col gap-5 rounded px-5 py-4 text-slate-200"
          >
            <div>
              <h2 className="font-semibold text-xl">{note.title}</h2>
              <p>{note.message}</p>
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                className="hover:text-slate-300"
                onClick={() => handleEditNote(note.id)}
              >
                <BaseIcon iconName={ICONS.Edit}></BaseIcon>
              </button>
              <ConfirmationModal
                modalText="Are you sure, you want to delete this note permanently?"
                onProceed={() => handleDeleteNote(note.id)}
              >
                <button
                  type="button"
                  className="text-white rounded flex gap-2 hover:text-red-600"
                >
                  <BaseIcon iconName={ICONS.Delete}></BaseIcon>
                </button>
              </ConfirmationModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
