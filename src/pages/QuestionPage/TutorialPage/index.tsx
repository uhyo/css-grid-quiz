import { Tutorial } from "../../../questions/QuestionData";
import { useI18n } from "../../../utils/i18n/LanguageContext";
import { useNextPage } from "../hooks/useNextPage";
import classes from "../QuestionPage.module.css";

type Props = {
  id: string;
  tutorial: Tutorial;
};

export const TutorialPage: React.VFC<Props> = ({ id, tutorial }) => {
  const { goToNextPage } = useNextPage(id);
  const langs = useI18n({
    en: {
      proceed: "Proceed",
    },
    ja: {
      proceed: "進む",
    },
  });
  return (
    <div className={classes.page}>
      <div className={classes.tutorialArea}>{tutorial.contents}</div>
      <div className={classes.controlGrid}>
        {!tutorial.noNext && (
          <button className={classes.check} onClick={goToNextPage}>
            {langs.proceed}
          </button>
        )}
      </div>
    </div>
  );
};
