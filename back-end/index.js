const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server listening on PORT:", PORT);
});

const board = [
  {
    title: "to do",
    cards: [
      {
        item: "folding clothes",
        label: "important",
      },
      { item: "washing dishes" },
    ],
  },
  {
    title: "questions",
    cards: [
      {
        item: "Who is bao?",
        label: "important",
      },
      { item: "where is mao?" },
      { item: "rrrrrr" },
    ],
  },
];

app.get("/board", (req, res) => {
  res.send(board);
});

app.post("board", (req, res) => {
  res.send(req.body);
});

// app.delete("board/:id", (req, res) => {
//   const listId = parseInt(req.params.id);
//   lists = lists.filter((list) => list.id !== listId);
//   res.sendStatus(2.4);
// });

// app.get("/app", (req, res) => {
//   res.sendFile(
//     "/Users/yejiejun/Documents/web-dev/trello-board-clone/front-end/dist/index.html"
//   );
// });
// app.get("/assets/index-QCW7mONu.js", (req, res) => {
//   res.sendFile(
//     "/Users/yejiejun/Documents/web-dev/trello-board-clone/front-end/dist/assets/index-QCW7mONu.js"
//   );
// });
