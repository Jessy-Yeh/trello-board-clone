import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import { initialBoard } from "./dummyData/index.js";

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
app.patch("/board", (req, res) => {
  // we expect request body to look like:
  // { title:"mao" }
  console.log(req);

  const newList = { id: uuidv4(), title: req.body.title, cards: [] };

  res.send(newList);
});

// add card to list
app.patch("/board/:listId", (req, res) => {
  const newCard = { id: uuidv4(), title: req.body.title, label: "" };

  res.send(newCard);
});

// delete list from board
app.delete("/board/:listId", (req, res) => {
  res.send(initialBoard);
});

// delete card from list
app.delete("/board/:listId/:cardId", (req, res) => {
  res.send(initialBoard);
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
