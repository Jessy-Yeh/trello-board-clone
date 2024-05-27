import { initialBoard } from "../dummyData/index.js";

export async function getBoard() {
  return {
    success: true,
    data: initialBoard,
  };
}

export async function updateBoard(updateBoardData) {
  const newBoardData = { ...initialBoard };

  if (updateBoardData.title) {
    newBoardData.title = updateBoardData.title;
  }

  if (updateBoardData.lists) {
    const currentLists = newBoardData.lists;
    const newLists = [];

    updateBoardData.lists.forEach((list) => {
      const foundList = currentLists.find(
        (currentList) => currentList.id === list.id
      );

      if (foundList) {
        newLists.push(foundList);
      }
    });

    newBoardData.lists = newLists;
  }

  return {
    success: true,
    data: newBoardData,
  };
}

export async function addListToBoard(title) {
  const newList = { id: uuidv4(), title, cards: [] };

  initialBoard.lists.push(newList);

  return {
    success: true,
    data: newList,
  };
}

export async function deleteListFromBoard(listId) {
  const indexOfList = initialBoard.lists.findIndex(
    (list) => list.id === listId
  );
  if (indexOfList > -1) {
    initialBoard.lists.splice(indexOfList, 1);
    return {
      success: true,
      data: listId,
    };
  } else {
    return {
      success: false,
    };
  }
}

export async function updateList(listId, updateListData) {
  const initialList = initialBoard.lists.find((list) => list.id === listId);
  const newListData = { ...initialList };

  if (updateListData.title) {
    newListData.title = updateListData.title;
  }

  if (updateListData.cards) {
    const currentCards = newListData.cards;
    const newCards = [];

    updateListData.cards.forEach((card) => {
      const foundCard = currentCards.find(
        (currentCard) => currentCard.id === card.id
      );

      if (foundCard) {
        newCards.push(foundCard);
      }
    });

    newListData.cards = newCards;
  }

  return {
    success: true,
    data: newListData,
  };
}

export async function addCardToList(listId, title) {
  const newCard = { id: uuidv4(), title: title, label: "" };
  const indexOfList = initialBoard.lists.findIndex(
    (list) => list.id === listId
  );
  if (indexOfList > -1) {
    initialBoard.lists[indexOfList].cards.push(newCard);
    return {
      success: true,
      data: newCard,
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
      data: cardId,
    };
  } else {
    return {
      success: false,
    };
  }
}
