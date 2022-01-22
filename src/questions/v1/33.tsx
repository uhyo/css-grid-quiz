import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns:
  [a] 1fr [b] 1fr [a] 1fr [b] 1fr [a b];
grid-template-rows:
  [x] 1fr [y] 1fr [x] 1fr [y] 1fr [x y];
  `.trim();

const itemStyle = `
grid-column: span a 2 / 2;
grid-row: -2 z;
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
  answer: ["0,-1", "1,-1"],
};
