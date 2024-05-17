import { AddCardType } from "../../types";

interface Props {
  card: AddCardType;
}

const Card = ({ card }: Props) => {
  return <li>{card.title}</li>;
};

export default Card;
