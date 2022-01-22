import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns: [a] 1fr [b] 1fr [c];
grid-template-rows: [a] 1fr [b] 1fr [c];
grid-template-areas:
  "c b"
  "x a";
  `.trim();

const itemStyle = `
grid-column: a;
grid-row: b;
  `.trim();

export const data: QuestionData = {
  type: "grid",
  extensible: true,
  gridStyle,
  itemStyle,
  gridDef: {
    rows: 2,
    columns: 2,
  },
  answer: ["2,1"],
};
