export type Card = [
  {
    item: string;
    label: string;
  }
];

export type List = {
  title: string;
  cards: Card;
};

export type BoardType = List[];
