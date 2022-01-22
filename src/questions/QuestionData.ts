import React from "react";
import { GridPosition } from "./GridPosition";

export type QuestionDataBase = {
  noNext?: true;
};

export type Tutorial = QuestionDataBase & {
  type: "tutorial";
  contents: React.ReactElement;
};

export type GridQuestion = QuestionDataBase & {
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
   * Whether grid is extensible.
   */
  extensible?: boolean;
  /**
   * Style for subgrid.
   */
  subgridStyle?: string;
  /**
   * Correct answer.
   */
  answer: readonly GridPosition[];
};

export type QuizData = GridQuestion;

export type QuestionData = Tutorial | QuizData;
