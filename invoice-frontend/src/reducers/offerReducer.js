const offerReducer = (offerList, action) => {
  switch (action.type) {

    case "SET_OFFERS":
      return action.payload;

    case "SEL_OFFER":
      return offerList.map(item =>
        item.id == action.id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      );

    default:
      return offerList;
  }
};

export default offerReducer;