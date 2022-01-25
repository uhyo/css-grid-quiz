import { useCallback, useEffect, useMemo, useReducer } from "react";
import { useNavigate } from "react-location";
import { GridPosition } from "../../../questions/GridPosition";
import { QuizData } from "../../../questions/QuestionData";
import { useStateReset } from "../../../utils/hooks/useStateReset";
import { useNextPage } from "../hooks/useNextPage";
import {
  EdgeDirection,
  GridExtensionState,
  useGridExtension,
} from "./useGridExtension";
import { useGridItemSelection } from "./useGridItemSelection";

export type ButtonState = "check" | "correct" | "wrong";

export function useQuizPageLogic(
  quizId: string,
  data: QuizData,
  isCheat: boolean
) {
  const { goToNextPage } = useNextPage(quizId);
  const navigate = useNavigate();
  const [resetCount, reset] = useReducer((c: number) => c + 1, 0);
  const [wrongCount, addWrong] = useStateReset([quizId], () => 0);
  const { selectedItems, toggleItem } = useGridItemSelection([
    quizId,
    resetCount,
  ]);
  const { extension, extend: extendGrid } = useGridExtension([
    quizId,
    resetCount,
  ]);

  // if cheat is enabled but extension is not enough, extend
  useAutoExtension(extension, data.gridDef, extendGrid, data.answer, isCheat);

  const [buttonState, setButtonState] = useStateReset<ButtonState>(
    [quizId],
    () => "check"
  );

  const check = useCallback(() => {
    if (checkAnswer(selectedItems, data.answer)) {
      setButtonState("correct");
    } else {
      setButtonState("wrong");
    }
  }, [selectedItems, data]);

  useEffect(() => {
    if (buttonState === "correct") {
      const timer = setTimeout(() => {
        goToNextPage();
      }, 300);
      return () => clearTimeout(timer);
    }
    if (buttonState === "wrong") {
      addWrong((c) => c + 1);
      const timer = setTimeout(() => {
        setButtonState("check");
      }, 2500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [buttonState]);

  const getCheat = useMemo(() => {
    if (wrongCount < 3) {
      // no cheat available yet
      return undefined;
    }
    return () => {
      navigate({
        search: (old) =>
          isCheat
            ? { lang: old?.lang }
            : {
                cheat: "1",
                lang: old?.lang,
              },
      });
    };
  }, [wrongCount, isCheat]);

  return {
    selectedItems,
    toggleItem,
    extension,
    extendGrid,
    buttonState,
    check,
    reset,
    getCheat,
  };
}

function checkAnswer(
  selectedItems: readonly GridPosition[],
  answer: readonly GridPosition[]
) {
  // TODO: O(N^2)
  return (
    selectedItems.length === answer.length &&
    selectedItems.every((item) => answer.includes(item))
  );
}

function useAutoExtension(
  extension: GridExtensionState,
  gridDef: { rows: number; columns: number },
  extendGrid: (direction: EdgeDirection, amount: number) => void,
  answer: readonly GridPosition[],
  isCheat: boolean
) {
  useEffect(() => {
    if (!isCheat) {
      return;
    }
    let topEdge = 1;
    let rightEdge = gridDef.columns;
    let bottomEdge = gridDef.rows;
    let leftEdge = 1;

    for (const item of answer) {
      const [column, row] = item.split(",").map(Number);
      if (column < leftEdge) {
        leftEdge = column;
      }
      if (column > rightEdge) {
        rightEdge = column;
      }
      if (row < topEdge) {
        topEdge = row;
      }
      if (row > bottomEdge) {
        bottomEdge = row;
      }
    }
    const leftExtension = 1 - leftEdge;
    if (extension.left < leftExtension) {
      extendGrid("left", leftExtension - extension.left);
    }
    const rightExtension = rightEdge - gridDef.columns;
    if (extension.right < rightExtension) {
      extendGrid("right", rightExtension - extension.right);
    }
    const topExtension = 1 - topEdge;
    if (extension.top < topExtension) {
      extendGrid("top", topExtension - extension.top);
    }
    const bottomExtension = bottomEdge - gridDef.rows;
    if (extension.bottom < bottomExtension) {
      extendGrid("bottom", bottomExtension - extension.bottom);
    }
  }, [isCheat, answer, extension, gridDef]);
}
