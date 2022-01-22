import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns:
  [a] 1fr [b] 1fr [a] 1fr [b] 1fr [a b];
grid-template-rows:
  [x] 1fr [y] 1fr [x] 1fr [y] 1fr [x y];
  `.trim();

const itemStyle = `
grid-column: a / span 2;
grid-row: y;
  `.trim();

export const data: QuestionData = {
  type: "grid",
  gridStyle,
  itemStyle,
  gridDef: {
    rows: 4,
    columns: 4,
  },
  answer: ["1,2", "2,2"],
};
