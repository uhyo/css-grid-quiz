import { Fragment, useMemo } from "react";
import { QuizData } from "../../../questions/QuestionData";
import { indent } from "../../../utils/indent";
import { range } from "../../../utils/range";
import { simpleParseCss } from "../../../utils/simpleParseCss";
import classes from "../QuestionPage.module.css";
import { useQuizPageLogic } from "../useQuizPageLogic";

type Props = {
  quizId: string;
  quizData: QuizData;
};

export const QuizPage: React.VFC<Props> = ({ quizId, quizData }) => {
  const { gridStyle, itemStyle, gridDef } = quizData;

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

  const { selectedItems, buttonState, toggleItem, check } = useQuizPageLogic(
    quizId,
    quizData
  );

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
          {Array.from(range(1, gridDef.rows + 1)).map((row) => (
            <Fragment key={`row-${row}`}>
              {Array.from(range(1, gridDef.columns + 1)).map((column) => (
                <button
                  key={`column-${column}`}
                  className={classes.normalItem}
                  style={{
                    gridRow: row,
                    gridColumn: column,
                  }}
                  onClick={() => toggleItem(column, row)}
                >
                  ({column}, {row})
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
                  gridRow: row,
                  gridColumn: column,
                }}
                onClick={() => toggleItem(column, row)}
              >
                ({column}, {row})
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.controlGrid}>
        {buttonState === "check" ? (
          <button onClick={check}>Check</button>
        ) : buttonState === "correct" ? (
          <button onClick={check}>Correct!</button>
        ) : buttonState === "wrong" ? (
          <button className={classes.wrong} onClick={check}>
            Wrong…
          </button>
        ) : null}
      </div>
    </div>
  );
};