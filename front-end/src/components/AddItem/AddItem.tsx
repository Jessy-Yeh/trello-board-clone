import { useState } from "react";
import styles from "./AddItem.module.css";

interface Props {
  addItem: (newItem: string) => void;
  itemType: string;
}

const AddItem = ({ itemType, addItem }: Props) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [itemValue, setItemValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemValue(e.target.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && itemValue.length > 0) {
      updateItem();
    }
  };

  const updateItem = () => {
    addItem(itemValue);
    setItemValue("");
  };

  return (
    <>
      {isButtonActive ? (
        <div>
          <input
            className={styles.addItemInput}
            placeholder={`Enter a title for this ${itemType}...`}
            type="text"
            value={itemValue}
            onChange={handleChange}
            onKeyUp={handleEnterPress}
          ></input>
          <div className={styles.actionButtonGroup}>
            <button
              className={styles.addItemButton}
              onClick={() => {
                if (itemValue.length > 0) {
                  updateItem();
                }
              }}
            >
              Add {itemType}
            </button>
            <button
              onClick={() => {
                setIsButtonActive((prev) => !prev);
              }}
            >
              X
            </button>
          </div>
        </div>
      ) : (
        <button
          className={
            itemType === "list" ? styles.addButtonForList : styles.addButton
          }
          onClick={() => {
            setIsButtonActive((prev) => !prev);
          }}
        >
          + Add a {itemType}
        </button>
      )}
    </>
  );
};

export default AddItem;
