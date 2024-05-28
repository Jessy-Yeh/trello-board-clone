import express, { json } from "express";
import cors from "cors";
import {
  deleteListFromBoard,
  deleteCardFromList,
  addListToBoard,
  addCardToList,
  updateBoard,
  getBoard,
} from "./db/index.js";

const app = express();
app.use(json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server listening on PORT:", PORT);
});

// get board
app.get("/board", async (_, res) => {
  const result = await getBoard();

  if (result.success) {
    res.send(result.data);
  } else {
    res.status(500);
  }
});

// update board (re-order lists)
app.patch("/board", async (req, res) => {
  const result = await updateBoard(req.body);

  if (result.success) {
    res.send(result.data);
  } else {
    res.status(500);
  }
});

// add list to board
app.post("/board/lists", async (req, res) => {
  const result = await addListToBoard(req.body.title);

  if (result.success) {
    res.send(result.data);
  } else {
    res.status(500);
  }
});

// delete list from board
app.delete("/board/list/:listId", async (req, res) => {
  const result = await deleteListFromBoard(req.params.listId);

  if (result.success) {
    res.send(result.data);
  } else {
    res.status(500);
  }
});

// update list (change list title or re-order cards)
app.patch("/board/list/:listId", async (req, res) => {
  const result = await updateList(req.params.listId, req.body);

  if (result.success) {
    res.send(result.data);
  } else {
    res.status(500);
  }
});

// add card to list
app.post("/board/list/:listId/cards", async (req, res) => {
  const result = await addCardToList(req.params.listId, req.body.title);

  if (result.success) {
    res.send(result.data);
  } else {
    res.status(500);
  }
});

// delete card from list
app.delete("/board/list/:listId/card/:cardId", async (req, res) => {
  const result = await deleteCardFromList(req.params.listId, req.params.cardId);

  if (result.success) {
    res.send(result.data);
  } else {
    res.status(500);
  }
});
