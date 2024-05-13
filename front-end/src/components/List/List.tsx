import { useState } from "react";
import styles from "./List.module.css";

interface Props {
  title: string;
}

const List = ({ title }: Props) => {
  const [cards, setCards] = useState<string[]>([]);
  const [cardValue, setCardValue] = useState("");

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
      <input
        type="text"
        value={cardValue}
        onChange={handleChange}
        onKeyUp={addCard}
      ></input>
    </div>
  );
};

export default List;
