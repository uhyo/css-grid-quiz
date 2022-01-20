type QuizPageData = {
  gridStyle: string;
  itemStyle: string;
  /**
   * Rendered size of grid.
   */
  gridDef: {
    rows: number;
    columns: number;
  };
};

export function useQuizPage(): QuizPageData {
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
  };
}
