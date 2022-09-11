const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "IncrementByOne":
      return state + 1;

    case "DecrementByOne":
      return state - 1;

    case "IncrementByTwo":
      return state + action.payload;
    case "DecrementByTwo":
      return state - action.payload;
    default:
      return state;
  }
};

export default CounterReducer;
