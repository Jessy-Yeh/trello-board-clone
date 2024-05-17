import { CardType, BoardType, ListType } from "../../types";
import bin from "../../assets/bin.svg";
import styles from "./Card.module.css";
import axios from "axios";

interface Props {
  card: CardType;
  list: ListType;
  boardData: BoardType;
  setBoardData: React.Dispatch<React.SetStateAction<BoardType | null>>;
}

const Card = ({ card, list, boardData, setBoardData }: Props) => {
  const deleteCard = (card: CardType) => {
    const config = {
      data: {
        id: card.id,
      },
    };
    axios
      .delete(`http://localhost:3000/board/${list.id}/${card.id}`, config)
      .then(() => {
        const findCardIndex = list.cards.findIndex((elm) => elm.id === list.id);
        const updateListOfCards = [...list.cards];
        updateListOfCards.splice(findCardIndex, 1);

        const newLists = [...boardData.lists];

        newLists.forEach((newlist) => {
          if (newlist.id === list.id) {
            newlist.cards = updateListOfCards;
          }
        });
        setBoardData({ ...boardData, lists: newLists });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.cardGroup}>
      {/* todo: make overflow text go to the next line */}
      <li>{card.title}</li>
      <img className={styles.bin} src={bin} onClick={() => deleteCard(card)} />
    </div>
  );
};

export default Card;
