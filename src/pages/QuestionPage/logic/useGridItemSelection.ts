import { useCallback } from "react";
import { GridPosition } from "../../../questions/GridPosition";
import { useStateReset } from "../../../utils/hooks/useStateReset";

export function useGridItemSelection(
  deps: readonly unknown[],
  initialState?: readonly GridPosition[]
) {
  const [selectedItems, setSelectedItems] = useStateReset<
    readonly GridPosition[]
  >(deps, () => initialState ?? []);
  const toggleItem = useCallback(
    (column: number, row: number) => {
      setSelectedItems((selectedItems) => {
        const newSelectedItems = [...selectedItems];
        const itemKey: GridPosition = `${column},${row}`;
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

  return {
    selectedItems,
    toggleItem,
  };
}
