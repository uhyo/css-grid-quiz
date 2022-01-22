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

const itemStyle = `
grid-column: 2 / span a 2;
grid-row: -2 b;
  `.trim();

export const data: QuestionData = {
  type: "grid",
  extensible: true,
  gridStyle,
  itemStyle,
  gridDef: {
    rows: 4,
    columns: 4,
  },
  answer: ["2,-1", "3,-1", "4,-1", "5,-1", "6,-1"],
};
