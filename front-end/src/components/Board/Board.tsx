import { useEffect, useState } from "react";
import Addlist from "../Addlist/Addlist";
import List from "../List/List";
import axios from "axios";
import { BoardType } from "../../types";

const Board = () => {
  const [listTitles, setListTitles] = useState<string[]>([]);
  const [boardData, setBoardData] = useState<BoardType>([]);

  useEffect(() => {
    axios.get<BoardType>("http://localhost:3000/board").then((response) => {
      console.log(response.data);
      setBoardData(response.data);
    });
  }, []);

  return (
    <div className="board">
      <div className="lists">
        {boardData.map((list, index) => (
          <List title={list.title} key={index} list={list} />
        ))}
        {/* {listTitles.map((listTitle, index) => (
          <List title={listTitle} key={index} />
        ))} */}
      </div>
      <Addlist listTitles={listTitles} setListTitles={setListTitles} />
    </div>
  );
};

export default Board;
