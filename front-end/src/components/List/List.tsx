import styles from "./List.module.css";
import AddItem from "../AddItem/AddItem";
import { ListType, BoardType } from "../../types";
import axios from "axios";
import bin from "../../assets/bin.svg";
import Card from "../Card/Card";
import { useState } from "react";

interface Props {
  list: ListType;
  boardData: BoardType;
  setBoardData: React.Dispatch<React.SetStateAction<BoardType | null>>;
}

const List = ({ list, boardData, setBoardData }: Props) => {
  const [isDeleteIconClicked, setIsDeleteIconClicked] = useState(false);

  const addCard = (title: string) => {
    const reqBody = { title };

    axios
      .patch(`http://localhost:3000/board/list/${list.id}/cards`, reqBody)
      .then((res) => {
        const updatedCards = [...list.cards, res.data];
        const newlists = [...boardData.lists];

        newlists.forEach((newlist) => {
          if (newlist.title === list.title) {
            newlist.cards = updatedCards;
          }
        });
        setBoardData({ ...boardData, lists: newlists });
      })
      .catch((error) => console.log(error));
  };

  const deleteList = (list: ListType) => {
    const config = {
      data: {
        id: list.id,
      },
    };
    axios
      .delete(`http://localhost:3000/board/list/${list.id}`, config)
      .then(() => {
        const findListIndex = boardData.lists.findIndex(
          (elm) => elm.id === list.id
        );
        const copyOfOriginalLists = [...boardData.lists];
        copyOfOriginalLists.splice(findListIndex, 1);
        setBoardData({ ...boardData, lists: copyOfOriginalLists });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{list.title}</h2>
          <div
            className={styles.binContainer}
            onClick={() => setIsDeleteIconClicked((prev) => !prev)}
          >
            <img className={styles.bin} src={bin} />
          </div>
        </div>
        <ul className={styles.list}>
          {list.cards.map((card, index) => {
            return (
              <Card
                card={card}
                key={index}
                list={list}
                boardData={boardData}
                setBoardData={setBoardData}
              />
            );
          })}
        </ul>

        <AddItem itemType="card" addItem={addCard} />
      </div>
      {isDeleteIconClicked ? (
        <div className={styles.deletePopup}>
          <p>
            Do you want to delete the <b>{list.title}</b> list?
          </p>
          <div className={styles.optionButtons}>
            <button
              className={styles.yesButton}
              onClick={() => deleteList(list)}
            >
              Yes
            </button>
            <button
              className={styles.noButton}
              onClick={() => setIsDeleteIconClicked(false)}
            >
              No
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default List;
