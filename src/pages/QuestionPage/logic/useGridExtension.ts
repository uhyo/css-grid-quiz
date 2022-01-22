import { useCallback } from "react";
import { useStateReset } from "../../../utils/hooks/useStateReset";

export type EdgeDirection = "top" | "right" | "bottom" | "left";

export type GridExtensionState = {
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
};

export function useGridExtension(quizId: string) {
  const [extension, setExtension] = useStateReset<GridExtensionState>(
    [quizId],
    () => ({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    })
  );

  const extend = useCallback(
    (direction: EdgeDirection) => {
      setExtension((prev) => {
        return { ...prev, [direction]: prev[direction] + 1 };
      });
    },
    [setExtension]
  );

  return {
    extension,
    extend,
  };
}
