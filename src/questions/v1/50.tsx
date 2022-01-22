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
grid-column: 2 / span 2;
grid-row: 2 / span 2;
grid-template-columns: subgrid;
grid-template-rows: subgrid;
grid-template-areas:
  "b a"
  "b a";
`.trim();

const itemStyle = `
grid-column: a;
grid-row: c;
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
  answer: ["2,3"],
};
