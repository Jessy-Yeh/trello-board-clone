import { useState } from "react";
import styles from "./List.module.css";

interface Props {
  title: string;
}

const List = ({ title }: Props) => {
  const [cards, setCards] = useState<string[]>([]);
  const [cardValue, setCardValue] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardValue(e.target.value);
  };

  const addCard = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setCards([...cards, cardValue]);
      setCardValue("");
    }
  };
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <h2 className={styles.title}>{title}</h2>
        {cards.length > 0
          ? cards.map((card, index) => <li key={index}>{card}</li>)
          : null}
      </ul>

      {isButtonActive ? (
        <div>
          <input
            className={styles.addCardInput}
            placeholder="Enter a title for this card..."
            type="text"
            value={cardValue}
            onChange={handleChange}
            onKeyUp={addCard}
          ></input>
          <div className={styles.actionButtonGroup}>
            <button className={styles.addCardButton}>Add card</button>
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
          className={styles.addButton}
          onClick={() => {
            setIsButtonActive((prev) => !prev);
          }}
        >
          + Add a card
        </button>
      )}
    </div>
  );
};

export default List;
