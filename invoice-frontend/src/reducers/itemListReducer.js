const itemListReducer = (itemlist, action) => {
  switch (action.type) {

    case "SET_ITEMS":
      return action.payload;

    case "INCREMENT_QTY":
      return itemlist.map(item =>
        item.id == action.id
          ? { ...item, qty: (item.qty || 0) + 1 }
          : item
      );

    case "DECREMENT_QTY":
      return itemlist.map(item =>
        item.id == action.id
          ? { ...item, qty: Math.max((item.qty || 0) - 1, 0) }
          : item
      );

    default:
      return itemlist;
  }
};

export default itemListReducer;