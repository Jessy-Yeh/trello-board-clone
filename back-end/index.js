const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server listening on PORT:", PORT);
});

const board = {
  title: "test",
  lists: [
    {
      title: "to do",
      cards: [
        {
          title: "folding clothes",
          label: "important",
        },
        { title: "washing dishes" },
      ],
    },
    {
      title: "questions",
      cards: [
        {
          title: "Who is bao?",
          label: "important",
        },
        { title: "where is mao?" },
        { title: "rrrrrr" },
      ],
    },
  ],
};

app.get("/board", (req, res) => {
  res.send(board);
});

// real app would probably need these endpoints:
// app.get("/boards", (req, res) => {
//   res.send(boards);
// });
// app.post("/boards", (req, res) => {
//   res.send(board);
// });
// app.get("/board/:id", (req, res) => {
//   res.send(board);
// });
// app.patch("/board/:id", (req, res) => {
//   res.send(board);
// });
// app.delete("/board/:id", (req, res) => {
//   res.send(board);
// });

// app.post("board", (req, res) => {});

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
