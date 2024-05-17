export type CardType = {
  id: string;
  title: string;
  label: string;
};
export type AddCardType = {
  title: string;
  label: string;
};

export type ListType = {
  id: string;
  title: string;
  cards: CardType[];
};

export type AddListType = {
  title: string;
  cards: CardType[];
};

export type BoardType = {
  id: string;
  title: string;
  lists: ListType[];
};

export type CreateBoardType = {
  title: string;
  lists: ListType[];
};
