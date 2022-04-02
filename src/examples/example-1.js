function areInputsValid(...args) {
  return args.filter((arg) => typeof arg !== "number").length === args.length;
}

export function sum(num1, num2) {
  if (areInputsValid(num1, num2)) {
    return null;
  }

  return num1 + num2;
}

export function sumToString(num1, num2) {
  if (areInputsValid(num1, num2)) {
    return null;
  }

  return `${sum(num1, num2)} = ${num1} + ${num2}`;
}
