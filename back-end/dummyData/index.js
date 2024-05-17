import { v4 as uuidv4 } from "uuid";

export const initialBoard = {
  id: uuidv4(),
  title: "test",
  lists: [
    {
      id: uuidv4(),
      title: "to do",
      cards: [
        {
          id: uuidv4(),
          title: "folding clothes",
          label: "important",
        },
        { id: uuidv4(), title: "washing dishes" },
      ],
    },
    {
      id: uuidv4(),
      title: "questions",
      cards: [
        {
          id: uuidv4(),
          title: "Who is bao?",
          label: "important",
        },
        { id: uuidv4(), title: "where is mao?" },
        { id: uuidv4(), title: "rrrrrr" },
      ],
    },
  ],
};
