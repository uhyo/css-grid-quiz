import { Tutorial } from "../../../questions/QuestionData";
import { useNextPage } from "../hooks/useNextPage";
import classes from "../QuestionPage.module.css";

type Props = {
  id: string;
  tutorial: Tutorial;
};

export const TutorialPage: React.VFC<Props> = ({ id, tutorial }) => {
  const { goToNextPage } = useNextPage(id);
  return (
    <div className={classes.page}>
      <div className={classes.tutorialArea}>{tutorial.contents}</div>
      <div className={classes.controlGrid}>
        {!tutorial.noNext && (
          <button className={classes.check} onClick={goToNextPage}>
            Proceed
          </button>
        )}
      </div>
    </div>
  );
};
