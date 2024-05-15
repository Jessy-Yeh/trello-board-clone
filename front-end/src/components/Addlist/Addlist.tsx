import styles from "./Addlist.module.css";
import AddItem from "../AddItem/AddItem";
import { BoardType } from "../../types";

interface Props {
  boardData: BoardType;
  setBoardData: React.Dispatch<React.SetStateAction<BoardType | null>>;
}

const Addlist = ({ boardData, setBoardData }: Props) => {
  const addNewList = (title: string) => {
    const newlist = { title, cards: [] };
    const newlists = [...boardData.lists, newlist];
    setBoardData({ ...boardData, lists: newlists });
  };

  return (
    <div className={styles.container}>
      <AddItem itemType="list" addItem={addNewList} />
    </div>
  );
};

export default Addlist;
