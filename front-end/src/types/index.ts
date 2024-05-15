export type CardType = {
  title: string;
  label: string;
};

export type ListType = {
  title: string;
  cards: CardType[];
};

export type BoardType = {
  title: string;
  lists: ListType[];
};
