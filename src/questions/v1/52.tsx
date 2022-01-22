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
grid-column: 2 / span 3;
grid-row: 2 / span 3;
grid-template-columns: subgrid [] [c-start];
grid-template-rows: subgrid [] [] [b-end];
grid-template-areas:
  "b a a"
  "b a a"
  "b a a;
`.trim();

const itemStyle = `
grid-column: c-start 2;
grid-row: 1 / b-end 2;
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
  answer: ["4,2", "4,3"],
};
