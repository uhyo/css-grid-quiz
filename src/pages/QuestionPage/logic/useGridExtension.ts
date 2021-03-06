import { useCallback } from "react";
import { useStateReset } from "../../../utils/hooks/useStateReset";

export type EdgeDirection = "top" | "right" | "bottom" | "left";

export type GridExtensionState = {
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
};

export function useGridExtension(deps: readonly unknown[]) {
  const [extension, setExtension] = useStateReset<GridExtensionState>(
    deps,
    () => ({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    })
  );

  const extend = useCallback(
    (direction: EdgeDirection, amount = 1) => {
      setExtension((prev) => {
        return { ...prev, [direction]: prev[direction] + amount };
      });
    },
    [setExtension]
  );

  return {
    extension,
    extend,
  };
}
