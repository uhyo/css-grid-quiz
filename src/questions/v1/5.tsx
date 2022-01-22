import { QuestionData } from "../QuestionData";

const gridStyle = `
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
  `.trim();

const itemStyle = `
grid-column: 2 / span 2;
grid-row: 1 / 3;
  `.trim();

export const data: QuestionData = {
  type: "grid",
  gridStyle,
  itemStyle,
  gridDef: {
    rows: 4,
    columns: 4,
  },
  answer: ["2,1", "3,1", "2,2", "3,2"],
};
