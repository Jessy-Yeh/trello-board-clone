import { useState } from "react";

interface Props {
  title: string;
}

const List = ({ title }: Props) => {
  const [cards, setCards] = useState(["meeting with stakeholders"]);
  const [cardValue, setCardValue] = useState("");

  const handleChange = (e) => {
    setCardValue(e.target.value);
  };

  const addCard = (e) => {
    if (e.key === "Enter") {
      setCards([...cards, cardValue]);
      setCardValue("");
    }
  };
  return (
    <>
      <ul>
        {title}
        {cards.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>
      <input
        type="text"
        value={cardValue}
        onChange={handleChange}
        onKeyUp={addCard}
      ></input>
    </>
  );
};

export default List;
