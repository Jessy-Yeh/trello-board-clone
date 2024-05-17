import { useEffect, useState } from "react";
import Addlist from "../Addlist/Addlist";
import List from "../List/List";
import axios from "axios";
import { BoardType } from "../../types";

const Board = () => {
  const [boardData, setBoardData] = useState<BoardType | null>(null);

  useEffect(() => {
    axios.get<BoardType>("http://localhost:3000/board").then((response) => {
      console.log(response.data);
      setBoardData(response.data);
    });
  }, []);

  return (
    <div className="board">
      {boardData ? (
        <>
          <ul className="lists">
            {boardData.lists.map((list, index) => (
              <li>
                <List
                  key={index}
                  list={list}
                  boardData={boardData}
                  setBoardData={setBoardData}
                />
              </li>
            ))}
          </ul>
          <Addlist boardData={boardData} setBoardData={setBoardData} />
        </>
      ) : null}
    </div>
  );
};

export default Board;
