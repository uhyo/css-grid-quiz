import { useCallback, useEffect, useReducer, useState } from "react";
import { GridPosition } from "../../../questions/GridPosition";
import { QuizData } from "../../../questions/QuestionData";
import { useNextPage } from "../hooks/useNextPage";
import { useGridExtension } from "./useGridExtension";
import { useGridItemSelection } from "./useGridItemSelection";

export type ButtonState = "check" | "correct" | "wrong";

export function useQuizPageLogic(quizId: string, data: QuizData) {
  const { goToNextPage } = useNextPage(quizId);
  const [resetCount, reset] = useReducer((c: number) => c + 1, 0);
  const { selectedItems, toggleItem } = useGridItemSelection([
    quizId,
    resetCount,
  ]);
  const { extension, extend: extendGrid } = useGridExtension([
    quizId,
    resetCount,
  ]);
  const [buttonState, setButtonState] = useState<ButtonState>("check");

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
        setButtonState("check");
        goToNextPage();
      }, 500);
      return () => clearTimeout(timer);
    }
    if (buttonState === "wrong") {
      const timer = setTimeout(() => {
        setButtonState("check");
      }, 2500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [buttonState]);

  return {
    selectedItems,
    toggleItem,
    extension,
    extendGrid,
    buttonState,
    check,
    reset,
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
