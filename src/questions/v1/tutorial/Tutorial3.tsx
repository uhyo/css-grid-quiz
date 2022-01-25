import { GridArea } from "../../../pages/QuestionPage/components/GridArea";
import { useGridItemSelection } from "../../../pages/QuestionPage/logic/useGridItemSelection";
import { useI18n } from "../../../utils/i18n/LanguageContext";
import classes from "./Tutorial.module.css";

export const Tutorial3: React.VFC = () => {
  const { gridDef, selectedItems, toggleItem } = useSampleGrid();

  const code1 = (
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
  );

  const code2 = (
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
  );

  const sample = (
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
  );

  const contents = useI18n({
    en: (
      <>
        <h1>Tutorial #3</h1>
        <p>
          A recent version of CSS Grid has the concept of <b>subgrid</b>. A
          subgrid itself is a grid item of the parent grid container and also
          has its own grid in it. An axis declared as subgrid inherit grid lines
          from the parent grid, still maintaining its own coordinate system.
        </p>
        <p>From now on, let's consider the following HTML structure:</p>
        {code1}
        <p>
          Now you are given style definitions for these three elements. Example:
        </p>
        {code2}
        <p>
          You still need to answer the grid cells occupied by the element at the
          bottom of tree, namely <code>.grid-item</code> one. Note that the
          coordinates displayed in the answering grid is ones of the parent grid
          container (<code>.grid-container</code>).
        </p>
        <p>Sample (answer for the above style):</p>
        {sample}
      </>
    ),
    ja: (
      <>
        <h1>チュートリアル #3</h1>
        <p>
          最近のバージョンのCSS Gridには、<b>サブグリッド</b>
          という概念があります。サブグリッドは、親のグリッドに
          属するグリッドアイテムでありつつ、自身もグリッドコンテナです。
          サブグリッドとして宣言された軸は、親のグリッドトラックをそのまま継承しますが、独自の座標軸を持っています。
        </p>
        <p>今後の問題では、次のようなHTML構造を考えます。</p>
        {code1}
        <p>
          そして、次の例のように、これら3つの要素に対するスタイルが与えられます。
        </p>
        {code2}
        <p>
          これまで通り、ツリーの末端にある<code>.grid-item</code>
          要素が占めるグリッドセルを解答してください。解答用のグリッドに表示されている座標は親グリッド（
          <code>.grid-container</code>）のものである点に注意してください。
        </p>
        <p>例（上記の例に対する解答）:</p>
        {sample}
      </>
    ),
  });

  return <article className={classes.tutorial}>{contents}</article>;
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
