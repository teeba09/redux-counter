export const IncrementByOne = () => {
  return {
    type: "IncrementByOne",
  };
};

export const IncrementByTwo = (nr) => {
  return {
    type: "IncrementByTwo",
    payload: nr,
  };
};

export const DecrementByTwo = (nr) => {
  return {
    type: "DecrementByTwo",
    payload: nr,
  };
};

export const DecrementByOne = () => {
  return {
    type: "DecrementByOne",
  };
};

export const DecrementBytwo = () => {
  return {
    type: "DecrementByTwo",
  };
};
