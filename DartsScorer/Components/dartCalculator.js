export const initialState = {
    currentValue: "501",
    previousValue: null,
    secondPreviousValue: null,
    thirdPreviousValue: null,
    legsCompleted: "0",
    total180s: "0",
    modalVisible: false,
    dartsAverage: [],
  };

  export const dartNumbersArr1 = [
    20, 19, 18, 17, 16
  ]
  export const dartNumbersArr2 = [
    15, 14, 13, 12, 11
  ]
  export const dartNumbersArr3 = [
    10, 9, 8, 7, 6
  ]
  export const dartNumbersArr4 = [
    5, 4, 3, 2, 1
  ]
  
//   export const handleNumber = (value, state) => {
//     if (state.currentValue === "501") {
//       return { currentValue: `${value}` };
//     }
  
//     return {
//       currentValue: `${state.currentValue}${value}`,
//     };
//   };
  
//   const handleEqual = (state) => {
//     const { currentValue, previousValue, operator } = state;
  
//     const current = parseFloat(currentValue);
//     const previous = parseFloat(previousValue);
//     const resetState = { operator: null, previousValue: null };
  
//     switch (operator) {
//       case "+":
//         return {
//           currentValue: `${previous + current}`,
//           ...resetState,
//         };
//       case "-":
//         return {
//           currentValue: `${previous - current}`,
//           ...resetState,
//         };
//       case "*":
//         return {
//           currentValue: `${previous * current}`,
//           ...resetState,
//         };
//       case "/":
//         return {
//           currentValue: `${previous / current}`,
//           ...resetState,
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   // calculator function
//   const dartCalculator = (type, value, state) => {
//     switch (type) {
//       case "number":
//         return handleNumber(value, state);
//       case "clear":
//         return initialState;
//       case "posneg":
//         return {
//           currentValue: `${parseFloat(state.currentValue) * -1}`,
//         };
//       case "percentage":
//         return {
//           currentValue: `${parseFloat(state.currentValue) * 0.01}`,
//         };
//       case "operator":
//         return {
//           operator: value,
//           previousValue: state.currentValue,
//           currentValue: "0",
//         };
//       case "equal":
//         return handleEqual(state);
//       default:
//         return state;
//     }
//   };
  
//   export default dartCalculator;