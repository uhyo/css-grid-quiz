import { GridPosition } from "./GridPosition";

export type QuizDataBase = {
  noNext?: true;
};

export type QuizData = QuizDataBase & {
  type: "grid";
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
