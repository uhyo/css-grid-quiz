import { GridArea } from "../../../pages/QuestionPage/components/GridArea";
import { GridAreaExtensionControl } from "../../../pages/QuestionPage/components/GridAreaExtensionControl";
import { useGridExtension } from "../../../pages/QuestionPage/logic/useGridExtension";
import { useGridItemSelection } from "../../../pages/QuestionPage/logic/useGridItemSelection";
import classes from "./Tutorial.module.css";

export const Tutorial2: React.VFC = () => {
  const { gridDef, selectedItems, extension, toggleItem, extend } =
    useSampleGrid();
  return (
    <article className={classes.tutorial}>
      <h1>Tutorial #2</h1>
      <p>
        When grid items are placed outside of the grid area explicitly deined by{" "}
        <code>grid-template-columns</code> and <code>grid-template-rows</code>,
        <b>implicit grid tracks</b> and <b>implicit grid lines</b> are
        generated.
      </p>
      <p>
        From now on, the correct answer may enter those implicit grid cells.
      </p>
      <p>
        To specify such cells, you need to <em>extend</em> the displayed grid by
        pressing the plus buttons placed at each edge.
      </p>
      <p>
        To remove extended cells, you need to reset the state of the grid by
        pressing “Reset” button.
      </p>
      <p>Sample:</p>
      <div className={classes.sampleGridWrapper}>
        <GridAreaExtensionControl onExtend={extend}>
          <GridArea
            hasGrid
            extension={extension}
            gridDef={gridDef}
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
            }}
            selectedItems={selectedItems}
            toggleItem={toggleItem}
          />
        </GridAreaExtensionControl>
      </div>
    </article>
  );
};

function useSampleGrid() {
  const gridDef = {
    columns: 2,
    rows: 2,
  };
  const { selectedItems, toggleItem } = useGridItemSelection("Tutorial2");
  const { extension, extend } = useGridExtension("Tutorial2");

  return {
    gridDef,
    selectedItems,
    extension,
    toggleItem,
    extend,
  };
}
