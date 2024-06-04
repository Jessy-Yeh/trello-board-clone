import styles from "./Addlist.module.css";
import AddItem from "../AddItem/AddItem";
import { BoardType } from "../../types";
import axios from "axios";

interface Props {
  boardData: BoardType;
  setBoardData: React.Dispatch<React.SetStateAction<BoardType | null>>;
}

const Addlist = ({ boardData, setBoardData }: Props) => {
  const addNewList = (title: string) => {
    const reqBody = { title };

    axios
      .post("http://localhost:3000/board/lists", reqBody)
      .then((res) => {
        const newlists = [...boardData.lists, res.data];
        setBoardData({ ...boardData, lists: newlists });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.container}>
      <AddItem itemType="list" addItem={addNewList} />
    </div>
  );
};

export default Addlist;

// we send to API
// { title }

// api responds with
// status 200 OK
// { title, cards: [], id: "3k23k4jl2k3j4l23j" }
