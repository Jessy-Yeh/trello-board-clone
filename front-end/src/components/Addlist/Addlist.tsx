import styles from "./Addlist.module.css";
import AddItem from "../AddItem/AddItem";

interface Props {
  listTitles: string[];
  setListTitles: React.Dispatch<React.SetStateAction<string[]>>;
}

const Addlist = ({ listTitles, setListTitles }: Props) => {
  const addNewListTitle = (newlist: string) => {
    setListTitles([...listTitles, newlist]);
  };

  return (
    <div className={styles.container}>
      <AddItem itemType="list" addItem={addNewListTitle} />
    </div>
  );
};

export default Addlist;
