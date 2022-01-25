import { GridArea } from "../../../pages/QuestionPage/components/GridArea";
import { GridAreaExtensionControl } from "../../../pages/QuestionPage/components/GridAreaExtensionControl";
import { useGridExtension } from "../../../pages/QuestionPage/logic/useGridExtension";
import { useGridItemSelection } from "../../../pages/QuestionPage/logic/useGridItemSelection";
import { useI18n } from "../../../utils/i18n/LanguageContext";
import classes from "./Tutorial.module.css";

export const Tutorial2: React.VFC = () => {
  const { gridDef, selectedItems, extension, toggleItem, extend } =
    useSampleGrid();

  const sample = (
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
  );

  const contents = useI18n({
    en: (
      <>
        <h1>Tutorial #2</h1>
        <p>
          When grid items are placed outside of the grid area explicitly deined
          by <code>grid-template-columns</code> and{" "}
          <code>grid-template-rows</code>,<b>implicit grid tracks</b> and{" "}
          <b>implicit grid lines</b> are generated outside of explicit grid
          tracks.
        </p>
        <p>
          From now on, the correct answer may enter those implicit grid cells.
        </p>
        <p>
          To specify such cells, you need to <em>extend</em> the displayed grid
          by pressing the plus buttons placed at each edge.
        </p>
        <p>
          To remove extended cells, you need to reset the state of the grid by
          pressing “Reset” button.
        </p>
        <p>Sample:</p>
        {sample}
      </>
    ),
    ja: (
      <>
        <h1>チュートリアル #2</h1>
        <p>
          グリッドアイテムが<code>grid-template-columns</code>および
          <code>grid-template-rows</code>
          によって明示的に定義されたグリッドエリアの外に配置された場合、
          明示的なグリッドエリアの外側に<b>暗黙のグリッドトラック</b>
          が生成されます。
        </p>
        <p>
          これからは、正しい答えが初期表示されているグリッドの範囲を超えて暗黙のグリッドトラックにまたがる可能性があります。
        </p>
        <p>
          そのような回答をするためには、表示されているグリッドを、各辺に配置されたプラスボタンを押すことで拡張する必要があります。
        </p>
        <p>
          拡張したグリッドセルを元に戻すには、“Reset”ボタンを押して画面を初期化する必要があります。
        </p>
        <p>拡張できるグリッドセルのサンプル:</p>
        {sample}
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
  const { selectedItems, toggleItem } = useGridItemSelection([]);
  const { extension, extend } = useGridExtension([]);

  return {
    gridDef,
    selectedItems,
    extension,
    toggleItem,
    extend,
  };
}
