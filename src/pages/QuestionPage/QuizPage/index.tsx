import { useMemo } from "react";
import { QuizData } from "../../../questions/QuestionData";
import { indent } from "../../../utils/indent";
import { simpleParseCss } from "../../../utils/simpleParseCss";
import { GridArea } from "../components/GridArea";
import { GridAreaExtensionControl } from "../components/GridAreaExtensionControl";
import { useQuizPageLogic } from "../logic/useQuizPageLogic";
import classes from "../QuestionPage.module.css";

type Props = {
  quizId: string;
  quizData: QuizData;
};

export const QuizPage: React.VFC<Props> = ({ quizId, quizData }) => {
  const { gridStyle, itemStyle, gridDef, extensible } = quizData;

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

  const {
    selectedItems,
    buttonState,
    extension,
    toggleItem,
    extendGrid,
    check,
  } = useQuizPageLogic(quizId, quizData);

  const mainGrid = (
    <div className={classes.mainGridContainer}>
      <GridArea
        hasGrid
        extension={extension}
        className={classes.mainGrid}
        style={gridStyleObj}
        gridDef={gridDef}
        selectedItems={selectedItems}
        toggleItem={toggleItem}
      />
      <GridArea
        className={classes.cheatGrid}
        extension={extension}
        style={gridStyleObj}
        gridDef={gridDef}
      >
        <div className={classes.cheatItem} style={itemStyleObj} />
      </GridArea>
    </div>
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
        {extensible ? (
          <GridAreaExtensionControl onExtend={extendGrid}>
            {mainGrid}
          </GridAreaExtensionControl>
        ) : (
          mainGrid
        )}
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
