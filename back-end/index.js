import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import { initialBoard } from "./dummyData/index.js";
import {
  deleteListFromBoard,
  deleteCardFromList,
  addListToBoard,
  addCardToList,
} from "./db/index.js";

const app = express();
app.use(json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server listening on PORT:", PORT);
});

// get board
app.get("/board", (req, res) => {
  res.send(initialBoard);
});

// add list to board
app.patch("/board", async (req, res) => {
  const newList = { id: uuidv4(), title: req.body.title, cards: [] };
  const result = await addListToBoard(newList);

  if (result.success) {
    res.send(newList);
  } else {
    res.status(500);
  }
});

// add card to list
app.patch("/board/:listId", async (req, res) => {
  const newCard = { id: uuidv4(), title: req.body.title, label: "" };
  const result = await addCardToList(req.params.listId, newCard);

  if (result.success) {
    res.send(newCard);
  } else {
    res.status(500);
  }
});

// delete list from board
app.delete("/board/:listId", async (req, res) => {
  const result = await deleteListFromBoard(req.params.listId);

  if (result.success) {
    const response = {
      id: req.params.cardId,
    };

    res.send(response);
  } else {
    res.status(500);
  }
});

// delete card from list
app.delete("/board/:listId/:cardId", async (req, res) => {
  const result = await deleteCardFromList(req.params.listId, req.params.cardId);

  if (result.success) {
    const response = {
      id: req.params.cardId,
    };

    console.log(response);
    res.send(response);
  } else {
    res.status(500);
  }
});

// // if we want multiple boards:
// // get all boards
// app.get("/boards", (req, res) => {
//   res.send(boards);
// });
// // create new board
// app.post("/boards", (req, res) => {
//   res.send(boards);
// });
