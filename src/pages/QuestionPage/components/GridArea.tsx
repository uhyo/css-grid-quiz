import { Fragment } from "react";
import { GridPosition } from "../../../questions/GridPosition";
import { range } from "../../../utils/range";
import { GridExtensionState } from "../logic/useGridExtension";
import classes from "./GridArea.module.css";

type GridDef = { rows: number; columns: number };

type SubgridDef = {
  style: React.CSSProperties;
};

type PropsBase = {
  gridDef: GridDef;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

type PropsHasGrid = PropsBase & {
  hasGrid: true;
  toggleItem: (column: number, row: number) => void;
  selectedItems: readonly GridPosition[];
  extension?: GridExtensionState;
};

type PropsNoGrid = PropsBase & {
  hasGrid?: false;
};

type Props = PropsHasGrid | PropsNoGrid;

export const GridArea: React.VFC<Props> = (props) => {
  const { hasGrid, gridDef, className, style, children } = props;

  const extension = (hasGrid && props.extension) || {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
  const gridContents = hasGrid ? (
    <>
      {Array.from(
        range(1 - extension.top, gridDef.rows + extension.bottom + 1)
      ).map((row) => (
        <Fragment key={`row-${row}`}>
          {Array.from(
            range(1 - extension.left, gridDef.columns + extension.right + 1)
          ).map((column) => {
            const isSelected = props.selectedItems.includes(`${column},${row}`);
            return (
              <button
                key={`column-${column}`}
                role="checkbox"
                aria-checked={isSelected}
                className={
                  isSelected ? classes.selectedItem : classes.normalItem
                }
                style={getGridPlacelement(column, row, gridDef)}
                onClick={() => props.toggleItem(column, row)}
                aria-label={`(${column}, ${row})`}
              >
                {isInGrid(column, row, gridDef) ? `(${column}, ${row})` : null}
              </button>
            );
          })}
        </Fragment>
      ))}
    </>
  ) : null;

  return (
    <div
      className={
        classes.grid +
        (hasGrid ? ` ${classes.gridHasGrid}` : "") +
        (className ? ` ${className}` : "")
      }
      style={style}
    >
      {gridContents}
      {children}
    </div>
  );
};

function isInGrid(column: number, row: number, gridDef: GridDef) {
  return (
    column >= 1 && column <= gridDef.columns && row >= 1 && row <= gridDef.rows
  );
}

function getGridPlacelement(
  column: number,
  row: number,
  gridDef: GridDef
): React.CSSProperties {
  const gridRow =
    1 <= row
      ? `${row}`
      : // 0 -> -(gridDef.rows+2), -1 -> -(gridDef.rows+3) ...
        `${-gridDef.rows + row - 2}`;

  const gridColumn =
    1 <= column ? `${column}` : `${-gridDef.columns + column - 2}`;
  return {
    gridRow,
    gridColumn,
  };
}
