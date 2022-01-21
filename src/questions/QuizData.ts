import { GridPosition } from "./GridPosition";

export type QuizData = {
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
