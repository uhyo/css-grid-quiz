import { useMatch } from "react-location";
import { QuestionData } from "../../questions/QuestionData";
import { QuizPage } from "./QuizPage";
import { TutorialPage } from "./TutorialPage";

export const QuestionPage: React.VFC = () => {
  const {
    params: { id },
    data: { quizData },
  } = useMatch<{
    LoaderData: {
      quizData: QuestionData;
    };
  }>();
  if (quizData === undefined) {
    return null;
  }
  if (quizData.type === "tutorial") {
    return <TutorialPage tutorial={quizData} />;
  }
  return <QuizPage quizId={id} quizData={quizData} />;
};
