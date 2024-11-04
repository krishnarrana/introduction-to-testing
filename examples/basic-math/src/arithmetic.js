export const add = (a, b) => {
  if (isNaN(+a)) {
    throw new Error('The first argument is not a numnber');
  }
  if (isNaN(+b)) {
    throw new Error('The second argument is not a numnber');
  }
  return +a + +b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  return a / b;
};
