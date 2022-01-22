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
grid-column: span 1 / a;
grid-row: c / -1;
  `.trim();

export const data: QuestionData = {
  type: "grid",
  gridStyle,
  itemStyle,
  gridDef: {
    rows: 4,
    columns: 4,
  },
  answer: ["2-3", "2-4"],
};
