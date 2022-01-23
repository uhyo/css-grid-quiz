import { memo, useEffect, useMemo, useRef } from "react";
import { Link } from "react-location";
import { QuizData } from "../../../questions/QuestionData";
import { indent } from "../../../utils/indent";
import { simpleParseCss } from "../../../utils/simpleParseCss";
import { GridArea } from "../components/GridArea";
import { GridAreaExtensionControl } from "../components/GridAreaExtensionControl";
import { ButtonState, useQuizPageLogic } from "../logic/useQuizPageLogic";
import classes from "../QuestionPage.module.css";

type Props = {
  quizId: string;
  quizData: QuizData;
  cheat: boolean;
};

export const QuizPage: React.VFC<Props> = ({ quizId, quizData, cheat }) => {
  const { gridStyle, subgridStyle, itemStyle, gridDef, extensible } = quizData;
  const pageTitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // a11y
    pageTitleRef.current?.focus();
  }, [quizId]);

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
  const { subgridStyleDisp, subgridStyleObj } = useMemo(() => {
    if (!subgridStyle) {
      return { subgridStyleDisp: undefined, subgridStyleObj: undefined };
    }
    return {
      subgridStyleDisp: `.subgrid {
  display: grid;
${indent(subgridStyle)}
}`,
      subgridStyleObj: simpleParseCss(subgridStyle),
    };
  }, [subgridStyle]);
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
    reset,
    getCheat,
  } = useQuizPageLogic(quizId, quizData, cheat);

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
      {cheat && (
        <GridArea
          className={classes.cheatGrid}
          extension={extension}
          style={gridStyleObj}
          gridDef={gridDef}
        >
          {subgridStyleObj ? (
            <div className={classes.cheatSubgrid} style={subgridStyleObj}>
              <div className={classes.cheatItem} style={itemStyleObj} />
            </div>
          ) : (
            <div className={classes.cheatItem} style={itemStyleObj} />
          )}
        </GridArea>
      )}
    </div>
  );

  return (
    <section className={classes.page}>
      <h1
        aria-live="polite"
        tabIndex={0}
        ref={pageTitleRef}
        className={classes.titleArea}
      >
        Page {quizId}
      </h1>
      <GridDefs
        gridStyleDisp={gridStyleDisp}
        subgridStyleDisp={subgridStyleDisp}
        itemStyleDisp={itemStyleDisp}
      />
      <div className={classes.mainArea}>
        {extensible ? (
          <GridAreaExtensionControl onExtend={extendGrid}>
            {mainGrid}
          </GridAreaExtensionControl>
        ) : (
          mainGrid
        )}
      </div>
      <ControlGrid
        buttonState={buttonState}
        check={check}
        reset={reset}
        getCheat={getCheat}
        isCheat={cheat}
        isSubgrid={quizData.subgridStyle !== undefined}
      />
    </section>
  );
};

const GridDefs: React.VFC<{
  gridStyleDisp: string;
  subgridStyleDisp: string | undefined;
  itemStyleDisp: string;
}> = memo(({ gridStyleDisp, subgridStyleDisp, itemStyleDisp }) => {
  return (
    <div className={classes.defs}>
      <pre className={classes.eachDef}>
        <code>{gridStyleDisp}</code>
      </pre>
      {subgridStyleDisp ? (
        <pre className={classes.eachDef}>
          <code>{subgridStyleDisp}</code>
        </pre>
      ) : null}
      <pre className={classes.eachDef}>
        <code>{itemStyleDisp}</code>
      </pre>
    </div>
  );
});

const ControlGrid: React.VFC<{
  buttonState: ButtonState;
  isCheat: boolean;
  isSubgrid: boolean;
  reset: () => void;
  check: () => void;
  getCheat: (() => void) | undefined;
}> = memo(({ buttonState, isCheat, reset, check, getCheat }) => {
  return (
    <div className={classes.controlGrid}>
      <Link className={classes.goToTop} to="/">
        Go to Top
      </Link>
      {getCheat !== undefined ? (
        <button className={classes.cheat} onClick={getCheat}>
          Cheat
        </button>
      ) : (
        <span />
      )}
      <button onClick={reset}>Reset</button>
      {buttonState === "check" ? (
        <button className={classes.check} onClick={check}>
          Check
        </button>
      ) : buttonState === "correct" ? (
        <button className={classes.check} onClick={check}>
          Correct!
        </button>
      ) : buttonState === "wrong" ? (
        <button className={classes.wrong} onClick={check}>
          Wrong…
        </button>
      ) : null}
      {isCheat ? (
        <p className={classes.cheatNotice}>
          Note: cheat for subgrids only works for browsers that support subgrid.
        </p>
      ) : null}
    </div>
  );
});
