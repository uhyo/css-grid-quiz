import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-template-areas:
  "a a b b"
  "a a b b"
  "a a c c"
  "a a c c";
  `.trim();

const subgridStyle = `
grid-column: a;
grid-row: a;
grid-template-columns: subgrid;
grid-template-rows: subgrid;
`.trim();

const itemStyle = `
grid-column: a / b;
grid-row: 2 / span 2;
  `.trim();

export const data: QuestionData = {
  type: "grid",
  gridStyle,
  subgridStyle,
  itemStyle,
  gridDef: {
    rows: 4,
    columns: 4,
  },
  answer: ["1,2", "2,2", "1,3", "2,3"],
};
