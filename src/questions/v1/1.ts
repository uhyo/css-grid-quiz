import { QuizData } from "../QuizData";

const gridStyle = `
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
  `.trim();

const itemStyle = `
grid-column: 3;
grid-row: 2;
  `.trim();

export const quizData: QuizData = {
  type: "grid",
  gridStyle,
  itemStyle,
  gridDef: {
    rows: 4,
    columns: 4,
  },
  answer: ["3-2"],
};
