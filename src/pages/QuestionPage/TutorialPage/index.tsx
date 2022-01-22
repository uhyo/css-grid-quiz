import { Tutorial } from "../../../questions/QuestionData";
import classes from "../QuestionPage.module.css";

type Props = {
  tutorial: Tutorial;
};

export const TutorialPage: React.VFC<Props> = ({ tutorial }) => {
  return (
    <div className={classes.page}>
      <div className={classes.tutorialArea}>{tutorial.contents}</div>
      <div className={classes.controlGrid}>
        <button>Proceed</button>
      </div>
    </div>
  );
};
