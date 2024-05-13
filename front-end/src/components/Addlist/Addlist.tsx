import { useState } from "react";

interface Props {
  listTitles: string[];
  setListTitles: React.Dispatch<React.SetStateAction<string[]>>;
}

const Addlist = ({ listTitles, setListTitles }: Props) => {
  const [newlistTitle, setNewListTitle] = useState("");
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);

  const addNewListTitle = () => {
    setListTitles([...listTitles, newlistTitle]);
  };
  return (
    <div className="add-column-container">
      {isAddButtonClicked ? (
        <>
          <input
            value={newlistTitle}
            placeholder="Enter list title..."
            onChange={(e) => setNewListTitle(e.target.value)}
          />
          <button onClick={addNewListTitle}>Add list</button>
          <button
            onClick={() => {
              setIsAddButtonClicked((prev) => !prev);
            }}
          >
            X
          </button>
        </>
      ) : (
        <button onClick={() => setIsAddButtonClicked((prev) => !prev)}>
          + Add another list
        </button>
      )}
    </div>
  );
};

export default Addlist;
