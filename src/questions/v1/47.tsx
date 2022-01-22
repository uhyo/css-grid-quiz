import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns:
  [a] 1fr [b] 1fr [c] 1fr [d] 1fr [e];
grid-template-rows:
  [v] 1fr [w] 1fr [x] 1fr [y] 1fr [z];
  `.trim();

const subgridStyle = `
grid-column: c / -1;
grid-row: v / -2;
grid-template-columns: subgrid [] [f];
grid-template-rows: subgrid [] [h] [i];
`.trim();

const itemStyle = `
grid-column: f;
grid-row: h / i;
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
  answer: ["4,2"],
};
