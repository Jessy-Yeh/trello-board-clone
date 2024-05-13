import { useState } from "react";
import styles from "./Addlist.module.css";

interface Props {
  listTitles: string[];
  setListTitles: React.Dispatch<React.SetStateAction<string[]>>;
}

const Addlist = ({ listTitles, setListTitles }: Props) => {
  const [newlistTitle, setNewListTitle] = useState("");
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);

  const addNewListTitle = () => {
    setListTitles([...listTitles, newlistTitle]);
    setNewListTitle("");
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      addNewListTitle();
      setNewListTitle("");
    }
  };
  return (
    <div className={styles.container}>
      {isAddButtonClicked ? (
        <>
          <input
            className={styles.input}
            value={newlistTitle}
            placeholder="Enter list title..."
            onChange={(e) => setNewListTitle(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <div className={styles.actionButtonGroup}>
            <button className={styles.addListButton} onClick={addNewListTitle}>
              Add list
            </button>
            <button
              onClick={() => {
                setIsAddButtonClicked((prev) => !prev);
              }}
            >
              X
            </button>
          </div>
        </>
      ) : (
        <button
          className={styles.addButton}
          onClick={() => setIsAddButtonClicked((prev) => !prev)}
        >
          + Add another list
        </button>
      )}
    </div>
  );
};

export default Addlist;
