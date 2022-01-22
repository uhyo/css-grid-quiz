import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
  `.trim();

const subgridStyle = `
grid-column: 2 / span 3;
grid-row: 2 / span 3;
grid-template-columns: subgrid [a] [b] [c] [d];
grid-template-rows: subgrid [w] [x] [y] [z];
`.trim();

const itemStyle = `
grid-column: a / c;
grid-row: x / z;
  `.trim();

export const data: QuestionData = {
  type: "grid",
  gridStyle,
  subgridStyle,
  itemStyle,
  gridDef: {
    rows: 5,
    columns: 5,
  },
  answer: ["2,3", "3,3", "2,4", "3,4"],
};
