const product_reducer = (state, action) => {
  if (action.type === "BOOKMARK") {
    console.log("bookmark");
    return { ...state, bookmark: true };
  }
  if (action.type === "UNBOOK") {
    console.log("unbookmark");
    return { ...state, bookmark: false };
  }
  if (action.type === "PLEDGE") {
    const { title, total } = action.payload;

    const newRewards = state.rewards.map((item) => {
      if (item.title === title) {
        return { ...item, total: item.total - 1 };
      } else {
        return item;
      }
    });

    return {
      ...state,
      totalRecieved: state.totalRecieved + total,
      rewards: newRewards,
    };
  }
  return state;
};

export default product_reducer;
