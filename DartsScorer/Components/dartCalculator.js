export const initialState = {
    currentValue: "501",
    previousValue: null,
    checkouts: [],
    highestOut: "0",
    all3Darts: [],
    timePassed: false,
    showOuts: false,
    legsCompleted: "0",
    total180s: "0",
    dartsAverage: [],
    possibleOutShot: null,
    modalVisible20: false,
    modalVisible19: false,
    modalVisible18: false,
    modalVisible17: false,
    modalVisible16: false,
    modalVisible15: false,
    modalVisible14: false,
    modalVisible13: false,
    modalVisible12: false,
    modalVisible11: false,
    modalVisible10: false,
    modalVisible9: false,
    modalVisible8: false,
    modalVisible7: false,
    modalVisible6: false,
    modalVisible5: false,
    modalVisible4: false,
    modalVisible3: false,
    modalVisible2: false,
    modalVisible1: false,
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

  export const possibleOuts = {
    40 : ['D20'],
    41 : ['9 + D16  or','  1 + D20'],
    42 : ['10 + D16  or','  6 + D18'],
    43 : ['11 + D16  or','  3 + D20  or','  19 + D12'],
    44 : ['4 + D20  or','  12 + D16'],
    45 : ['5 + D20  or','  13 + D16  or','  9 + D18'],
    46 : ['6 + D20  or','  10 + D18'],
    47 : ['15 + D16  or','  11 + D18  or','  7 + D20'],
    48 : ['8 + D20  or','  16 + D16'],
    49 : ['17 + D16  or','  9 + D20'],
    50 : ['10 + D20  or','  18 + D16  or','  10 + D20  or','  BULL'],
    51 : ['11 + D20  or','  19 + D16'],
    52 : ['12 + D20  or','  20 + D16'],
    53 : ['13 + D20  or','  17 + D18'],
    54 : ['14 + D20  or','  18 + D18'],
    55 : ['15 + D20  or','  19 + D18'],
    56 : ['16 + D20  or','  20 + D18'],
    57 : ['17 + D20  or','  25 + D16'],
    58 : ['18 + D20  or','  8 + BULL'],
    59 : ['19 + D20  or','  25 + D17'],
    60 : ['20 + D20  or','  10 + BULL'],
    61 : ['25 + D18  or','  11 + BULL  or','  T11 + D14'],
    62 : ['T10 + D16  or','  T14 + D10  or','  12 + BULL'],
    63 : ['T13 + D12  or','  T9 + D18  or','  13 + BULL'],
    64 : ['T16 + D8  or','  D16 + D16  or','  T8 + D20  or','  14 + BULL'],
    65 : ['25 + D20  or','  T19 + D4  or','  T15 + D10'],
    66 : ['T10 + D18  or','  T16 + D9'],
    67 : ['T17 + D8  or','  17 + BULL'],
    68 : ['T20 + D4  or','  T16 + D10'],
    69 : ['19 + BULL  or','  T11 + D18  or','  T15 + D12'],
    70 : ['T18 + D8  or','  20 + BULL  or','  T10 + D20'],
    71 : ['T13 + D16  or','  T17 + D10'],
    72 : ['T12 + D18  or','  T16 + D12'],
    73 : ['T19 + D8  or','  T11 + D20'],
    74 : ['T14 + D16  or','  T18 + D10'],
    75 : ['T13 + D18  or','  T17 + D12'],
    76 : ['T20 + D8  or','  T16 + D14'],
    77 : ['T15 + D16  or','  T19 + D10'],
    78 : ['T18 + D12  or','  T14 + D18'],
    79 : ['T13 + D20  or','  T19 + D11'],
    80 : ['T16 + D16  or','  T20 + D10'],
    81 : ['T15 + D18  or','  T19 + D12'],
    82 : ['T14 + D20  or','  BULL + D16  or','  T18 + D14'],
    83 : ['T17 + D16  or','  T19 + D13'],
    84 : ['T16 + D18  or','  T20 + D12'],
    85 : ['T15 + D20  or','  T19 + D14'],
    86 : ['T18 + D16  or','  BULL + T18'],
    87 : ['T17 + D18'],
    88 : ['T16 + D20  or','  T20 + D14'],
    89 : ['T19 + D16  or','  T13 + BULL'],
    90 : ['T18 + D18  or','  BULL + D20'],
    91 : ['T17 + D20'],
    92 : ['T20 + D16'],
    93 : ['T19 + D18'],
    94 : ['T18 + D20'],
    95 : ['T19 + D19  or','  T15 + BULL'],
    96 : ['T20 + D18'],
    97 : ['T19 + D20'],
    98 : ['T20 + D19  or','  T16 + BULL'],
    99 : ['T19 + 10 + D16  or','  T20 + 7 + D16  or','  T17 + 8 + D20'],
    100 : ['T20 + D20  or','  BULL + BULL'],
    101 : ['T17 + BULL  or','  T17 + 10 + D20  or','  T19 + 12 + D16'],
    102 : ['T20 + 10 + D16  or','  20 + BULL + D16  or','  T18 + 16 + D16'],
    103 : ['T19 + 10 + D16  or','  T17 + 12 + D20'],
    104 : ['T18 + BULL  or','  18 + T18 + D16  or','  T16 + 16 + D20'],
    105 : ['T20 + 13 + D16  or','  T19 + 8 + D20'],
    106 : ['T20 + 10 + D18  or','  T18 + 12 + D20  or','  T16 + 18 + D20'],
    107 : ['T19 + BULL  or','  T17 + 16 + D20'],
    108 : ['T19 + 19 + D16  or','  T18 + 18 + D18  or','  T20 + 8 + D20'],
    109 : ['T20 + 17 + D16  or','  T19 + 12 + D20  or','  T18 + 19 + D18'],
    110 : ['T20 + BULL  or','  T18 + 20 + D18'],
    111 : ['T20 + 19 + D16 or','  T17 + 20 + D20  or','  T18 + 17 + D20'],
    112 : ['T18 + 18 + D20  or','  T20 + 12 + D20'],
    113 : ['T20 + 13 + D20  or','  T19 + 16 + D20'],
    114 : ['T20 + 14 + D20  or','  T18 + 20 + D20'],
    115 : ['T20 + 19 + D18  or','  T19 + 18 + D20'],
    116 : ['T20 + 16 + D20'],
    117 : ['T20 + 17 + D20'],
    118 : ['T20 + 18 + D20'],
    119 : ['T20 + 19 + D20'],
    120 : ['T20 + 20 + D20'],
    121 : ['25 + T20 + D18  or','  T19 + T16 + D8'],
    122 : ['T20 + T14 + D10  or','  T20 + T10 + D16'],
    123 : ['T20 + T13 + D12  or','  T20 + T9 + D18'],
    124 : ['T20 + T16 + D8'],
    125 : ['T20 + T19 + D4  or','  25 + BULL + BULL  or','  25 + T20 + D20  or','  T20 + T11 + D16'],
    126 : ['T19 + 19 + BULL  or','  T20 + T10 + D18  or','  T18 + T12 + D18'],
    127 : ['T20 + T17 + D8  or','  T20 + T14 + D16'],
    128 : ['T20 + T20 + D4  or','  T18 + T18 + D10'],
    129 : ['T19 + T16 + D12  or','  T19 + T12 + D18'],
    130 : ['T20 + T18 + D8  or','  20 + T20 + BULL'],
    131 : ['T20 + T13 + D16  or','  BULL + T15 + D18'],
    132 : ['T20 + T16 + D12  or','  T17 + T15 + D18'],
    133 : ['T20 + T19 + D8  or','  T20 + T11 + D20'],
    134 : ['T20 + T14 + D16  or','  T18 + T16 + D16'],
    135 : ['T20 + T13 + D8  or','  BULL + T15 + D20'],
    136 : ['T20 + T20 + D8  or','  T20 + T16 + D14'],
    137 : ['T20 + T15 + D16  or','  T19 + T16 + D16'],
    138 : ['T20 + T14 + D18  or','  T18 + T16 + D18'],
    139 : ['T20 + T13 + D20  or','  T17 + T16 + D20'],
    140 : ['T20 + T20 + D10  or','  T18 + T18 + D16'],
    141 : ['T20 + T15 + D18  or','  T19 + T16 + D18'],
    142 : ['T20 + T14 + D20  or','  T18 + T16 + D20'],
    143 : ['T20 + T17 + D16  or','  T19 + T18 + D16'],
    144 : ['T20 + T20 + D12  or','  T18 + T18 + D18'],
    145 : ['T20 + T15 + D20  or','  T19 + T16 + D20'],
    146 : ['T20 + T18 + D16  or','  T19 + T19 + D16'],
    147 : ['T20 + T17 + D18  or','  T19 + T18 + D18'],
    148 : ['T20 + T20 + D14  or','  T20 + T16 + D20'],
    149 : ['T20 + T19 + D16  or','  T17 + T20 + D19'],
    150 : ['T20 + T18 + D18  or','  BULL + BULL + BULL'],
    151 : ['T20 + T17 + D20  or','  T19 + T20 + D18'],
    152 : ['T20 + T20 + D16'],
    153 : ['T20 + T19 + D18'],
    154 : ['T20 + T18 + D20'],
    155 : ['T20 + T19 + D19'],
    156 : ['T20 + T20 + D18'],
    157 : ['T20 + T19 + D20'],
    158 : ['T20 + T20 + D19'],
    160 : ['T20 + T20 + D20'],
    161 : ['T20 + T17 + BULL'],
    164 : ['T20 + T18 + BULL'],
    167 : ['T20 + T19 + BULL'],
    170 : ['T20 + T20 + BULL']
};
  
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