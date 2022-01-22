import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns: [a] 1fr [b] 1fr [c];
grid-template-rows: [a] 1fr [b] 1fr [c];
grid-template-areas:
  "c b"
  "x a";
  `.trim();

const itemStyle = `
grid-column: c / 1 c;
grid-row: b 1 / span a;
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
  answer: ["1,2", "2,2", "1,3", "2,3"],
};
