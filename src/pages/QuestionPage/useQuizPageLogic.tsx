import { useCallback, useEffect, useState } from "react";
import { GridPosition } from "../../questions/GridPosition";
import { QuizData } from "../../questions/QuestionData";
import { useStateReset } from "../../utils/hooks/useStateReset";
import { useNextPage } from "./hooks/useNextPage";

export type ButtonState = "check" | "correct" | "wrong";

export function useQuizPageLogic(quizId: string, data: QuizData) {
  const { goToNextPage } = useNextPage(quizId);
  const [selectedItems, setSelectedItems] = useStateReset<GridPosition[]>(
    [quizId],
    () => []
  );
  const [buttonState, setButtonState] = useState<ButtonState>("check");

  const toggleItem = useCallback(
    (column: number, row: number) => {
      setSelectedItems((selectedItems) => {
        const newSelectedItems = [...selectedItems];
        const itemKey: GridPosition = `${column}-${row}`;
        if (newSelectedItems.includes(itemKey)) {
          newSelectedItems.splice(newSelectedItems.indexOf(itemKey), 1);
        } else {
          newSelectedItems.push(itemKey);
        }
        return newSelectedItems;
      });
    },
    [setSelectedItems]
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
    buttonState,
    check,
  };
}

function checkAnswer(
  selectedItems: readonly GridPosition[],
  answer: readonly GridPosition[]
) {
  // TODO: O(N^2)
  console.log(selectedItems, answer);
  return (
    selectedItems.length === answer.length &&
    selectedItems.every((item) => answer.includes(item))
  );
}
