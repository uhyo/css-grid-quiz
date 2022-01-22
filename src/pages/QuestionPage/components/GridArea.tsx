import { Fragment } from "react";
import { GridPosition } from "../../../questions/GridPosition";
import { range } from "../../../utils/range";
import classes from "./GridArea.module.css";

type PropsBase = {
  gridDef: { rows: number; columns: number };
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

type PropsHasGrid = PropsBase & {
  hasGrid: true;
  toggleItem: (column: number, row: number) => void;
  selectedItems: readonly GridPosition[];
};

type PropsNoGrid = PropsBase & {
  hasGrid?: false;
};

type Props = PropsHasGrid | PropsNoGrid;

export const GridArea: React.VFC<Props> = (props) => {
  const { hasGrid, gridDef, className, style, children } = props;
  return (
    <div
      className={
        classes.grid +
        (hasGrid ? ` ${classes.gridHasGrid}` : "") +
        (className ? ` ${className}` : "")
      }
      style={style}
    >
      {hasGrid ? (
        <>
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
                  onClick={() => props.toggleItem(column, row)}
                >
                  ({column}, {row})
                </button>
              ))}
            </Fragment>
          ))}
          {props.selectedItems.map((itemKey) => {
            const [column, row] = itemKey.split("-").map((v) => Number(v));
            return (
              <div
                key={itemKey}
                className={classes.selectedItem}
                style={{
                  gridRow: row,
                  gridColumn: column,
                }}
                onClick={() => props.toggleItem(column, row)}
              >
                ({column}, {row})
              </div>
            );
          })}
        </>
      ) : null}
      {children}
    </div>
  );
};
