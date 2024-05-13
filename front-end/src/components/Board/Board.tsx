import { useState } from "react";
import Addlist from "../Addlist/Addlist";
import List from "../List/List";

const Board = () => {
  const [listTitles, setListTitles] = useState<string[]>([]);
  return (
    <div className="board">
      <div className="lists">
        {listTitles.map((listTitle, index) => (
          <List title={listTitle} key={index} />
        ))}
      </div>
      <Addlist listTitles={listTitles} setListTitles={setListTitles} />
    </div>
  );
};

export default Board;
