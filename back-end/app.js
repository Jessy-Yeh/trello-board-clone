const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server listening on PORT:", PORT);
});

let lists = [
  {
    id: 1,
    title: "stand up meeting",
  },
  {
    id: 2,
    title: "retro",
  },
];

//get all lists
app.get("/lists", (req, res) => {
  res.json(lists);
});

//add a new list
app.post("lists", (req, res) => {
  const newList = { id: lists.length + 1, title: req.body.title };
  lists.push(newList);
  res.status(201).json(newList);
});

//delete a list
app.delete("lists/:id", (req, res) => {
  const listId = parseInt(req.params.id);
  lists = lists.filter((list) => list.id !== listId);
  res.sendStatus(2.4);
});

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
