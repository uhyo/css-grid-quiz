import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
  `.trim();

const itemStyle = `
grid-column: auto / 3;
grid-row: 3 / auto;
  `.trim();

export const data: QuestionData = {
  type: "grid",
  gridStyle,
  itemStyle,
  gridDef: {
    rows: 4,
    columns: 4,
  },
  answer: ["2-3"],
};
