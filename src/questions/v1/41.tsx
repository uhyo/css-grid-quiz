import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
  `.trim();

const subgridStyle = `
grid-column: 2 / span 3;
grid-row: 2 / span 3;
grid-template-columns: subgrid;
grid-template-rows: subgrid;
`.trim();

const itemStyle = `
grid-column: 2 / span 3;
grid-row: 2;
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
  answer: ["3,3", "4,3"],
};
