import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns:
  [a] 1fr [b] 1fr [c] 1fr [d] 1fr [e];
grid-template-rows:
  [v] 1fr [w] 1fr [x] 1fr [y] 1fr [z];
  `.trim();

const subgridStyle = `
grid-column: b / e;
grid-row: v / y;
grid-template-columns: subgrid;
grid-template-rows: subgrid;
`.trim();

const itemStyle = `
grid-column: b / d;
grid-row: z / w;
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
  answer: ["2,2", "3,2", "2,3", "3,3"],
};
