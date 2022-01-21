import { GridPosition } from "./GridPosition";

export type QuizPageData = {
  /**
   * Style of grid containter.
   */
  gridStyle: string;
  /**
   * Style of grid item.
   */
  itemStyle: string;
  /**
   * Rendered size of grid.
   */
  gridDef: {
    rows: number;
    columns: number;
  };
  /**
   * Correct answer.
   */
  answer: readonly GridPosition[];
};

export function useQuizPageData(): QuizPageData {
  const gridStyle = `
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
  `.trim();

  const itemStyle = `
grid-row: 1 / 3;
grid-column: 1 / 3; 
  `.trim();
  return {
    gridStyle,
    itemStyle,
    gridDef: {
      rows: 3,
      columns: 3,
    },
    answer: ["1-1", "1-2", "2-1", "2-2"],
  };
}
