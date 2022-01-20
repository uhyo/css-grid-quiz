import { Fragment, useMemo } from "react";
import { indent } from "../../utils/indent";
import { range } from "../../utils/range";
import { simpleParseCss } from "../../utils/simpleParseCss";
import classes from "./QuizPage.module.css";
import { useQuizPageData } from "./useQuizPageData";
import { useQuizPageLogic } from "./useQuizPageLogic";

export const QuizPage: React.VFC = () => {
  const { gridStyle, itemStyle, gridDef } = useQuizPageData();

  const { gridStyleDisp, gridStyleObj } = useMemo(
    () => ({
      gridStyleDisp: `.container {
  display: grid;
${indent(gridStyle)}
}`,
      gridStyleObj: simpleParseCss(gridStyle),
    }),
    [gridStyle]
  );
  const { itemStyleDisp, itemStyleObj } = useMemo(
    () => ({
      itemStyleDisp: `.item {
${indent(itemStyle)}
}`,
      itemStyleObj: simpleParseCss(itemStyle),
    }),
    [itemStyle]
  );

  const { selectedItems, toggleItem } = useQuizPageLogic();

  return (
    <div className={classes.page}>
      <pre className={classes.gridDef}>
        <code>{gridStyleDisp}</code>
      </pre>
      <pre className={classes.itemDef}>
        <code>{itemStyleDisp}</code>
      </pre>
      <div className={classes.mainArea}>
        <div className={classes.mainGrid} style={gridStyleObj}>
          {Array.from(range(0, gridDef.rows)).map((row) => (
            <Fragment key={`row-${row}`}>
              {Array.from(range(0, gridDef.columns)).map((column) => (
                <button
                  key={`column-${column}`}
                  className={classes.normalItem}
                  style={{
                    gridRow: row + 1,
                    gridColumn: column + 1,
                  }}
                  onClick={() => toggleItem(column, row)}
                >
                  ({column + 1}, {row + 1})
                </button>
              ))}
            </Fragment>
          ))}
          <div className={classes.cheatItem} style={itemStyleObj} />
          {selectedItems.map((itemKey) => {
            const [column, row] = itemKey.split("-").map((v) => Number(v));
            return (
              <div
                key={itemKey}
                className={classes.selectedItem}
                style={{
                  gridRow: row + 1,
                  gridColumn: column + 1,
                }}
                onClick={() => toggleItem(column, row)}
              >
                ({column + 1}, {row + 1})
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
