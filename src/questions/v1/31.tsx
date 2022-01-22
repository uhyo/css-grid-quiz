import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns:
  [a] 1fr [b] 1fr [a] 1fr [b] 1fr [a b];
grid-template-rows:
  [x] 1fr [y] 1fr [x] 1fr [y] 1fr [x y];
  `.trim();

const itemStyle = `
grid-column: a 2 / a 4;
grid-row: x -5;
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
  answer: ["3,-1", "4,-1", "5,-1"],
};
