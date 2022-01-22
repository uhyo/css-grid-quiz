import { EdgeDirection } from "../logic/useGridExtension";
import plusImage from "./assets/plus.png";
import classes from "./GridAreaExtensionControl.module.css";

type Props = {
  children?: React.ReactNode;
  onExtend: (direction: EdgeDirection) => void;
};

export const GridAreaExtensionControl: React.VFC<Props> = ({
  children,
  onExtend,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>{children}</div>
      <div className={classes.top}>
        <button
          aria-label="Extend the top edge"
          className={classes.button}
          onClick={() => onExtend("top")}
        >
          <img src={plusImage} width={20} height={20} alt="plus" />
        </button>
      </div>
      <div className={classes.right}>
        <button
          aria-label="Extend the right edge"
          className={classes.button}
          onClick={() => onExtend("right")}
        >
          <img src={plusImage} width={20} height={20} alt="plus" />
        </button>
      </div>
      <div className={classes.bottom}>
        <button
          aria-label="Extend the bottom edge"
          className={classes.button}
          onClick={() => onExtend("bottom")}
        >
          <img src={plusImage} width={20} height={20} alt="plus" />
        </button>
      </div>
      <div className={classes.left}>
        <button
          aria-label="Extend the left edge"
          className={classes.button}
          onClick={() => onExtend("left")}
        >
          <img src={plusImage} width={20} height={20} alt="plus" />
        </button>
      </div>
    </div>
  );
};
