import { useState } from "react";
import styles from "./List.module.css";
import AddItem from "../AddItem/AddItem";

interface Props {
  title: string;
}

const List = ({ title }: Props) => {
  const [cards, setCards] = useState<string[]>([]);

  const addCard = (newCard: string) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {cards.length > 0
          ? cards.map((card, index) => <li key={index}>{card}</li>)
          : null}
      </ul>

      <AddItem itemType="card" addItem={addCard} />
    </div>
  );
};

export default List;
