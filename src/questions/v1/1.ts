import { QuizData } from "../QuizData";

const gridStyle = `
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
  `.trim();

const itemStyle = `
grid-row: 1 / 3;
grid-column: 1 / 3; 
  `.trim();

export const quizData: QuizData = {
  gridStyle,
  itemStyle,
  gridDef: {
    rows: 3,
    columns: 3,
  },
  answer: ["1-1", "1-2", "2-1", "2-2"],
};
