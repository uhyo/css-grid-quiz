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
grid-column: a-end / span a-start;
grid-row: c 2 / c 4;
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
  answer: ["3,7", "4,7", "5,7", "3,8", "4,8", "5,8"],
};
