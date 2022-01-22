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
grid-column: 2 / a;
grid-row: b-end / span 2;
  `.trim();

export const data: QuestionData = {
  type: "grid",
  gridStyle,
  itemStyle,
  gridDef: {
    rows: 4,
    columns: 4,
  },
  answer: ["2,3", "2,4"],
};
