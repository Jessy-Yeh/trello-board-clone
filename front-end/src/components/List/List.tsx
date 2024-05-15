import styles from "./List.module.css";
import AddItem from "../AddItem/AddItem";
import { ListType, BoardType } from "../../types";

interface Props {
  list: ListType;
  boardData: BoardType;
  setBoardData: React.Dispatch<React.SetStateAction<BoardType | null>>;
}

const List = ({ list, boardData, setBoardData }: Props) => {
  const addCard = (title: string) => {
    const newCard = { title, label: "" };
    const updatedCards = [...list.cards, newCard];
    const newlists = [...boardData.lists];

    newlists.forEach((newlist) => {
      if (newlist.title === list.title) {
        newlist.cards = updatedCards;
      }
    });

    setBoardData({ ...boardData, lists: newlists });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{list.title}</h2>
      <ul className={styles.list}>
        {list.cards.map((card, index) => {
          return <li key={index}>{card.title}</li>;
        })}
      </ul>

      <AddItem itemType="card" addItem={addCard} />
    </div>
  );
};

export default List;
