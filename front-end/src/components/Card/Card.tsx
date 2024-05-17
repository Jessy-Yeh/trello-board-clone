import { AddCardType } from "../../types";
import bin from "../../assets/bin.svg";
import styles from "./Card.module.css";

interface Props {
  card: AddCardType;
}

const Card = ({ card }: Props) => {
  return (
    <div className={styles.cardGroup}>
      {/* todo: make overflow text go to the next line */}
      <li>{card.title}</li>
      <img className={styles.bin} src={bin} />
    </div>
  );
};

export default Card;
