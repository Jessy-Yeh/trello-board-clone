import { initialBoard } from "../dummyData/index.js";

export async function addListToBoard(newlist) {
  console.log("newlistid??", newlist.id);
  if (newlist.id.length > 0) {
    initialBoard.lists.push(newlist);
    return {
      success: true,
    };
  } else {
    return {
      success: false,
    };
  }
}

export async function addCardToList(listId, newcard) {
  const indexOfList = initialBoard.lists.findIndex(
    (list) => list.id === listId
  );
  if (indexOfList > -1) {
    initialBoard.lists[indexOfList].cards.push(newcard);
    return {
      success: true,
    };
  } else {
    return {
      success: false,
    };
  }
}

export async function deleteListFromBoard(listId) {
  const indexOfList = initialBoard.lists.findIndex(
    (list) => list.id === listId
  );
  if (indexOfList > -1) {
    initialBoard.lists.splice(indexOfList, 1);
    return {
      success: true,
    };
  } else {
    return {
      success: false,
    };
  }
}

export async function deleteCardFromList(listId, cardId) {
  const indexOfList = initialBoard.lists.findIndex(
    (list) => list.id === listId
  );

  const indexOfCard = initialBoard.lists[indexOfList].cards.findIndex(
    (card) => card.id === cardId
  );

  if (indexOfCard > -1) {
    initialBoard.lists[indexOfList].cards.splice(indexOfCard, 1);
    return {
      success: true,
    };
  } else {
    return {
      success: false,
    };
  }
}
