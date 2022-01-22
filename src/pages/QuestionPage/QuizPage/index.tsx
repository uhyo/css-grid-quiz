import { useMemo } from "react";
import { QuizData } from "../../../questions/QuestionData";
import { indent } from "../../../utils/indent";
import { simpleParseCss } from "../../../utils/simpleParseCss";
import { GridArea } from "../components/GridArea";
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
        <GridArea
          hasGrid
          className={classes.mainGrid}
          style={gridStyleObj}
          gridDef={gridDef}
          selectedItems={selectedItems}
          toggleItem={toggleItem}
        />
        <GridArea
          className={classes.cheatGrid}
          style={gridStyleObj}
          gridDef={gridDef}
        >
          <div className={classes.cheatItem} style={itemStyleObj} />
        </GridArea>
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
