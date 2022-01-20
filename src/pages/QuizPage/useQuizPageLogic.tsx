import { useCallback, useState } from "react";

export function useQuizPageLogic() {
  const [selectedItems, setSelectedItems] = useState<`${number}-${number}`[]>(
    []
  );

  const toggleItem = useCallback((column: number, row: number) => {
    setSelectedItems((selectedItems) => {
      const newSelectedItems = [...selectedItems];
      const itemKey = `${column}-${row}` as const;
      if (newSelectedItems.includes(itemKey)) {
        newSelectedItems.splice(newSelectedItems.indexOf(itemKey), 1);
      } else {
        newSelectedItems.push(itemKey);
      }
      return newSelectedItems;
    });
  }, []);

  return {
    selectedItems,
    toggleItem,
  };
}
