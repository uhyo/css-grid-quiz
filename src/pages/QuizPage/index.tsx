import { Fragment, useMemo } from "react";
import { indent } from "../../utils/indent";
import { range } from "../../utils/range";
import { simpleParseCss } from "../../utils/simpleParseCss";
import classes from "./QuizPage.module.css";
import { useQuizPage } from "./useQuizPage";

export const QuizPage: React.VFC = () => {
  const { gridStyle, itemStyle, gridDef } = useQuizPage();

  const gridStyleDisp = `.container {
  display: grid;
${indent(gridStyle)}
}`;

  const itemStyleDisp = `.item {
${indent(itemStyle)}
}`;

  const gridStyleObj = useMemo(() => simpleParseCss(gridStyle), [gridStyle]);
  const itemStyleObj = useMemo(() => simpleParseCss(itemStyle), [itemStyle]);

  console.log({ gridStyleObj, itemStyleObj });

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
                <div
                  key={`column-${column}`}
                  className={classes.normalItem}
                  style={{
                    gridRow: row + 1,
                    gridColumn: column + 1,
                  }}
                />
              ))}
            </Fragment>
          ))}
          <div className={classes.cheatItem} style={itemStyleObj} />
        </div>
      </div>
    </div>
  );
};
