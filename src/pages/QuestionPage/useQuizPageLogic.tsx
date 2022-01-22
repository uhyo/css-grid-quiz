import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-location";
import { GridPosition } from "../../questions/GridPosition";
import { QuizData } from "../../questions/QuestionData";

export type ButtonState = "check" | "correct" | "wrong";

export function useQuizPageLogic(quizId: string, data: QuizData) {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<GridPosition[]>([]);
  const [buttonState, setButtonState] = useState<ButtonState>("check");

  const toggleItem = useCallback((column: number, row: number) => {
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
  }, []);

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
        navigate({
          to: `/quiz/v1/${Number(quizId) + 1}`,
        });
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