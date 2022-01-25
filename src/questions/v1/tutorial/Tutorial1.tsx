import { GridArea } from "../../../pages/QuestionPage/components/GridArea";
import { useGridItemSelection } from "../../../pages/QuestionPage/logic/useGridItemSelection";
import { useI18n } from "../../../utils/i18n/LanguageContext";
import classes from "./Tutorial.module.css";

export const Tutorial1: React.VFC = () => {
  const { gridDef, selectedItems, toggleItem } = useSampleGrid();

  const code1 = (
    <pre>
      <code>
        {`
<div class="grid-container">
  <div class="grid-item"></div>
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
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
        selectedItems={selectedItems}
        toggleItem={toggleItem}
      />
    </div>
  );

  const contents = useI18n({
    en: (
      <>
        <h1>Tutorial #1</h1>
        <p>Consider the following HTML structure:</p>
        {code1}
        <p>You are given style definitions for above elements. Example:</p>
        {code2}
        <p>
          Click/tap all grid cells occupied by the <code>.grid-item</code>{" "}
          element. Press “Check” button to check your answer.
        </p>
        <p>Sample:</p>
        {sample}
        <p>After making three mistakes, a “Cheat” button appears.</p>
      </>
    ),
    ja: (
      <>
        <h1>チュートリアル #1</h1>
        <p>ここでは、次のHTML構造を考えます。</p>
        {code1}
        <p>これに対して、次の例のようにスタイル定義が与えられます。</p>
        {code2}
        <p>
          <code>.grid-item</code>
          要素が占めるすべてのグリッドセルをクリック/タップしてください。
          その後“Check”ボタンを押して答えが合っているか確かめましょう。
        </p>
        <p>例:</p>
        {sample}
        <p>3回間違えると“Cheat”ボタンが出現します。</p>
      </>
    ),
  });

  return <article className={classes.tutorial}>{contents}</article>;
};

function useSampleGrid() {
  const gridDef = {
    columns: 2,
    rows: 2,
  };
  const { selectedItems, toggleItem } = useGridItemSelection([], ["1,1"]);

  return {
    gridDef,
    selectedItems,
    toggleItem,
  };
}
