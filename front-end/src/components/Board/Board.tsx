import { useEffect, useState } from "react";
import Addlist from "../Addlist/Addlist";
import List from "../List/List";
import axios from "axios";
import { BoardType } from "../../types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// interface ResultProps {
//   combine: Combine | null | undefined;
//   destination: { droppableId: string; index: number };
//   draggableId: string;
//   mode: string;
//   reason: string;
//   source: { index: number; droppableId: string };
//   type: string;
//   onDragEnd: OnDragEndResponder;
// }

const Board = () => {
  const [boardData, setBoardData] = useState<BoardType | null>(null);

  useEffect(() => {
    axios.get<BoardType>("http://localhost:3000/board").then((response) => {
      setBoardData(response.data);
    });
  }, []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    if (!boardData) return;

    const lists = [...boardData.lists];
    const [reorderedList] = lists.splice(result.source.index, 1);
    lists.splice(result.destination.index, 0, reorderedList);

    setBoardData({ ...boardData, lists });

    const config = {
      title: "",
      id: boardData.id,
      lists: lists,
    };

    axios.patch("http://localhost:3000/board", config).then((response) => {
      if (response.status !== 200) {
        // set react state back to what it was before
        console.log("need to reset state babk");
      }
      console.log(response);
    });
  };

  return (
    <div className="board">
      {boardData ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="lists">
            {(provided) => (
              <ul
                className="lists"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {boardData.lists.map((list, index) => (
                  <Draggable key={list.id} draggableId={list.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <List
                          list={list}
                          boardData={boardData}
                          setBoardData={setBoardData}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <Addlist boardData={boardData} setBoardData={setBoardData} />
        </DragDropContext>
      ) : null}
    </div>
  );
};

export default Board;
