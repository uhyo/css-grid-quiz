import { GridArea } from "../../../pages/QuestionPage/components/GridArea";
import { useGridItemSelection } from "../../../pages/QuestionPage/logic/useGridItemSelection";
import classes from "./Tutorial.module.css";

export const Tutorial3: React.VFC = () => {
  const { gridDef, selectedItems, toggleItem } = useSampleGrid();
  return (
    <article className={classes.tutorial}>
      <h1>Tutorial #3</h1>
      <p>
        A recent version of CSS Grid has the concept of <b>subgrid</b>. A
        subgrid itself is a grid item of the parent grid container and also has
        its own grid in it. An axis declared as subgrid inherit grid lines from
        the parent grid, still maintaining its own coordinate system.
      </p>
      <p>From now on, let's consider the following HTML structure:</p>
      <pre>
        <code>
          {`
<div class="grid-container">
  <div class="subgrid">
    <div class="grid-item"></div>
  </div>
</div>
`.trim()}
        </code>
      </pre>
      <p>
        Now you are given style definitions for these three elements. Example:
      </p>
      <pre>
        <code>
          {`
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
.subgrid {
  grid-column: 2 / 4;
  grid-rows: 1 / 3;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
.grid-item {
  grid-column: 1;
  grid-row: 1;
}
`.trim()}
        </code>
      </pre>
      <p>
        Note that the coordinates displayed in the answering grid is ones of the
        parent grid container.
      </p>
      <p>Sample (answer for the above style):</p>
      <div className={classes.sampleGridWrapper}>
        <GridArea
          hasGrid
          gridDef={gridDef}
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
          }}
          selectedItems={selectedItems}
          toggleItem={toggleItem}
        />
      </div>
    </article>
  );
};

function useSampleGrid() {
  const gridDef = {
    columns: 3,
    rows: 3,
  };
  const { selectedItems, toggleItem } = useGridItemSelection([], ["2,1"]);

  return {
    gridDef,
    selectedItems,
    toggleItem,
  };
}
