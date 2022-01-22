import { Fragment } from "react";
import { GridPosition } from "../../../questions/GridPosition";
import { range } from "../../../utils/range";
import classes from "./GridArea.module.css";

type Props = {
  gridDef: { rows: number; columns: number };
  toggleItem: (column: number, row: number) => void;
  selectedItems: readonly GridPosition[];
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const GridArea: React.VFC<Props> = ({
  gridDef,
  toggleItem,
  selectedItems,
  className,
  style,
  children,
}) => {
  return (
    <div
      className={classes.grid + (className ? ` ${className}` : "")}
      style={style}
    >
      {Array.from(range(1, gridDef.rows + 1)).map((row) => (
        <Fragment key={`row-${row}`}>
          {Array.from(range(1, gridDef.columns + 1)).map((column) => (
            <button
              key={`column-${column}`}
              className={classes.normalItem}
              style={{
                gridRow: row,
                gridColumn: column,
              }}
              onClick={() => toggleItem(column, row)}
            >
              ({column}, {row})
            </button>
          ))}
        </Fragment>
      ))}
      {children}
      {selectedItems.map((itemKey) => {
        const [column, row] = itemKey.split("-").map((v) => Number(v));
        return (
          <div
            key={itemKey}
            className={classes.selectedItem}
            style={{
              gridRow: row,
              gridColumn: column,
            }}
            onClick={() => toggleItem(column, row)}
          >
            ({column}, {row})
          </div>
        );
      })}
    </div>
  );
};
